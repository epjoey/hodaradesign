import React from 'react';
import ReactDOM from 'react-dom';
import cart from './js/services/cart';
import pieces from './js/services/pieces';
import urls from './js/services/urls';
import Link from './js/components/Link';
import Header from './js/components/Header';
import Shop from './js/components/Shop';
import Checkout from './js/components/Checkout';


class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      path: urls.currentPath(),
      cartTotal: cart.total()
    };

    let self = this;

    window.onpopstate = window.history.onpushstate = function(event){
      console.log('state change', event.state)
      self.setState({
        path: event.state.path
      });
      window.scrollTo(0, 0);
    };

    var pieceProto = {
      addToCart: function(){
        cart.addPiece(this);
        self.setState({ cartTotal: cart.total() });
        Link.goTo('/checkout/');
      },
      removeFromCart: function(){
        cart.removePiece(this);
        self.setState({ cartTotal: cart.total() });
      },
      setCount: function(count){
        cart.setCount(this, count);
        self.setState({ cartTotal: cart.total() });
      },
      isInCart: function(){
        return cart.has(this);
      }
    };

    pieces.forEach(piece => {
      piece.__proto__ = pieceProto;
    });
  }

  render() {
    return (
      <div className={'page'}>
        <Header path={this.state.path} cartTotal={this.state.cartTotal} />
        { this.state.path === '/checkout/' && (<Checkout />) }
        { this.state.path !== '/checkout/' && (<Shop />) }
      </div>
    );
  }
}


// ========================================
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

(function(history){
  var pushState = history.pushState;
  history.pushState = function(state) {
    if(typeof history.onpushstate == "function"){
      history.onpushstate({state: state});
    }
    return pushState.apply(history, arguments);
  }
})(window.history);
