const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const dbConnect = require('./db/dbConnect'); // Importing database connection function
const User = require('./db/userModel'); // Importing the User model from the database

const app = express(); // Initializing the Express app
app.use(bodyParser.json()); // Using bodyParser middleware for parsing JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parsing URL-encoded data

// POST endpoint for user registration
app.post("/register", async (request, response) => {
    try {
        // Hashing the password asynchronously
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        // Creating a new User instance with hashed password and email from request
        const user = new User({
            email: request.body.email,
            password: hashedPassword,
        });

        // Saving the new user to the database
        const result = await user.save();

        // Sending success response if user creation is successful
        response.status(201).send({
            message: "User Created Successfully",
            result,
        });
    } catch (error) {
        // Handling errors if any occur during registration
        response.status(500).send({
            message: "Error creating user",
            error,
        });
    }
});

dbConnect(); // Connecting to the database

// Starting the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
