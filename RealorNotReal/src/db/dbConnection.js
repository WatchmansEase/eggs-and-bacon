const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const cors = require('cors'); // Import CORS middleware
const bodyParser = require('body-parser'); 

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // Enable CORS for all routes

//Substitue this with your ouwn link to your databse
const uri = "mongodb+srv://thrsv:lg977gHyOE0hMjIi@cluster0.onrusvj.mongodb.net/?retryWrites=true&w=majority";

let db; // MongoDB database reference

async function connectToMongoDB() {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('sample_airbnb'); // Set your database name here
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB(); // Connect to MongoDB when the server starts

// Your API endpoints that front end will use to make a request
app.get('/api/listings', async (req, res) => {
  try {
    // Example: Retrieve listings from MongoDB - set the collection name here
    const listings = await db.collection('listingsAndReviews').find().toArray();
    res.json(listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/add-listing', async (req, res) => {
    try {
      const { name, password } = req.body; // Extract data from the request body
  
      // Example: Insert a new listing into MongoDB
      const result = await db.collection('listingsAndReviews').insertOne({ name, password });
  
      res.status(201).json({ message: 'Listing added successfully', insertedId: result.insertedId });
    } catch (error) {
      console.error('Error adding listing:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Handle invalid endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
