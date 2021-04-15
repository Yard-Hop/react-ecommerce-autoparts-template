/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socketConnect = require('socket.io');
const io = socketConnect(server);

const PORT = 8080;

const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { MONGO_URI } = require('../db/config.json');

const apiRouter = require('./routes/api');

// Connect to our database
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('Connected to Database');
});

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// statically render index.html file when user hits / - (mandatory)
// app.use(express.static(path.resolve(__dirname, '../dist')));

// define route handlers
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: err.message,
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = { ...defaultErr, ...err };
  // eslint-disable-next-line no-console
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

io.on('connection', (socket) => {
  console.log('MADE SOCKET CONNECTION');
  console.log(`${socket.id} is connected`);
  // emit a socket on
  socket.emit('your id', socket.id);
  socket.emit('message', 'message sent from server');
  socket.on('message', (body) => {
    console.log('message recieved: ', body);
    io.emit('message', body);
  });
});

// listen is a mehod that takes in two arguments, the first one is the PORT number
// the second is a callback function
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
