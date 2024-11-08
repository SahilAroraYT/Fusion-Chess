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
app.use('/api/form', formRoutes);
// Connect to MongoDB
connectDB();

// Middleware
const corsOptions = {
    origin: process.env.origin, // Replace with your frontend's URL
    credentials: true, // Allow cookies and credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  };
  
  app.use(cors(corsOptions));


app.use(bodyParser.json());

// Routes
app.use('/api', formRoutes);

module.exports = app;
