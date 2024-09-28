const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../models/User'); 

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    // Check if user exists and password matches
    if (user && await bcrypt.compare(password, user.password)) {
        // On successful login, send a 200 status and redirect to /userpage
        res.status(200).json({ message: 'Login successful', redirect: '/userpage' });
    } else {
        // On failure, send a 401 Unauthorized status and return an error message
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
