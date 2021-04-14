const { ObjectId } = require('bson');
const Order = require('../models/orderModel');

async function getOrders(req, res, next) {
  await Order.find({})
    .then((orders) => {
      res.locals.orders = orders;
      return next();
    })
    .catch((error) => { next(error); });
}

async function getAllOrdersByUser(req, res, next) {
  await Order.find({
    buyerId: req.params.id,
  })
    .then((orders) => {
      res.locals.orders = orders;
      return next();
    })
    .catch((error) => { next(error); });
}

async function getOrder(req, res, next) {
  const { orderId } = req.params;
  await Order.find({ _id: ObjectId(orderId) })
    .then((order) => {
      res.locals.order = order;
      return next();
    })
    .catch((error) => { next(error); });
}

async function createOrder(req, res, next) {
  const {
    date, productId, sellerId, buyerId,
  } = req.body;

  await Order.create({
    date, productId, sellerId, buyerId,
  })
    .then((order) => {
      res.locals.ordercreated = order;
      return next();
    })
    .catch((error) => { next(error); });
}

// TODO: Needs fixing
async function updateOrder(req, res, next) {
  const {
    date, productId, sellerId, buyerId,
  } = req.body;
  const { orderId } = req.params;
  const bodyToUpdate = {
    ...(date && { date }),
    ...(productId && { productId }),
    ...(sellerId && { sellerId }),
    ...(buyerId && { buyerId }),
  };

  await Order.findOneAndUpdate({ _id: ObjectId(orderId) }, bodyToUpdate, { new: true })
    .then((order) => {
      res.locals.order = order;
      return next();
    })
    .catch((error) => { next(error); });
}

async function deleteOrder(req, res, next) {
  const { orderId } = req.params;

  await Order.findOneAndDelete({ _id: ObjectId(orderId) })
    .then((order) => {
      res.locals.deletedorder = order;
      return next();
    })
    .catch((error) => { next(error); });
}

module.exports = {
  getOrder,
  getAllOrdersByUser,
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
