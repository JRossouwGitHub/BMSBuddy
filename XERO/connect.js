const express = require('express');
const app = express.Router();

const xero_node = require('xero-node');
const client_id = 'FA5E26DA8ADF487EA7F4D86FEA8FD7F0';
const client_secret = '5yJmYOKW7AkLHAj-2Tg4ihGSV14i5yhjjjnr3tj9jN2tDdyQ';
const redirectUri = 'http://localhost:3000/redirect';
const scopes = 'openid profile email accounting.transactions accounting.settings offline_access';

const xero = new xero_node.XeroClient({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUris: [redirectUri],
    scopes: scopes.split(" ")
});

app.get('/connect', async function(req, res) {
    try {
      let consentUrl = await xero.buildConsentUrl();	  
      res.redirect(consentUrl);
    } catch (err) {
      res.send("Sorry, something went wrong");
    }
});

app.get('/callback', async function(req, res) {
    // const url = "http://localhost:3000" + req.originalUrl;
    // await xero.setAccessTokenFromRedirectUri(url);

    let tokenClaims = await xero.readIdTokenClaims();
    const accessToken = await xero.readTokenSet();
    
    req.session.tokenClaims = tokenClaims;
    req.session.accessToken = accessToken;
    req.session.xeroTenantId = xero.tenantIds[0];
    let tokenSet = await xero.apiCallback(req.url);
    console.log(tokenSet);
    res.redirect('/organisation');
});

app.get('/organisation', async function(req, res) {  
    try {
      const response = await xero.accountingApi.getOrganisations(xero.tenantIds[0])
      res.send("Hello, " + response.body.organisations[0].name);
    } catch (err) {
      res.send("Sorry, something went wrong");
    }
});

module.exports = app;