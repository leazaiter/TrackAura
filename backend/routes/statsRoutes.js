const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getTodayStats } = require('../controllers/statsController');

router.get('/today', auth, getTodayStats);

module.exports = router;
