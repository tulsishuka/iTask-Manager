


import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get env values
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-undef
const url = process.env.MONGO_URL;
// eslint-disable-next-line no-undef
const dbName = process.env.DB_NAME;

if (!url) {
  throw new Error("MONGO_URL is undefined. Check your .env file!");
}

const client = new MongoClient(url);

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    // eslint-disable-next-line no-undef
    process.exit(1); // Stop server if connection fails
  }
}
await connectDB();

// GET all tasks
app.get('/', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('task');
    const tasks = await collection.find({}).toArray();
    res.json(tasks);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
});

// POST a new task
app.post('/', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('task');
    const result = await collection.insertOne(req.body);
    res.send({ success: true, result });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
});

// DELETE a task
app.delete('/', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('task');
    const result = await collection.deleteOne(req.body);
    res.send({ success: true, result });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
