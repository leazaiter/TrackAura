const mongoose = require('mongoose');

const  mealsEatenSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  meal: { type: mongoose.Schema.Types.ObjectId, ref: 'MealPlans' },

  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,

}, { timestamps: true });

module.exports = mongoose.model('MealsEaten', mealsEatenSchema);
