const express = require('express');
const subdomain = require('express-subdomain');
const subdomainV = require('express-vhost');
const app = express();
const path = require('path');
const port = process.env.PORT || 80;
app.use(express.static(path.join(__dirname, 'public')));
const field = require(path.join(__dirname+'/public/field/field.js'));
const office = require(path.join(__dirname+'/public/office/office.js'));

app.use(subdomain('field', field));
app.use(subdomain('office', office));

subdomainV.register('field.valorantscrims.gg', field);
subdomainV.register('office.valorantscrims.gg', office);

app.use(subdomainV.vhost(app.enabled('trust proxy')));

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

app.get('*', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname+'/public/404.html'));
});

app.listen(port, () => console.log(`BMSBuddy listening at http://localhost:${port}`));