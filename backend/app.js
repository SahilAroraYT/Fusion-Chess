const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');
const dotenv = require('dotenv');
const setupSwagger = require('./swagger');

dotenv.config();

const app = express();
setupSwagger(app);

// Connect to MongoDB
connectDB();

// Check environment variable
console.log("Allowed origin for CORS:", process.env.origin);

// Middleware
const corsOptions = {
    origin: process.env.origin, // Hardcode temporarily for testing
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  };
  
  app.use(cors(corsOptions));


app.use(bodyParser.json());

// Routes
app.use('/api', formRoutes);

module.exports = app;
