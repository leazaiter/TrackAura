const MealsEaten = require('../models/MealsEaten');
const MealPlans = require('../models/MealPlans');

exports.addMealsEaten = async (req, res) => {
  try {
    const meal = await MealPlans.findById(req.body.mealId);
    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }
    const log = await MealsEaten.create({
      user: req.user.id,
      meal: meal._id,
      calories: meal.calories,
      protein: meal.protein,
      carbs: meal.carbs,
      fat: meal.fat
    });
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getTodayMeals = async (req, res) => {
  const today = new Date().setHours(0,0,0,0);
  const meals = await MealsEaten.find({
    user: req.user.id,
    createdAt: { $gte: today }
  }).populate('meal');
  res.json(meals);
};
