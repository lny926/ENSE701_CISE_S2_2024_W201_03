const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Ensure you have the User model

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, firstName, lastName });
    await newUser.save();
    res.status(201).json({ message: 'User registered' });
});

module.exports = router;
