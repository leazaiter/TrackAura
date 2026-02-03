const mongoose = require('mongoose');

const stepsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  steps: Number,

  caloriesBurned: Number,

  date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Steps', stepsSchema);
