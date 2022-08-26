const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('../config/db');
const app = express();
const port = process.env.PORT || 8082;

// routes
const articles = require('./routes/api/articles');

// Connect Database
connectDB();

var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/articles', articles);

app.use(express.static(path.resolve(__dirname, "./frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
