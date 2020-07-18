const DEFAULT_MAX_CONCURRENCY = require('os').cpus().length;

const ConnectionManager = require('./helpers/ConnectionManager');
const LoggingManager = require('./helpers/LoggingManager');
const utils = require('./utils');

async function download(resources, options) {  
    const start = Date.now();

    // assign ids to resources 
    resources.forEach((resource) => {
        if(!resource.id) resource.id = utils.generateID('resource');
        if(resource.destination.indexOf('/') === -1) resource.destination = './'+resource.destination;
    });

    if(options && options.logging) {
        LoggingManager.enableLogging();
    } else {
        LoggingManager.disableLogging();
    }

    const connectionManager = new ConnectionManager();
    const maxConcurrency = options && options.maxConcurrency ? options.maxConcurrency : DEFAULT_MAX_CONCURRENCY;
    const downloadedList = [];
    const errorList = [];

    // create connections pool 
    try {
        await connectionManager.createConnectionPool(maxConcurrency);
    } catch(err) {
        throw new Error("connection pool could not be created");
    }

    // download files
    const promises = [];
    let resourceIndex = 0;

    while (resourceIndex < resources.length) {
        LoggingManager.log('waiting for connection to download');
        LoggingManager.log(resources[resourceIndex]);
        LoggingManager.log('\n');

        let connection;

        try {
            connection = await connectionManager.allocateConnection();
        } catch (err) {
            throw new Error('connection could not be allocated');
        }

        LoggingManager.log('downloading ' + resources[resourceIndex]);
        LoggingManager.log('with connection : ')
        LoggingManager.log(connection.id);
        LoggingManager.log('\n');

        let resource = resources[resourceIndex];
        let downloadPromise = new Promise(async (downloadResolve, downloadReject) => {
            try {
                const resourceDownloadStart = Date.now();
                const downloadResult = await connection.download(resource);
                const resourceDownloadEnd = Date.now();

                LoggingManager.log('resource downloaded : ');
                LoggingManager.log(resource.origin);
                LoggingManager.log('\n');
    
                if(downloadResult) downloadedList.push({
                    resource: resource,
                    downloadTime: resourceDownloadEnd - resourceDownloadStart
                });
    
                connectionManager.unallocateConnection(connection);
    
                downloadResolve();
            } catch(err) {
                loggingManager.log('resource download error : '+resource.id);
                loggingManager.log(err);
                
                errorList.push({
                    resource: resource,
                    error: err 
                });

                downloadReject();
            }
        });

        promises.push(downloadPromise);

        resourceIndex++;
    }

    try {
        await Promise.all(promises);
    } catch (err) {
        LoggingManager.log(err);
    }

    LoggingManager.log('all resources have been downloaded');
    
    connectionManager.closeConnections();

    const end = Date.now();
    const downloadTime = end - start;

    return {
        downloaded: downloadedList,
        errors: errorList,
        downloadTime: downloadTime
    }
}

module.exports = {
    download: download
};