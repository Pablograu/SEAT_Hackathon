const mongoose = require('mongoose');

const { Schema } = mongoose;

const trainSchema = new Schema({
  trainId: { type: String, unique: true },
  passangers: String,
  time: Date,
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
