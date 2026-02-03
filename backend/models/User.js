const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type:Number },
  weight: { type:Number },
  height: { type:Number },
  gender: { type: String, enum: ['Female','Male'] },
  goal: { type: String, enum: ['Lose','Maintain','Gain'] },
  isPremium: {
    type: Boolean,
    default: false
  },
  bmi: {
  type: Number
}
}, { timestamps: true }); 

module.exports = mongoose.model('User', userSchema);
