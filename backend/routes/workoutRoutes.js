const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const premium = require('../middleware/premium');
const { addWorkout, addAdvancedWorkout, getUserWorkouts, getTodayWorkouts } = require('../controllers/workoutController');

router.post('/', auth, addWorkout);
router.post('/advanced', auth, premium, addAdvancedWorkout);
router.get('/', auth, getUserWorkouts);
router.get('/today', auth, getTodayWorkouts);

module.exports = router;
