const expect = require('chai').expect;
const index = require('../index')
const path = require('path');
const fs = require('fs');

describe('Test suite', function () {
    this.timeout(500000);

    var downloadDirPath = path.join(__dirname, 'download');
    var downloadData = require('./data.json').map((resource) => {
        return Object.assign(resource, {
            destination: downloadDirPath + '/' + resource.destination
        })
    })

    // describe('Basic files verification test', function () {
    //     var downloadList = downloadData.slice(0, 5);

    //     it('1 connection, 5 resources download', async function () {
    //         const results = await index.download(downloadList, {
    //             maxConcurrency: 1,
    //             logging: false
    //         });

    //         const expectedFiles = downloadList.map(resource => resource.destination);
    //         const scannedFiles = fs.readdirSync(downloadDirPath).map(file => downloadDirPath + '/' + file);

    //         expect(scannedFiles.length).to.equal(expectedFiles.length, "scanned files amount different than expected");
    //         expect(scannedFiles).to.deep.equal(expectedFiles, "scanned files doesn't match with expected files");
    //     });

    //     after(function () {
    //         fs.rmdirSync(downloadDirPath, {
    //             recursive: true
    //         })
    //     })
    // })

    describe('System Resources', function () {
        const CORE_CPUS = require('os').cpus().length;
        it('System core cpus : '+CORE_CPUS, async function () {});
    })

    describe('Benchmark test', function () {
        var benchmark = {};
        var maxConcurrency;
        var start;
        var end;

        describe('5 resources download', function () {
            var downloadSize = 5;
            var downloadList = downloadData.slice(0, downloadSize);
            benchmark[downloadSize] = {};

            it('1 connection', async function () {
                maxConcurrency = 1;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('2 connections', async function () {
                maxConcurrency = 2;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('3 connections', async function () {
                maxConcurrency = 3;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('4 connections', async function () {
                maxConcurrency = 4;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('5 connections', async function () {
                maxConcurrency = 5;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('6 connections', async function () {
                maxConcurrency = 6;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('7 connections', async function () {
                maxConcurrency = 7;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('8 connections', async function () {
                maxConcurrency = 8;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('9 connections', async function () {
                maxConcurrency = 9;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('10 connections', async function () {
                maxConcurrency = 10;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('11 connections', async function () {
                maxConcurrency = 11;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('12 connections', async function () {
                maxConcurrency = 12;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('13 connections', async function () {
                maxConcurrency = 13;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('14 connections', async function () {
                maxConcurrency = 14;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('15 connections', async function () {
                maxConcurrency = 15;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            afterEach(function () {
                fs.rmdirSync(downloadDirPath, {
                    recursive: true
                })
            })
        })

        describe('10 resources download', function () {
            var downloadSize = 10;
            var downloadList = downloadData.slice(0, downloadSize);
            benchmark[downloadSize] = {};

            it('1 connection', async function () {
                maxConcurrency = 1;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('2 connections', async function () {
                maxConcurrency = 2;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('3 connections', async function () {
                maxConcurrency = 3;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('4 connections', async function () {
                maxConcurrency = 4;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('5 connections', async function () {
                maxConcurrency = 5;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('6 connections', async function () {
                maxConcurrency = 6;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('7 connections', async function () {
                maxConcurrency = 7;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('8 connections', async function () {
                maxConcurrency = 8;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('9 connections', async function () {
                maxConcurrency = 9;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('10 connections', async function () {
                maxConcurrency = 10;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('11 connections', async function () {
                maxConcurrency = 11;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('12 connections', async function () {
                maxConcurrency = 12;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('13 connections', async function () {
                maxConcurrency = 13;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('14 connections', async function () {
                maxConcurrency = 14;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('15 connections', async function () {
                maxConcurrency = 15;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            afterEach(function () {
                fs.rmdirSync(downloadDirPath, {
                    recursive: true
                })
            })
        })

        describe('20 resources download', function () {
            var downloadSize = 20;
            var downloadList = downloadData.slice(0, downloadSize);
            benchmark[downloadSize] = {};

            it('1 connection', async function () {
                maxConcurrency = 1;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('2 connections', async function () {
                maxConcurrency = 2;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('3 connections', async function () {
                maxConcurrency = 3;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('4 connections', async function () {
                maxConcurrency = 4;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('5 connections', async function () {
                maxConcurrency = 5;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('6 connections', async function () {
                maxConcurrency = 6;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('7 connections', async function () {
                maxConcurrency = 7;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('8 connections', async function () {
                maxConcurrency = 8;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('9 connections', async function () {
                maxConcurrency = 9;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('10 connections', async function () {
                maxConcurrency = 10;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('11 connections', async function () {
                maxConcurrency = 11;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('12 connections', async function () {
                maxConcurrency = 12;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('13 connections', async function () {
                maxConcurrency = 13;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('14 connections', async function () {
                maxConcurrency = 14;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            it('15 connections', async function () {
                maxConcurrency = 15;
                start = Date.now();
                const results = await index.download(downloadList, {
                    maxConcurrency: maxConcurrency,
                    logging: false
                })
                end = Date.now();
                benchmark[downloadSize][maxConcurrency] = end - start;
            });

            afterEach(function () {
                fs.rmdirSync(downloadDirPath, {
                    recursive: true
                })
            })

            after('Benchmark summary', function (done) {
                console.log('benchmark summary is : ');
                console.log(benchmark);
                fs.writeFileSync(__dirname + '/benchmark.json', JSON.stringify(benchmark));
                done();
            });
        })
    })
})
