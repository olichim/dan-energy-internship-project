const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.post('/register', async(req, res) => {
    // Extract the user data from the request body
    const { name, email, password, repp } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password || !repp) {
        return res.status(400).json({ message: "Please fill all required fields" });
    }

    // Check if password and confirmation match
    if (password !== repp) {
        return res.status(400).json({ message: "Password and confirmation do not match" });
    }

    try {
        // Create a new User object and save it to the database
        const user = new User({ name, email, password, repp });
        await user.save();

        // Send a response indicating successful registration
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        // Handle any errors that occur during registration
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
