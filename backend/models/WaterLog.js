const mongoose = require('mongoose');

const waterSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  amount: Number, // ml

  date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('WaterLog', waterSchema);
