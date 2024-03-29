import React from 'react';
import ReactDOM from 'react-dom';
import gallery from '../gallery';
import cart from './js/services/cart';
import paths from './js/services/paths';
import Gallery from './js/components/Gallery';
import Checkout from './js/components/Checkout';
import Link from './js/components/Link';
import Header from './js/components/Header';


class Index extends React.Component {
  constructor(props){
    super(props);


    this.state = {
      path: paths.currentPath(),
      cartTotal: cart.total()
    };

    let self = this;

    // Set state on url change.
    window.onpopstate = window.onpushstate = function(event){
      console.log('state change', event, event.state);
      // Popstate event back to initial page has null state.
      var path = event.state ? event.state.path : '/';
      self.setState({
        path: path
      });
      window.scrollTo(0, 0);
    };

    this.updateCart = () => {
      this.setState({ cartTotal: cart.total() });
    };

    // This is hacky but has to be here...i think.
    var pieceProto = {
      addToCart: function(){
        cart.addPiece(this);
        self.updateCart();
        Link.goTo('/checkout/');
      },
      removeFromCart: function(){
        cart.removePiece(this);
        self.updateCart();
      },
      setCount: function(count){
        cart.setCount(this, count);
        self.updateCart();
      },
      isInCart: function(){
        return cart.has(this);
      }
    };

    gallery.forEach(piece => {
      piece.__proto__ = pieceProto;
    });
  }

  render() {
    let path = this.state.path;

    // Start gallery on slug in url, or first piece.
    let galleryPiece;
    if(path.startsWith(paths.gallery.index)){
      let slug = path.split(paths.gallery.index)[1];
      galleryPiece = gallery.find((piece) => piece.slug === slug);
    }
    else if (path === '/') {
      galleryPiece = gallery[0];
    }

    return (
      <div className={'page'}>
        <Header path={path} cartTotal={this.state.cartTotal} />
        {
          galleryPiece ?
          <Gallery piece={galleryPiece}/> :

          path === paths.checkout.index ?
          <Checkout onSuccess={this.updateCart} /> :

          (<div className='text wide text-center v-space display'>404 Not found!</div>)
        }
      </div>
    );
  }
}


// ========================================
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

(function(window){
  var pushState = window.history.pushState;
  // Modify `history.pushState` so we call a custom `window.onpushstate` fn
  // which we define *inside* of react controller and accepts the same
  // signature as window.onpopstate. So both can set the react `state`.
  window.history.pushState = function(state) {
    window.onpushstate({state: state}); // Call our custom function.
    return pushState.apply(history, arguments);
  }
})(window);
