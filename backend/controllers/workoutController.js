const Workout = require('../models/Workout');
exports.addWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({
      user: req.user.id,                
      exerciseName: req.body.exerciseName,
      duration: req.body.duration,
      caloriesBurned: req.body.caloriesBurned
    });
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.addAdvancedWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({
      user: req.user.id,                
      exerciseName: req.body.exerciseName,
      duration: req.body.duration,
      caloriesBurned: req.body.caloriesBurned
    });

    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getUserWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getTodayWorkouts = async (req, res) => {
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);   // midnight today
    const end = new Date();
    end.setHours(23, 59, 59, 999); // end of today

    const workouts = await Workout.find({
      user: req.user.id,
      createdAt: { $gte: start, $lte: end }, // use timestamps
    });

    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
