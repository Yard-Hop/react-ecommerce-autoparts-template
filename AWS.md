# Fetch or read data from aws s3

const aws = require('aws-sdk');

const s3 = new aws.S3({ accessKeyId: '', secretAccessKey: ''});

s3.getObject(getParams, (err, data) => {
  if (err) {
    console.log('ERROR: ', err);
  } else {
    console.log(data.Body.toString());
  }
});