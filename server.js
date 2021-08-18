const express = require('express');
const api = require('./api');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(8080, () => {
  console.log("Application started and Listening on port 8080");
});

app.get("/dist/*", (req, res, next) => {
  return next();
});

app.post("/api/create-customer", (req, res) => {
  api.createCustomer(req, res);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});