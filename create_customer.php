<?php 

header('Content-type: application/json');

require_once('vendor/autoload.php');

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
$name = $_POST['name'];
$email = $_POST['email'];
$line1 = $_POST['line1'];
$city = $_POST['city'];
$state = $_POST['state'];
$postal_code = $_POST['postal_code'];
$country = $_POST['country'];

// Set your secret key: remember to change this to your live secret key in production
$stripe = new \Stripe\StripeClient(
  'sk_test_wGHvREvf3V8LMGUD5njU2OFU'
);

try {
    $customer = $stripe->customers->create([
        'name' => $name,
        'email' => $email,
        'address' => [
            'line1' => $line1,
            'city' => $city,
            'state' => $state,
            'postal_code' => $postal_code,
            'country' => $country,
        ]
    ]);

    echo json_encode($customer);
} catch (Stripe\Error\InvalidRequest $e) {
    echo json_encode(['stripeRequestError' => $e->getMessage() ]);
}

?>