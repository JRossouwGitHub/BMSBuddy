const express = require('express');
const subdomain = require('express-subdomain');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const field = require(path.join(__dirname+'/public/field/field.js'));
const office = require(path.join(__dirname+'/public/office/office.js'));

app.use(subdomain('field', field));
app.use(subdomain('office', office));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/create-new-account', require('./routes/api/account.js'));
app.use('/create-new-account/step-1', require('./XERO/connect.js'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/login-signup', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/login-signup.html'));
});

app.get('/create-new-account', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/create-new-account.html'));
});

app.get('/redirect', (req, res) => {
    res.redirect('/create-new-account/step-1/callback?code='+req.query.code+'&scope='+req.query.scope+'&session_state='+req.query.session_state);
});

app.get('*', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname+'/public/404.html'));
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));