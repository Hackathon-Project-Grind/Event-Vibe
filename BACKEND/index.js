// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/eventvibe'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Define an Event schema
const eventSchema = new mongoose.Schema({
  eventName: String,
  tagline: String,
  date: Date,
  startTime: String,
  endTime: String,
  city: String,
  address: String,
  image: String,
  description: String,
  price: Number,
});

const Event = mongoose.model('Event', eventSchema);

// Register endpoint
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Save the user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // If email and password are correct, return success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create event endpoint
app.post('/events', async (req, res) => {
  const { eventName, tagline, date, startTime, endTime, city, address, description, price } = req.body;

  try {
    // Check if there is any event overlapping with the provided date and time range
    const overlappingEvents = await Event.find({
      date: date,
      $or: [
        { $and: [{ startTime: { $lt: startTime } }, { endTime: { $gt: startTime } }] },
        { $and: [{ startTime: { $lt: endTime } }, { endTime: { $gt: endTime } }] },
        { $and: [{ startTime: { $gte: startTime } }, { endTime: { $lte: endTime } }] }
      ]
    });

    if (overlappingEvents.length > 0) {
      return res.status(400).json({ message: 'Event overlaps with existing events' });
    }

    // Create the event
    const newEvent = new Event({ eventName, tagline, date, startTime, endTime, city, address, description, price });
    await newEvent.save();

    res.status(200).json({ message: 'Event registered successfully' });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
