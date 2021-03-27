const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const orderController = require('../controllers/orderController.js');

router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUser);
router.post('/users', userController.createUser);
router.patch('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

router.get('/orders', orderController.getOrders);
router.get('/orders/:orderId', orderController.getOrder);
router.post('/orders', orderController.createOrder);
router.patch('/orders/:orderId', orderController.updateOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = router;