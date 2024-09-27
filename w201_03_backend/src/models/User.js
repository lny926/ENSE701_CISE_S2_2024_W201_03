const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no two users can have the same email
    },
    password: {
        type: String,
        required: true, // Password is required for user authentication
    },
    firstName: {
        type: String,
        required: true, // First name is required
    },
    lastName: {
        type: String,
        required: true, // Last name is required
    },
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
