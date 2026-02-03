const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  exerciseName: String,
  duration: Number, // minutes
  caloriesBurned: Number,
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);
