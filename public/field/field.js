const express = require('express');
const field = express.Router();

field.get('/', (req, res) => {
    res.send("Welcome to Field Section!");
});

field.get('/login', (req, res) => {
    res.send("Welcome to Field Login!");
});

module.exports = field;