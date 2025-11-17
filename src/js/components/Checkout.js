import React from 'react';
import cart from '../services/cart';
import Cart from './cart';


class Checkout extends React.Component {
  constructor(props) {
    super(props)
    // if('Stripe' in window){
    //   this.stripe = Stripe('pk_test_Mnj7lYWHKA6SmSFVz6j8j70H');
    // }
  }

  // registerCreditCardElements() {
  //   return;
  //   var elements = this.stripe.elements({
  //     // Stripe's examples are localized to specific languages, but if
  //     // you wish to have Elements automatically detect your user's locale,
  //     // use `locale: 'auto'` instead.
  //     locale: window.__exampleLocale,
  //   });

    // var elementStyles = {
    //   base: {
    //     color: '#fff',
    //     fontWeight: 600,
    //     fontSize: '16px',

    //     ':focus': {
    //       color: '#fff',
    //     },

    //     '::placeholder': {
    //       color: '#cfd7df',
    //     },

    //     ':focus::placeholder': {
    //       color: '#cfd7df',
    //     },
    //   },
    //   invalid: {
    //     color: '#fff',
    //     ':focus': {
    //       color: '#FA755A',
    //     },
    //     '::placeholder': {
    //       color: '#FFCCA5',
    //     },
    //   },
    // };

    // var elementClasses = {
    //   focus: 'focus',
    //   empty: 'empty',
    //   invalid: 'invalid',
    // };

    // var cardNumber = elements.create('cardNumber', {
    //   style: elementStyles,
    //   classes: elementClasses,
    // });
    // cardNumber.mount('#card-number');

    // var cardExpiry = elements.create('cardExpiry', {
    //   style: elementStyles,
    //   classes: elementClasses,
    // });
    // cardExpiry.mount('#card-expiry');

    // var cardCvc = elements.create('cardCvc', {
    //   style: elementStyles,
    //   classes: elementClasses,
    // });
    // cardCvc.mount('#card-cvc');

    // // Listen for errors from each Element, and show error messages in the UI.
    // let savedErrors = {};
    // elements.forEach((element, idx) => {
    //   element.on('change', event => {
    //     if(event.error){
    //       this.error.classList.add('visible');
    //       savedErrors[idx] = event.error.message;
    //       this.errorMessage.innerText = event.error.message;
    //     } else {
    //       savedErrors[idx] = null;

    //       // Loop over the saved errors and find the first one, if any.
    //       var nextError = Object.keys(savedErrors)
    //         .sort()
    //         .reduce(function(maybeFoundError, key) {
    //           return maybeFoundError || savedErrors[key];
    //         }, null);

    //       if(nextError){
    //         // Now that they've fixed the current error, show another one.
    //         this.errorMessage.innerText = nextError;
    //       } else {
    //         // The user fixed the last error; no more errors.
    //         this.error.classList.remove('visible');
    //       }
    //     }
    //   });
    // });

  //   const form = this.form;
  //   window.pop = function(){
  //     form.querySelector('#shipping-name').value = 'Tester McTester';
  //     form.querySelector('#shipping-line1').value = '1269 Pohuli way';
  //     form.querySelector('#shipping-city').value = 'Maktown';
  //     form.querySelector('#shipping-state').value = 'HI';
  //     form.querySelector('#shipping-postal-code').value = '99999';
  //     form.querySelector('#shipping-country').value = 'US';
  //     form.querySelector('#email').value = 'jhodara@gmail.com';
  //     // form.querySelector('#phone').value = '8082682882';
  //     form.querySelector('#card-name').value = 'Tester McTesterson';
  //     form.querySelector('#card-zip').value = '222222';
  //   };

  //   // Save elements to class so we can access them on submit.
  //   this.elements = elements;
  // }

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

  // stripeTokenHandler(token) {
  //   const form = this.form;

  //   // Submit the form
  //   const shippingName = form.querySelector('#shipping-name');
  //   const shippingLine1 = form.querySelector('#shipping-line1');
  //   const shippingCity = form.querySelector('#shipping-city');
  //   const shippingState = form.querySelector('#shipping-state');
  //   const shippingPostalCode = form.querySelector('#shipping-postal-code');
  //   const shippingCountry = form.querySelector('#shipping-country');
  //   const email = form.querySelector('#email');
  //   const phone = form.querySelector('#phone');

  //   const data = {
  //     stripeToken: token.id,
  //     shippingName: shippingName ? shippingName.value : undefined,
  //     shippingLine1: shippingLine1 ? shippingLine1.value : undefined,
  //     shippingCity: shippingCity ? shippingCity.value : undefined,
  //     shippingState: shippingState ? shippingState.value : undefined,
  //     shippingPostalCode: shippingPostalCode ? shippingPostalCode.value : undefined,
  //     shippingCountry: shippingCountry ? shippingCountry.value : undefined,
  //     email: email ? email.value : undefined,
  //     phone: phone ? phone.value : undefined,
  //     amount: cart.total(),
  //     description: 'Some badass art'
  //   };

  //   let formData = new FormData();
  //   Object.keys(data).forEach(key => {
  //     formData.append(key, data[key]);
  //   });

  //   window.fetch('/shop/charge.php', {
  //     method: 'POST',
  //     body: formData
  //   })
  //   .then(response => {
  //     this.container.classList.remove('submitting');
  //     this.enableInputs();
  //     return response.json()
  //   })
  //   .catch(error => {
  //     console.error('Error:', error)
  //     this.errorMessage.innerText = 'An error has occured';
  //     this.error.classList.add('visible');
  //   })
  //   .then(charge => {
  //     if(charge.stripeRequestError){
  //       this.errorMessage.innerText = charge.stripeRequestError;
  //       this.error.classList.add('visible');
  //     }
  //     else if(charge.status = "succeeded"){
  //       // If we received a token, show the token ID.
  //       this.container.classList.add('submitted');
  //       this.success.querySelector('.receipt-email').innerText = email.value;
  //     }
  //     else {
  //       this.errorMessage.innerText = charge.failure_message;
  //       this.error.classList.add('visible');
  //     }
  //   })
  // }

  componentDidMount() {
    this.container = document.querySelector('.checkout');
    this.form = this.container.querySelector('form');
    this.error = this.form.querySelector('.error');
    this.errorMessage = this.error.querySelector('.message');
    this.success = this.container.querySelector('.success');

    // if(this.stripe){
    //   this.registerCreditCardElements();
    // }
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
    var name = this.form.querySelector('#shipping-name').value;
    var line1 = this.form.querySelector('#shipping-line1').value;
    var city = this.form.querySelector('#shipping-city').value;
    var state = this.form.querySelector('#shipping-state').value;
    var postalCode = this.form.querySelector('#shipping-postal-code').value;
    var email = this.form.querySelector('#email').value;
    //var zip = this.form.querySelector('#card-zip');
    // var additionalData = {
    //   name: name ? name.value : undefined,
    //   address_zip: zip ? zip.value : undefined,
    // };

    // Use Stripe.js to create a token. We only need to pass in one Element
    // from the Element group in order to create a token. We can also pass
    // in the additional customer data we collected in our form.
    // var elements = this.elements || [];
    // var element = elements[0] || null;
    // this.stripe.createToken(element, additionalData).then(result => {

    //   if(result.token){
    //     this.stripeTokenHandler(result.token);
    //   }
    //   else {
    //     // Otherwise, un-disable inputs.
    //     this.container.classList.remove('submitting');
    //     this.enableInputs();
    //   }
    // });

    window.fetch('/api/create-customer', {
      method: 'POST',
      body: JSON.stringify({
        'name': name,
        'email': email,
        'line1': line1,
        'city': city,
        'state': state,
        'postal_code': postalCode
      })
    }).then(response => {
      if (response.status !== 200) {
        return this.handleError(response);
      }
      // Empty the cart.
      cart.clear();
      // Rerender everything.
      this.props.onSuccess();
      // Now add/remove classnames.
      this.container.classList.remove('submitting');
      this.container.classList.add('submitted');
      this.success.querySelector('.receipt-email').innerText = email;
      this.enableInputs();

    }).catch(error => {
      handleError(error);
    });
  };

  handleError(response) {
    console.error('Error response:', response);
    this.errorMessage.innerText = 'An error has occured';
    this.error.classList.add('visible');   
    this.enableInputs();
    this.container.classList.remove('submitting');
  };

  reset() {
    // Resetting the form (instead of setting the value to `''` for each input)
    // helps us clear webkit autofill styles.
    this.form.reset();

    // Clear each Element.
    // this.elements.forEach(function(element) {
    //   element.clear();
    // });

    // Reset error state as well.
    this.error.classList.remove('visible');

    // Resetting the form does not un-disable inputs, so we need to do it separately:
    this.enableInputs();
    this.container.classList.remove('submitted');
  }

  // // Autocomplete duplicate fields.
  // handleShippingNameChange(e) {
  //   let cardName = this.form.querySelector('#card-name');
  //   cardName.value = cardName.value || e.target.value;
  // }

  // handleShippingPostalCodeChange(e) {
  //   let cardZip = this.form.querySelector('#card-zip');
  //   cardZip.value = cardZip.value || e.target.value;
  // }

  render() {
    const cartTotal = cart.total();
    return (
      <section className={'checkout ' + (!cartTotal ? 'empty-cart' : '')}>
        <Cart />
        {/* <div className="h-space b-space wide text-right">
          <span className="text b-space">Total: ${cartTotal/100}</span>
        </div>*/}
        <div className="h-space b-space">
          <span className="text wide b-space">Enter <b>shipping</b> info and your order will be shipped within two weeks. Mahalo!</span>
        </div>

        <form>

          <div className="fieldset">
            <input id="shipping-name" className="field" type="text" placeholder="Full Name" required="" autoComplete="name"
              // onBlur={(e) => this.handleShippingNameChange(e)}
            />
            <input id="shipping-line1" className="field" type="text" placeholder="Number and Street" required="" autoComplete="street" />
            <input id="shipping-city" className="field" type="text" placeholder="City" required="" autoComplete="city" />
            <input id="shipping-state" className="field third-width" type="text" placeholder="State" required="" autoComplete="state" />
            <input id="shipping-postal-code" className="field third-width" pattern="[0-9]{5}" type="text" placeholder="Zip" required="" autoComplete=""
              // onBlur={(e) => this.handleShippingPostalCodeChange(e)}
            />
            <input id="shipping-country" className="field third-width" type="text" placeholder="US" required="" autoComplete="" />

            <input id="email" className="field half-width-desktop" type="email" placeholder="Email" required="{true}" autoComplete="email" />
            <input id="phone" className="field half-width-desktop" type="tel" placeholder="Phone" required="" autoComplete="tel" />
          </div>


          {/* <div className="fieldset">
            <input id="card-name" className="field" type="text" placeholder="Name on card" required="" autoComplete="name" />
            <div id="card-number" className="field empty"></div>
            <div id="card-expiry" className="field empty third-width"></div>
            <div id="card-cvc" className="field empty third-width"></div>
            <input id="card-zip" className="field empty third-width" placeholder="Zip" />
          </div> */}

          <button className='btn-submit' type="submit" onClick={(e) => this.handleSubmit(e) }>
            Place Order
            <img className='stripe' src="/images/stripe.png"/>
          </button>

          <div className="error" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
              <path className="base" fill="#000" d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"></path>
              <path className="glyph" fill="#FFF" d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"></path>
            </svg>
            <span className="message"></span>
          </div>
          <span className="shade"></span>
        </form>

        <div className="success">
          <div className="icon">
            <svg width="84px" height="84px" viewBox="0 0 84 84" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="border" cx="42" cy="42" r="40" strokeLinecap="round" strokeWidth="4" stroke="#000" fill="none"></circle>
              <path className="checkmark" strokeLinecap="round" strokeLinejoin="round" d="M23.375 42.5488281 36.8840688 56.0578969 64.891932 28.0500338" strokeWidth="4" stroke="#000" fill="none"></path>
            </svg>
          </div>
          <h3 className="title" data-tid="elements_examples.success.title">Successful!</h3>
          <p className="message">
            Mahalo for your support. A receipt will be sent to <span className="receipt-email"></span>.
          </p>
          <a className="reset" onClick={() => this.reset()}>
            <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path fill="#000000" d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"></path>
            </svg>
          </a>
        </div>

        <div className='h-space b-space'>
          <div className='text wide clear'>artist info:</div>
          <code className='b-space wide'>
            Joseph Hodara<br/>
            2835 W Lelehuna Pl<br/>
            Haiku, HI, 96708
          </code>
          <code className='b-space wide'>jhodara@gmail.com</code>
          <code>808-268-2882</code>
        </div>
      </section>
    );
  }
}

export default Checkout;