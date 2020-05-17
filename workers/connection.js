const fs = require('fs');
const fetch = require('node-fetch');

async function download(resource) {
    return new Promise(async (resolve, reject) => {
        switch (resource.target) {
            case 'LOCAL':
            default:
                const destinationDirSplitted = resource.destination.split('/');
                const destinationDir = destinationDirSplitted.length === 1 ? destinationDirSplitted[0] : destinationDirSplitted.splice(0, destinationDirSplitted.length - 1).join('/');

                fs.mkdirSync(destinationDir, {
                    recursive: true
                });

                const readStream = await fetch(resource.origin).then(res => res.body);
                const writeStream = fs.createWriteStream(resource.destination);

                readStream.pipe(writeStream);
                readStream.on("error", (err) => {
                    return resolve('error');
                });

                writeStream.on('close', function () {
                    return resolve('success');
                }).on('error', function (err) {
                    return resolve('error');
                })
                break;
            case 'AWS_S3':
                break;
            case 'MICROSOFT_AZURE_STORAGE':
                break;
            case 'GOOGLE_CLOUD_STORAGE':
                break;
                // case 'STREAMING':
                //     const stream = fetch(resource.origin).then(response => response.body);
                //     return resolve(stream);
                // break;
        }
    })
}

process.on('message', async message => {
    switch (message.command) {
        case 'download':
            await download(message.resource);

            process.send({
                operation: 'download',
                resource: message.resource.id,
                result: 'success'
            });                
        break;
    }
});