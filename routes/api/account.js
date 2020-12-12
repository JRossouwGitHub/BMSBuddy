const cID = 'FA5E26DA8ADF487EA7F4D86FEA8FD7F0';
const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

router.get('/step-1', (req, res) =>{
    res.redirect('https://login.xero.com/identity/connect/authorize?response_type=code&client_id=FA5E26DA8ADF487EA7F4D86FEA8FD7F0&redirect_uri=https://bms-buddy.herokuapp.com/redirect&scope=openid profile email accounting.transactions&state=123');
    //res.sendFile(path.join(__dirname+'../../../public/step-1.html'));
});

router.get('/step-2', (req, res) =>{
    res.sendFile(path.join(__dirname+'../../../public/step-2.html'));
});

router.get('/step-3', (req, res) =>{
    res.sendFile(path.join(__dirname+'../../../public/step-3.html'));
});

module.exports = router;