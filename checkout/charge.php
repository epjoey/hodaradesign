<?php 
  require_once('../vendor/autoload.php');

  // Set your secret key: remember to change this to your live secret key in production
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  \Stripe\Stripe::setApiKey("sk_test_wGHvREvf3V8LMGUD5njU2OFU");

  // Token is created using Checkout or Elements!
  // Get the payment token ID submitted by the form:
  $token = $_POST['stripeToken'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $amount = $_POST['amount'];
  $name = $_POST['name'];
  $charge = \Stripe\Charge::create([
      'amount' => $amount,
      'currency' => 'usd',
      'description' => 'Example charge',
      'source' => $token,
      'receipt_email' => $email,
      'shipping' => [
          'name' => $name,
          'phone' => $phone,
          'address' => [
              'line1' => '1268 Pohuli way'
          ]
      ]
  ]);
  header('Content-type: application/json');
  echo json_encode($charge);
?>