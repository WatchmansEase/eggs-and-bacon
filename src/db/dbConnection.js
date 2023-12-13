const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const cors = require("cors"); // Import CORS middleware
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

// MogodDB Key
const uri =
  "mongodb+srv://realornoreal:DeepFake@cluster0.e953c8u.mongodb.net/?retryWrites=true&w=majority";
// MongoDB database reference
let db;

async function connectToMongoDB() {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db("real_or_no_real"); // Set your database name here
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB(); // Connect to MongoDB when the server starts

//API Endpoints
app.post("/api/auth", async (req, res) => {
  try {
    const { name, password } = req.body; // Extract data from the request body
    const result = await db.collection("user").insertOne({ name, password }); // Insert a user record into MongoDB
    res.status(201).json({
      message: "User added successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Error adding listing:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Handle invalid endpoints
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
