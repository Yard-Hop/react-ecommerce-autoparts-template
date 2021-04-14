const express = require('express');

const router = express.Router();

const { STRIPE_KEY } = require('../../db/config.json');

// eslint-disable-next-line import/order
const stripe = require('stripe')(STRIPE_KEY);

const userController = require('../controllers/userController.js');
const productController = require('../controllers/productController.js');
const orderController = require('../controllers/orderController.js');
const cookieController = require('../controllers/cookieController.js');
const sessionController = require('../controllers/sessionController.js');

/* USER ROUTES */

router.get('/users/:userId', userController.getUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.get('/users', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});

router.post('/verify', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  res.status(200).json({ name: res.locals.name, id: res.locals.userId });
});

router.delete('/verify', cookieController.removeCookie, sessionController.stopSession, (req, res) => {
  res.status(200).json('Signed out successfully');
});

router.post('/users', userController.createUser, (req, res) => {
  res.status(200).json({ name: res.locals.name, id: res.locals.userId });
});

router.patch('/users/:userId', userController.updateUser, (req, res) => {
  res.status(200).json(res.locals.userupdated);
});

router.delete('/users/:userId', userController.deleteUser, (req, res) => {
  res.status(200).json({ status: 200, message: 'Succesfully deleted the user' });
});

/* PRODUCT ROUTES */

router.get('/products/:userId', productController.getProductsByUserId, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.get('/products/:orderId', productController.getProduct, (req, res) => {
  res.status(200).json(res.locals.product);
});

router.get('/products', productController.getAllProducts, (req, res) => {
  res.status(200).json({ products: res.locals.products });
});

router.get('/productsByUser/:id', productController.getAllProductsByUser, (req, res) => {
  res.status(200).json(res.locals.products);
});

router.post('/products', productController.createProduct, (req, res) => {
  res.status(200).json(res.locals.product);
});

router.patch('/products/:orderId', productController.updateProduct, (req, res) => {
  res.status(200).json(res.locals.productupdated);
});

router.delete('/products/:orderId', productController.deleteProduct, (req, res) => {
  res.status(200).json({ status: 200, message: 'Succesfully deleted the order' });
});

/* ORDER ROUTES */

router.get('/orders/:orderId', orderController.getOrder, (req, res) => {
  res.status(200).json(res.locals.order);
});

router.get('/orders', orderController.getOrders, (req, res) => {
  res.status(200).json(res.locals.orders);
});

router.get('/ordersByUser/:id', orderController.getAllOrdersByUser, (req, res) => {
  res.status(200).json(res.locals.orders);
});

router.post('/orders', orderController.createOrder, (req, res) => {
  res.status(200).json(res.locals.ordercreated);
});

router.patch('/orders/:orderId', orderController.updateOrder, (req, res) => {
  res.status(200).json(res.locals.orderupdated);
});

router.delete('/orders/:orderId', orderController.deleteOrder, (req, res) => {
  res.status(200).json({ status: 200, message: 'Succesfully deleted the order' });
});

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body,
    mode: 'payment',
    success_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000',
  });

  res.json({ id: session.id });
});

module.exports = router;
