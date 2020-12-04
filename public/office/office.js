const express = require('express');
const office = express.Router();

office.get('/', (req, res) => {
    res.send("Welcome to Office Section!");
});

office.get('/login', (req, res) => {
    res.send("Welcome to Office Login!");
});

module.exports = office;