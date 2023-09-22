const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/src/Homepage')));

app.get('/Home', function (req, res) {
    res.sendFile(__dirname + "/src/Homepage/Home.component.html");
});

app.listen(3000, function () {
    console.log('server is running....');
});