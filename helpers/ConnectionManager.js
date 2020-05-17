const ALLOCATION_RETRIEVE_INTERVAL = 1000;
const MAX_ALLOCATION_TIME = 10000;
const Path = require('path');
const { fork } = require('child_process');
const LoggingManager = require('./LoggingManager');
const utils = require('../utils');

class Connection {
    constructor(mode = 'BUFFER') {
        // 2 modes are allowed : BUFFER or STREAMING to indicate if the connection should first download the resource locally or only stream the resource
        this.mode = mode;
        this.id = utils.generateID('connection');
        this.stream = null;
        this.available = true;
        this.closed = false;
        this.resourcesDownloading = {};
        
        // child_process.fork method
        this.worker = fork(Path.resolve(__dirname, '../workers/connection'));
        // child_workers method
        // this.worker = new Worker('workers/connection.js');

        this.worker.on('message', (message) => {
            LoggingManager.log(`message from connection worker ${this.worker.pid} : `);
            LoggingManager.log(message);

            if(message && message.operation === 'download' && this.resourcesDownloading[message.resource]) {
                LoggingManager.log('message from worker in download method : ');
                
                if(message.result === 'success') {
                    this.resourcesDownloading[message.resource].resolve()
                } else {
                    this.resourcesDownloading[message.resource].reject();
                }

                delete this.resourcesDownloading[message.resource];
            }
        });
    }

    download(resource) {
        const promise = new Promise((resolve, reject) => {
            // child_process method
            this.worker.send({
                command: 'download',
                resource: resource
            });

            // child_workers method
            // this.worker.postMessage({
            //     command: 'download',
            //     resource: resource
            // });

            this.resourcesDownloading[resource.id] = { resolve, reject };
        });
        
        return promise;
    }

    close() {
        this.worker.kill();
        this.closed = true;
    }
}

class ConnectionManager {
    constructor() {
        this.connections = null;
    }

    getConnections() {
        return this.connections;
    }

    allocateConnection() {
        let that = this;

        return new Promise((resolve, reject) => {
            let freeConnection = that.connections.find(connection => connection.available);

            LoggingManager.log('start to allocate connection : ');
            LoggingManager.log(that.connections);

            if (freeConnection) {
                LoggingManager.log('connection allocated');
                LoggingManager.log(freeConnection.id);
                LoggingManager.log('\n');

                freeConnection.available = 0;

                return resolve(freeConnection);
            } else {
                let ELAPSED_TIME = 0;
                // try to reallocate connection every interval time
                let allocationInterval = setInterval(function () {
                    ELAPSED_TIME += ALLOCATION_RETRIEVE_INTERVAL;

                    if (ELAPSED_TIME > MAX_ALLOCATION_TIME) {
                        LoggingManager.log('connection allocation timeout :');
                        clearInterval(allocationInterval)
                        return reject();
                    }

                    freeConnection = that.connections.find(connection => connection.available);

                    if (freeConnection) {
                        LoggingManager.log('connection allocated');
                        LoggingManager.log(freeConnection.id);
                        LoggingManager.log('\n');

                        freeConnection.available = 0;
                        clearInterval(allocationInterval)
                        resolve(freeConnection);
                    }
                }, ALLOCATION_RETRIEVE_INTERVAL);
            }
        })
    }

    unallocateConnection(connection) {
        LoggingManager.log('connection unallocated');
        LoggingManager.log(connection.id);
        LoggingManager.log('\n');

        connection.available = 1;
    }

    closeConnections() {
        this.connections.forEach((connection, id) => {
            connection.close();
        });

        this.connections = null;
    }

    async createConnectionPool(maxConcurrency) {
        const connectionPromises = [];

        for (let connectionIndex = 0; connectionIndex < maxConcurrency; connectionIndex++) {
            connectionPromises.push(this.connect());
        }

        try {
            this.connections = await Promise.all(connectionPromises);
        } catch (err) {
            throw new Error("connection failed");
        }

        return true;
    }

    async connect() {
        return new Connection();
    }
}

module.exports = ConnectionManager;