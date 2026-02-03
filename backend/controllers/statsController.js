const MealsEaten = require('../models/MealsEaten');
const Workout = require('../models/Workout');
const ActivityLog = require('../models/ActivityLog');
const Steps = require('../models/Steps');
const WaterLog = require('../models/WaterLog');

exports.getTodayStats = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const meals = await MealsEaten.find({ user: req.user.id, createdAt: { $gte: today }});
    const workouts = await Workout.find({ user: req.user.id, createdAt: { $gte: today }});
    const activities = await ActivityLog.find({ user: req.user.id, createdAt: { $gte: today }});
    const steps = await Steps.find({ user: req.user.id, createdAt: { $gte: today }});
    const water = await WaterLog.find({ user: req.user.id, createdAt: { $gte: today }});

    const caloriesConsumed = meals.reduce((a,m)=>a+m.calories,0);

    const caloriesBurned =
      workouts.reduce((a,w)=>a+w.caloriesBurned,0) +
      activities.reduce((a,a2)=>a+a2.caloriesBurned,0) +
      steps.reduce((a,s)=>a+s.caloriesBurned,0);

    const waterTotal = water.reduce((a,w)=>a+w.amount,0);

    res.json({
      caloriesConsumed,
      caloriesBurned,
      waterTotal
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
