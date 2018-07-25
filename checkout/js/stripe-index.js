'use strict';

var stripe = Stripe('pk_test_Mnj7lYWHKA6SmSFVz6j8j70H');

function registerElements(elements, exampleName) {
  var formClass = '.' + exampleName;
  var example = document.querySelector(formClass);

  var form = example.querySelector('form');
  var resetButton = example.querySelector('a.reset');
  var error = form.querySelector('.error');
  var errorMessage = error.querySelector('.message');
  var success = example.querySelector('.success');
  var amount = 2500;
  form.querySelector('#payment-amount').innerText = '$' + String(amount / 100);

  function enableInputs() {
    Array.prototype.forEach.call(
      form.querySelectorAll(
        "input[type='text'], input[type='email'], input[type='tel']"
      ),
      function(input) {
        input.removeAttribute('disabled');
      }
    );
  }

  function disableInputs() {
    Array.prototype.forEach.call(
      form.querySelectorAll(
        "input[type='text'], input[type='email'], input[type='tel']"
      ),
      function(input) {
        input.setAttribute('disabled', 'true');
      }
    );
  }

  function triggerBrowserValidation() {
    // The only way to trigger HTML5 form validation UI is to fake a user submit
    // event.
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.style.display = 'none';
    form.appendChild(submit);
    submit.click();
    submit.remove();
  }

  function stripeTokenHandler(token) {
    var form = document.getElementById('payment-form');
  
    // Submit the form
    var shippingName = form.querySelector('#' + exampleName + '-shipping-name');
    var shippingLine1 = form.querySelector('#' + exampleName + '-shipping-line1');
    var shippingCity = form.querySelector('#' + exampleName + '-shipping-city');
    var shippingState = form.querySelector('#' + exampleName + '-shipping-state');
    var shippingPostalCode = form.querySelector('#' + exampleName + '-shipping-postal-code');
    var shippingCountry = form.querySelector('#' + exampleName + '-shipping-country');
    var email = form.querySelector('#' + exampleName + '-email');
    var phone = form.querySelector('#' + exampleName + '-phone');
    debugger;
    var data = {
      stripeToken: token.id,
      shippingName: shippingName ? shippingName.value : undefined,
      shippingLine1: shippingLine1 ? shippingLine1.value : undefined,
      shippingCity: shippingCity ? shippingCity.value : undefined,
      shippingState: shippingState ? shippingState.value : undefined,
      shippingPostalCode: shippingPostalCode ? shippingPostalCode.value : undefined,
      shippingCountry: shippingCountry ? shippingCountry.value : undefined,
      email: email ? email.value : undefined,
      phone: phone ? phone.value : undefined,
      amount: amount,
      description: 'Some badass art',
    };

    $.ajax({
      type: "POST",
      url: "/checkout/charge.php",
      data: data,
      success: function(charge)
      {
          example.classList.remove('submitting');
          console.log(charge); // show response from the php script.
          if(charge.status = "succeeded"){
            // If we received a token, show the token ID.
            example.classList.add('submitted');
            success.querySelector('.receipt-email').innerText = email.value;
          }
          else {
            errorMessage.innerText = charge.failure_message;
          }
      }
    });    
  }  

  // Listen for errors from each Element, and show error messages in the UI.
  var savedErrors = {};
  elements.forEach(function(element, idx) {
    element.on('change', function(event) {
      if (event.error) {
        error.classList.add('visible');
        savedErrors[idx] = event.error.message;
        errorMessage.innerText = event.error.message;
      } else {
        savedErrors[idx] = null;

        // Loop over the saved errors and find the first one, if any.
        var nextError = Object.keys(savedErrors)
          .sort()
          .reduce(function(maybeFoundError, key) {
            return maybeFoundError || savedErrors[key];
          }, null);

        if (nextError) {
          // Now that they've fixed the current error, show another one.
          errorMessage.innerText = nextError;
        } else {
          // The user fixed the last error; no more errors.
          error.classList.remove('visible');
        }
      }
    });
  });

  // Listen on the form's 'submit' handler...
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Trigger HTML5 validation UI on the form if any of the inputs fail
    // validation.
    var plainInputsValid = true;
    Array.prototype.forEach.call(form.querySelectorAll('input'), function(
      input
    ) {
      if (input.checkValidity && !input.checkValidity()) {
        plainInputsValid = false;
        return;
      }
    });
    if (!plainInputsValid) {
      triggerBrowserValidation();
      return;
    }

    // Show a loading screen...
    example.classList.add('submitting');

    // Disable all inputs.
    disableInputs();

    // Gather additional customer data we may have collected in our form.
    var name = form.querySelector('#' + exampleName + '-card-name');
    var zip = form.querySelector('#' + exampleName + '-card-zip');
    var additionalData = {
      name: name ? name.value : undefined,
      address_zip: zip ? zip.value : undefined,
    };

    // Use Stripe.js to create a token. We only need to pass in one Element
    // from the Element group in order to create a token. We can also pass
    // in the additional customer data we collected in our form.
    stripe.createToken(elements[0], additionalData).then(function(result) {

      if (result.token) {
        stripeTokenHandler(result.token);
      } else {
        // Otherwise, un-disable inputs.
        example.classList.remove('submitting');
        enableInputs();
      }
    });
  });

  resetButton.addEventListener('click', function(e) {
    e.preventDefault();
    // Resetting the form (instead of setting the value to `''` for each input)
    // helps us clear webkit autofill styles.
    form.reset();

    // Clear each Element.
    elements.forEach(function(element) {
      element.clear();
    });

    // Reset error state as well.
    error.classList.remove('visible');

    // Resetting the form does not un-disable inputs, so we need to do it separately:
    enableInputs();
    example.classList.remove('submitted');
  });


  // Autocomplete duplicate fields.
  var shippingName = form.querySelector('#' + exampleName + '-shipping-name');
  $(shippingName).change(function(){
    var cardName = form.querySelector('#' + exampleName + '-card-name');
    cardName.value = cardName.value || shippingName.value;
  });

  var shippingZip = form.querySelector('#' + exampleName + '-address-zip');
  $(shippingZip).change(function(){
    var cardZip = form.querySelector('#' + exampleName + '-card-zip');
    cardZip.value = cardZip.value || shippingZip.value;
  });

  // Autocomplete country.
  form.querySelector('#' + exampleName + '-shipping-country').value = 'US';

  window.pop = function(){
    document.querySelector('form #example3-shipping-name').value = 'Tester McTester';
    document.querySelector('form #example3-shipping-line1').value = '1269 Pohuli way';
    document.querySelector('form #example3-shipping-city').value = 'Maktown';
    document.querySelector('form #example3-shipping-state').value = 'HI';
    document.querySelector('form #example3-shipping-postal-code').value = '99999';
    document.querySelector('form #example3-email').value = 'jhodara@gmail.com';
    document.querySelector('form #example3-phone').value = '8082682882';
    document.querySelector('form #example3-card-name').value = 'Tester McTesterson';
    // document.querySelector('form #example3-card-number iframe input').value = '4242424242424242';
    // document.querySelector('form #example3-card-expiry').value = '2/22';
    // document.querySelector('form #example3-card-cvc').value = '222';
    document.querySelector('form #example3-card-zip').value = '222222';
  };  
}