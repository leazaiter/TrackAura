const mongoose = require('mongoose');

const mealPlansSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack']
  },
  ingredients: [String],
  recipe: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number
});

module.exports = mongoose.model('MealPlans', mealPlansSchema);
