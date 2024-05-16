// routes/html/index.js

const express = require('express');
const router = express.Router();
const path = require('path');

// Route handler for the homepage
router.get('/', (req, res) => {
  // Render the homepage view
  res.render('home', { pageTitle: 'Homepage' });
});

// Route handler for the about page
router.get('/about', (req, res) => {
  // Render the about page view
  res.render('about', { pageTitle: 'About Us' });
});

// Route handler for the contact page
router.get('/contact', (req, res) => {
  // Render the contact page view
  res.render('contact', { pageTitle: 'Contact Us' });
});

// Route handler for serving static files (e.g., images, CSS)
router.use(express.static(path.join(__dirname, '../../public')));

module.exports = router;
