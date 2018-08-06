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
  $description = $_POST['description'];
  $shipping_name = $_POST['shippingName'];
  $shipping_line1 = $_POST['shippingLine1'];
  $shipping_city = $_POST['shippingCity'];
  $shipping_state = $_POST['shippingState'];
  $shipping_postal_code = $_POST['shippingPostalCode'];
  $shipping_country = $_POST['shippingCountry'];

  $charge = \Stripe\Charge::create([
      'amount' => $amount,
      'currency' => 'usd',
      'description' => $description,
      'source' => $token,
      'receipt_email' => $email,
      'shipping' => [
          'name' => $shipping_name,
          'phone' => $phone,
          'address' => [
              'line1' => $shipping_line1,
              'city' => $shipping_city,
              'state' => $shipping_state,
              'postal_code' => $shipping_postal_code,
              'country' => $shipping_country,
          ]
      ]
  ]);
  header('Content-type: application/json');
  echo json_encode($charge);
?>