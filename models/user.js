const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  time: Date,
  from: String,
  to: String,
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
