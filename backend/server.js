const express = require('express');
const connectDB = require('../config/db');
const app = express();
const port = process.env.PORT || 8082;

// routes
const articles = require('./routes/api/articles');

// Connect Database
connectDB();

// use routes
app.use('/api/articles', articles);

app.listen(port, () => console.log(`Server running on port ${port}`));