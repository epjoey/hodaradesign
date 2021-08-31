const express = require('express');
const path = require('path');
const fs = require('fs')
const sharp = require('sharp')
const api = require('./api');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/static'));

// Somebody bought something!
app.post("/api/create-customer", (req, res) => {
  api.createCustomer(req, res);
});

// Shrink the thumbnails!
app.get("/thumbnail/*", (req, res) => {
  const THUMB_WIDTH = 150;
  let imagePath = req.path.replace('/thumbnail', 'static/images/art');
  imagePath = path.join(__dirname, imagePath);
  let readStream = fs.createReadStream(imagePath);
  readStream.on('error', err => {
    console.log(err)
    return res.sendStatus(404);
  });
  res.type(`image/png`)
  let transform = sharp().resize(THUMB_WIDTH);
  return readStream.pipe(transform).pipe(res);
});
  
// Redirect these back to index. TODO: use nginx instead?
const LEGACY_ROUTES = [
  '/shop',
  '/art'
];

LEGACY_ROUTES.forEach(route => {
  app.get(route, (req, res) => res.redirect('/'));
});

// Handle every app route with index.html, which will contain
// a script tag to bundle.js and perform client-side routing.
const APP_ROUTES = [
  '/',
  '/piece/*',
  '/checkout'
];

APP_ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });
});

app.listen(port);
console.log("Application started and Listening on port", port);