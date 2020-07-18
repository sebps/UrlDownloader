# URL DOWNLOADER
Module to download a list of urls into the target system and specify the max amount of parallel downloading

## Install
```npm install url-downloader```

## Usage
```script
    const urlDownloader = require('url-downloader');
    const resources [{
        "target": "LOCAL",
        "origin": "https://images.unsplash.com/photo-1558981852-426c6c22a060",
        "destination": "1.jpg"
    }, {
        "target": "LOCAL",
        "origin": "https://images.unsplash.com/photo-1558980664-3a031cf67ea8",
        "destination": "2.jpg"
    }];

    // optional
    const options = {
        maxConcurrency: 5
    }

    urlDownloader.download(resources, options).then((results) => {
        console.log('files downloaded and saved');
        console.log(results);
    })
```

## Options
You can specify a different target to save the downloaded url content.

Current allowed targets are : 
* LOCAL ( file system )

Future destinations will be supported as well :
* AWS_S3 ( Amazon S3 bucket )
* MICROSOFT_AZURE_STORAGE ( Microsoft Azure Storage )
* GOOGLE_CLOUD_STORAGE ( Google Cloud Storage )
