const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./db/userModel");

// Connect to MongoDB Atlas
async function dbConnect() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
    // Handle connection error
  }
}

// Register endpoint
async function registerUser(request, response) {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const user = new User({
      email: request.body.email,
      password: hashedPassword,
    });
    const result = await user.save();
    response.status(201).send({
      message: "User Created Successfully",
      result,
    });
  } catch (error) {
    response.status(500).send({
      message: "Error creating user",
      error,
    });
  }
}

module.exports = { dbConnect, registerUser };
