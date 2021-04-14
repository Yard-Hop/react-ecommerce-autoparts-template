/* eslint-disable */
const { loadStripe } = require('@stripe/stripe-js');
const express = require('express');

const app = express();

// const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { MONGO_URI } = require('../db/config.json');

const PORT = 8080;

const apiRouter = require('./routes/api');

// Connect to our database
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// Connect to Stripe
loadStripe('pk_test_51IdmSzCtjOL0VwivxshnQAmGNBlPWmvvlSicCp2xxpNLUuIdNAAxlYaay2ejYhZvNRIJd6PY0XFABYntzDBKYpm100zqnZEenc').then(() => {
  console.log('Connected to Stripe');
}).catch(() => {
  console.log('Error connecting to Stripe');
});

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// define route handlers
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: err.message,
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// listens on port 8080 -> http://localhost:8080/
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
