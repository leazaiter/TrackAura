const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllMealPlans, getMealPlansByType } = require('../controllers/MealPlanController');
const { addMealsEaten, getTodayMeals } = require('../controllers/MealLogController');

router.get('/plans', getAllMealPlans);
router.get('/plans/:type', getMealPlansByType);
router.post('/log', auth, addMealsEaten);
router.get('/today', auth, getTodayMeals);

module.exports = router;
