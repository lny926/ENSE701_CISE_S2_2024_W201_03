import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User'; // Import the User model

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ email, password });
    await user.save();
    res.json({ msg: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ msg: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: 'Invalid email or password' });

    res.json({ msg: 'Login successful', userId: user._id });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
});

export default router; // Use export default for TypeScript compatibility
