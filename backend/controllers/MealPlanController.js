const MealPlans = require('../models/MealPlans');
exports.getAllMealPlans = async (req, res) => {
  const meals = await MealPlans.find();
  res.json(meals);
};
exports.getMealPlansByType = async (req, res) => {
  const meals = await MealPlans.find({ type: req.params.type });
  res.json(meals);
};
