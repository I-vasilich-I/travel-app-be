const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  user: String,
  password: String,
});

module.exports = mongoose.model('Users', UserSchema);