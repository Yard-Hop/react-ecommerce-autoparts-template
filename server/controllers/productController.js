const { ObjectId } = require('bson');
const Product = require('../models/productModel');
const upload = require('../services/fileUpload');

const singleImageUpload = upload.single('image');

async function getProduct(req, res, next) {
  const { productId } = req.params;

  await Product.find({ _id: ObjectId(productId) })
    .then((product) => {
      res.locals.product = product;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getAllProducts(req, res, next) {
  await Product.find()
    .then((products) => {
      res.locals.products = products;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getProductsByUserId(req, res, next) {
  const { userId } = req.params;

  await Product.find({ sellerId: userId })
    .then((user) => {
      res.locals.user = user;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function getAllProductsByUser(req, res, next) {
  await Product.find({
    sellerID: req.params.id,
  })
    .then((products) => {
      res.locals.products = products;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

// post request to s3 and then post request to db
async function createProduct(req, res, next) {
  const {
    title, make, year, borough, description, price, condition,
  } = req.body;

  const sellerID = req.cookies.ssid;
  const imagePath = res.locals.s3location;

  await Product.create({
    title, make, year, borough, description, price, condition, imagePath, sellerID,
  })
    .then((product) => {
      res.locals.product = product;
      return next();
    })
    .catch((error) => next(error));
}

async function uploadImageToS3(req, res, next) {
  await singleImageUpload(req, res, (error) => {
    if (error) return next(error);
    res.json({ imageUrl: req.body.image });
    res.locals.s3location = req.file.location;
    return next();
  });
}

// TODO: Needs fixing
async function updateProduct(req, res, next) {
  const { productId } = req.params;
  const {
    name, make, model, year, imageLink, description, price, sellerId,
  } = req.body;

  const bodyToUpdate = {
    ...(name && { name }),
    ...(make && { make }),
    ...(model && { model }),
    ...(year && { year }),
    ...(imageLink && { imageLink }),
    ...(description && { description }),
    ...(price && { price }),
    ...(sellerId && { sellerId }),
  };

  await Product.findOneAndUpdate({ _id: ObjectId(productId) }, bodyToUpdate)
    .then((product) => {
      res.locals.productupdated = product;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

async function deleteProduct(req, res, next) {
  const { productId } = req.params;

  await Product.findOneAndDelete({ _id: ObjectId(productId) })
    .then((product) => {
      res.locals.deletedproduct = product;
      return next();
    })
    .catch((error) => {
      res.locals.error = error;
      return next();
    });
}

module.exports = {
  getProduct,
  getProductsByUserId,
  getAllProductsByUser,
  createProduct,
  uploadImageToS3,
  updateProduct,
  deleteProduct,
  getAllProducts,
};
