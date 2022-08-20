const express = require('express');
const router = express.Router();

// Load Articles model
const Articles = require('../../models/Articles');

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('articles route testing!'));

// @route GET api/articles/home
// @description Home page
// @access Public
router.get('/home', (req, res) => res.send('home page!'));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
  Articles.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ nobooksfound: 'No Articles found' }));
});

// @route GET api/articles/:id
// @description Get single articles by id
// @access Public
router.get('/:id', (req, res) => {
  Articles.findById(req.params.id)
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ nobookfound: 'No Articles found' }));
});

// @route GET api/articles
// @description search for articles
// @access Public
router.post('/create', (req, res) => {
  Articles.create(req.body)
    .then(articles => res.json({ msg: 'Articles added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this articles' }));
});

module.exports = router;