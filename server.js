const express = require('express');
const stripe = require('stripe')('sk_test_wGHvREvf3V8LMGUD5njU2OFU');

const app = express();

let createCustomer = function(req, res){
  if(req.method !== 'POST'){
    res.writeHead(400, 'bad request');
    res.end();
    return;
  }
  let jsonString = '';
  let post;
  req.on('data', data => {
    jsonString += data;
  });
  req.on('end', () => {
    post = JSON.parse(jsonString);

    if(!post.email){
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(400);
      res.write(JSON.stringify({
        error: 'Invalid email'
      }));
      res.end();
      return;
    }

    console.log('communicating with stripe customer api...');
    stripe.customers.create({
      name: post.name,
      email: post.email,
      address: {
        line1: post.line1,
        city: post.city,
        state: post.state,
        postal_code: post.postal_code
      }
    }, function(err, customer) {
      console.log('stripe customer api responded...');
      if(err){
        console.log('stripe customer api raised error', err);
        res.writeHead(500, err);
        res.end();
        return;      
      }
      console.log('stripe created customer', customer);
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.write(JSON.stringify(customer));
      res.end();
    });
  });
};


app.use(express.static(__dirname + '/dist'));

app.listen(8080, () => {
  console.log("Application started and Listening on port 8080");
});

app.get("/dist/*", (req, res, next) => {
  return next();
});

app.post("/api/create-customer", (req, res) => {
  createCustomer(req, res);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});