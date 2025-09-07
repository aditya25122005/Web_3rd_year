const express = require('express');
const router = express.Router();

// This route will handle the home page
router.get('/', (req, res) => {
    res.render('home');
});

// All your other routes (like /products, /login, etc.) should follow below.
// For example:
router.get('/products', async (req, res) => {
    // ... products logic
});

module.exports = router;