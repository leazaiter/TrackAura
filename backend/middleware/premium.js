module.exports = (req, res, next) => {
  if (!req.user.isPremium) {
    return res.status(403).json({ msg: 'Premium feature' });
  }
  next();
};
