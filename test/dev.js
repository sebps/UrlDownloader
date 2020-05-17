// const DEFAULT_MAX_CONCURRENCY = require('os').cpus().length;
// const ConnectionManager = require('../helpers/ConnectionManager');
// const path = require('path');
// const index = require('../index');

// describe('Test suite', function () {
//     this.timeout(500000);
//     var downloadDirPath = path.join(__dirname, 'download');
//     var downloadData = require('./data.json').map((resource) => {
//         return Object.assign(resource, {
//             destination: downloadDirPath + '/' + resource.destination
//         })
//     })

//     it('basic test', async function () {
//         var downloadList = downloadData.slice(0,20);

//         const results = await index(downloadList, {
//             maxConcurrency: 1,
//             logging: false
//         })

//         // const connectionManager = new ConnectionManager();
//         // await connectionManager.createConnectionPool(DEFAULT_MAX_CONCURRENCY);
//     });
// })