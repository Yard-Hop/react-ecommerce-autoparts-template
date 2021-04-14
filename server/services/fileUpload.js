/* eslint-disable */
const faker = require('faker');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { SECRET_ACCESS_KEY, ACCESS_KEY_ID, REGION } = require('../../db/aws.json');

aws.config.update({
  secretAccessKey: SECRET_ACCESS_KEY,
  accessKeyId: ACCESS_KEY_ID,
  region: REGION,
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid Mime Type. Only JPEG and PNG allowed.'), false);
  }
};

const counter = 0;

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: 'teamcrocs/user-images',
    acl: 'public-read',
    metadata(req, file, cb) {
      cb(null, { fieldName: 'TESTING_META_DATA' });
    },
    key(req, file, cb) {
      cb(null, `${faker.random.alphaNumeric(10)}-${counter + 1}`);
    },
  }),
});

module.exports = upload;
