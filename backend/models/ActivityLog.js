const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'User' 
  },
  type: {
    type: String,
    enum: ['Walk', 'Run', 'Cycle']
  },
  duration: Number, // minutes
  caloriesBurned: Number,
  date: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

module.exports = mongoose.model('ActivityLog', activitySchema);
