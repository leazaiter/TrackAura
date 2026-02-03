const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/meals', require('./routes/mealRoutes'));
app.use('/api/workouts', require('./routes/workoutRoutes'));
app.use('/api/stats', require('./routes/statsRoutes'));
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Backend is working!');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
