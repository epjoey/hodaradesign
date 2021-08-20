const express = require('express');
const path = require('path');
const api = require('./api');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.post("/api/create-customer", (req, res) => {
  api.createCustomer(req, res);
});

const ROUTES = [
  '/',
  '/piece/*',
  '/checkout'
];

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
ROUTES.forEach(route => {
  app.get(route, function (request, response, next) {
    response.sendFile(path.resolve(__dirname, 'index.html'));
  });
});

app.listen(port);
console.log("Application started and Listening on port", port);