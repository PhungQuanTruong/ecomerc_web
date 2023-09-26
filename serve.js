const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Import menuRoutes.js
const menuRoutes = require('./app.routing');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', menuRoutes);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/src/Homepage')));
app.use(express.static(path.join(__dirname, '/src/Shoppage')));
app.use(express.static(path.join(__dirname, '/src/Aboutpage')));
app.use(express.static(path.join(__dirname, '/src/Contactpage')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/src/Homepage/Home.component.html");
});
app.get('/shop', function (req, res) {
    res.sendFile(__dirname + "/src/Shoppage/Shop.component.html");
});
app.get('/about', function (req, res) {
    res.sendFile(__dirname + "/src/Shoppage/Shop.component.html");
});
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + "/src/Shoppage/Shop.component.html");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});