const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
// data needed for messages
});

const Message = mongoose.model('message', MessageSchema);

module.exports = Message;
