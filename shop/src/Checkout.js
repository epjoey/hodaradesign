// CheckoutForm.js
import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.stripe = Stripe('pk_test_Mnj7lYWHKA6SmSFVz6j8j70H');  
    this.state = {
      amount: 2500
    }
  }

  registerElements(elements) {
    this.elements = elements;
    this.container = document.querySelector('.checkout');

    this.form = this.container.querySelector('form');
    this.error = this.form.querySelector('.error');
    this.errorMessage = this.error.querySelector('.message');
    this.success = this.container.querySelector('.success');

    // Listen for errors from each Element, and show error messages in the UI.
    let savedErrors = {};
    elements.forEach((element, idx) => {
      element.on('change', event => {
        if (event.error) {
          this.error.classList.add('visible');
          savedErrors[idx] = event.error.message;
          this.errorMessage.innerText = event.error.message;
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
            this.errorMessage.innerText = nextError;
          } else {
            // The user fixed the last error; no more errors.
            this.error.classList.remove('visible');
          }
        }
      });
    }); 
    
    const form = this.form;
    window.pop = function(){
      form.querySelector('#shipping-name').value = 'Tester McTester';
      form.querySelector('#shipping-line1').value = '1269 Pohuli way';
      form.querySelector('#shipping-city').value = 'Maktown';
      form.querySelector('#shipping-state').value = 'HI';
      form.querySelector('#shipping-postal-code').value = '99999';
      form.querySelector('#shipping-country').value = 'US';
      form.querySelector('#email').value = 'jhodara@gmail.com';
      form.querySelector('#phone').value = '8082682882';
      form.querySelector('#card-name').value = 'Tester McTesterson';
      form.querySelector('#card-zip').value = '222222';
    };      
  }
  
  enableInputs() {
    Array.prototype.forEach.call(
      this.form.querySelectorAll(
        "input[type='text'], input[type='email'], input[type='tel']"
      ),
      function(input) {
        input.removeAttribute('disabled');
      }
    );
  }

  disableInputs() {
    Array.prototype.forEach.call(
      this.form.querySelectorAll(
        "input[type='text'], input[type='email'], input[type='tel']"
      ),
      function(input) {
        input.setAttribute('disabled', 'true');
      }
    );
  }

  triggerBrowserValidation() {
    // The only way to trigger HTML5 form validation UI is to fake a user submit
    // event.
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.style.display = 'none';
    this.form.appendChild(submit);
    submit.click();
    submit.remove();
  }

  stripeTokenHandler(token) {
    const form = this.form;

    // Submit the form
    const shippingName = form.querySelector('#shipping-name');
    const shippingLine1 = form.querySelector('#shipping-line1');
    const shippingCity = form.querySelector('#shipping-city');
    const shippingState = form.querySelector('#shipping-state');
    const shippingPostalCode = form.querySelector('#shipping-postal-code');
    const shippingCountry = form.querySelector('#shipping-country');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');

    const data = {
      stripeToken: token.id,
      shippingName: shippingName ? shippingName.value : undefined,
      shippingLine1: shippingLine1 ? shippingLine1.value : undefined,
      shippingCity: shippingCity ? shippingCity.value : undefined,
      shippingState: shippingState ? shippingState.value : undefined,
      shippingPostalCode: shippingPostalCode ? shippingPostalCode.value : undefined,
      shippingCountry: shippingCountry ? shippingCountry.value : undefined,
      email: email ? email.value : undefined,
      phone: phone ? phone.value : undefined,
      amount: this.state.amount,
      description: 'Some badass art'
    };

    let formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    window.fetch('/shop/charge.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(charge => {
      console.log(charge);
      this.container.classList.remove('submitting');
      if(charge.status = "succeeded"){
        // If we received a token, show the token ID.
        this.container.classList.add('submitted');
        this.success.querySelector('.receipt-email').innerText = email.value;
      }
      else {
        this.errorMessage.innerText = charge.failure_message;
      }
    })
  }

  componentDidMount() {
    var elements = this.stripe.elements({
      // Stripe's examples are localized to specific languages, but if
      // you wish to have Elements automatically detect your user's locale,
      // use `locale: 'auto'` instead.
      locale: window.__exampleLocale,
    });
  
    var elementStyles = {
      base: {
        color: '#fff',
        fontWeight: 600,
        fontSize: '16px',
  
        ':focus': {
          color: '#fff',
        },
  
        '::placeholder': {
          color: '#cfd7df',
        },
  
        ':focus::placeholder': {
          color: '#cfd7df',
        },
      },
      invalid: {
        color: '#fff',
        ':focus': {
          color: '#FA755A',
        },
        '::placeholder': {
          color: '#FFCCA5',
        },
      },
    };
  
    var elementClasses = {
      focus: 'focus',
      empty: 'empty',
      invalid: 'invalid',
    };
  
    var cardNumber = elements.create('cardNumber', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardNumber.mount('#card-number');
  
    var cardExpiry = elements.create('cardExpiry', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardExpiry.mount('#card-expiry');
  
    var cardCvc = elements.create('cardCvc', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardCvc.mount('#card-cvc');
  
    this.registerElements([cardNumber, cardExpiry, cardCvc]);    
  }

  handleSubmit(e) {
    e.preventDefault();

    // Trigger HTML5 validation UI on the form if any of the inputs fail
    // validation.
    var plainInputsValid = true;
    Array.prototype.forEach.call(this.form.querySelectorAll('input'), input => {
      if(input.checkValidity && !input.checkValidity()) {
        plainInputsValid = false;
        return;
      }
    });

    if(!plainInputsValid){
      this.triggerBrowserValidation();
      return;
    }

    // Show a loading screen...
    this.container.classList.add('submitting');

    // Disable all inputs.
    this.disableInputs();

    // Gather additional customer data we may have collected in our form.
    var name = this.form.querySelector('#card-name');
    var zip = this.form.querySelector('#card-zip');
    var additionalData = {
      name: name ? name.value : undefined,
      address_zip: zip ? zip.value : undefined,
    };

    // Use Stripe.js to create a token. We only need to pass in one Element
    // from the Element group in order to create a token. We can also pass
    // in the additional customer data we collected in our form.
    this.stripe.createToken(this.elements[0], additionalData).then(result => {

      if(result.token){
        this.stripeTokenHandler(result.token);
      } 
      else {
        // Otherwise, un-disable inputs.
        this.container.classList.remove('submitting');
        this.enableInputs();
      }
    });
  };

  reset() {
    // Resetting the form (instead of setting the value to `''` for each input)
    // helps us clear webkit autofill styles.
    this.form.reset();

    // Clear each Element.
    this.elements.forEach(function(element) {
      element.clear();
    });

    // Reset error state as well.
    this.error.classList.remove('visible');

    // Resetting the form does not un-disable inputs, so we need to do it separately:
    this.enableInputs();
    this.container.classList.remove('submitted');
  }

  render() {
    return (
      <section className="checkout">
        <div className="header">
          <span className="logo"></span>
        </div>
        <form>
          <div className="fieldset">
            <input id="shipping-name" className="field" type="text" placeholder="Full Name" required="" autoComplete="name" />
            <input id="shipping-line1" className="field" type="text" placeholder="Number and Street" required="" autoComplete="street" />
            <input id="shipping-city" className="field" type="text" placeholder="City" required="" autoComplete="city" />
            <input id="shipping-state" className="field third-width" type="text" placeholder="State" required="" autoComplete="state" />
            <input id="shipping-postal-code" className="field third-width" pattern="[0-9]{5}" type="text" placeholder="Zip" required="" autoComplete="" />
            <input id="shipping-country" className="field third-width" type="text" placeholder="US" required="" autoComplete="" />

            <input id="email" className="field half-width-desktop" type="email" placeholder="Email" required="" autoComplete="email" />
            <input id="phone" className="field half-width-desktop" type="tel" placeholder="Phone" required="" autoComplete="tel" />
          </div>
          <div className="fieldset">
            <input id="card-name" className="field" type="text" placeholder="Name on card" required="" autoComplete="name" />
            <div id="card-number" className="field empty"></div>
            <div id="card-expiry" className="field empty third-width"></div>
            <div id="card-cvc" className="field empty third-width"></div>
            <input id="card-zip" className="field empty third-width" placeholder="Zip" />
          </div>
          <button type="submit" onClick={(e) => this.handleSubmit(e) }>
            Pay ${this.state.amount/100}
          </button>
          <div className="error" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
              <path className="base" fill="#000" d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"></path>
              <path className="glyph" fill="#FFF" d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"></path>
            </svg>
            <span className="message"></span>
          </div>
        </form>
        <div className="success">
          <div className="icon">
            <svg width="84px" height="84px" viewBox="0 0 84 84" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="border" cx="42" cy="42" r="40" strokeLinecap="round" strokeWidth="4" stroke="#000" fill="none"></circle>
              <path className="checkmark" strokeLinecap="round" strokeLinejoin="round" d="M23.375 42.5488281 36.8840688 56.0578969 64.891932 28.0500338" strokeWidth="4" stroke="#000" fill="none"></path>
            </svg>
          </div>          
          <h3 className="title" data-tid="elements_examples.success.title">Payment successful</h3>
          <p className="message">
            Mahalo for your support. A receipt will be sent to <span className="receipt-email"></span>.
          </p>
          <button className="reset" onClick={() => this.reset()}>Reset</button>
        </div>
        <div className="stripe">secure <img src="../images/stripe.png" width="62"/> checkout</div>
      </section>
    );
  }
}

export default Checkout;