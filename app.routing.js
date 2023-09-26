const express = require('express');
const router = express.Router();

// Định nghĩa routing cho trang chủ
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/Homepage/Home.component.html');
});

// Định nghĩa routing cho trang Shop
router.get('/shop', (req, res) => {
    res.sendFile(__dirname + '/src/Shoppage/Shop.component.html');
});

// Định nghĩa routing cho trang About Us
router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/src/Aboutpage/About.component.html');
});

// Định nghĩa routing cho trang Contact
router.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/src/Contactpage/Contact.component.html');
});

module.exports = router;
