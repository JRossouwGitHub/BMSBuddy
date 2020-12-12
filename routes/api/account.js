const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

router.get('/step-1', (req, res) =>{
    res.sendFile(path.join(__dirname+'../../../public/step-1.html'));
});

router.get('/step-2', (req, res) =>{
    res.sendFile(path.join(__dirname+'../../../public/step-2.html'));
});

router.get('/step-3', (req, res) =>{
    res.sendFile(path.join(__dirname+'../../../public/step-3.html'));
});

router.get('/api/account-details', (req, res) =>{

});

module.exports = router;