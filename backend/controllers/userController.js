const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

exports.updateProfile = async (req, res) => {
  const { age, weight, height, gender, goal } = req.body;

  try {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        age,
        weight,
        height,
        gender,
        goal,
        bmi
      },
      { new: true }
    ).select('-password');

    res.json(updatedUser);

  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};
