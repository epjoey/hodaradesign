import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './js/components/Checkout';
import cart from './js/components/cart';
import pieces from './js/components/pieces';
import Link from './js/components/Link';
import MainImage from './js/components/MainImage';
import Thumb from './js/components/Thumb';
import urls from './js/components/urls';

class Display extends React.Component {
  render() {
    if(!this.props.piece){
      return (
        <div className='display'></div>
      );
    }
    return (
      <div className='display'>
        <div className="display-image b-space">
          <MainImage piece={this.props.piece} />
        </div>
        <div className="text wide text-center b-space">
          {this.props.piece.title}
        </div>
        <div className='text wide text-center b-space'>{this.props.piece.text}</div>
        <div className="text-center b-space">
          {this.props.piece.isInCart() ? (
            <span>
              <span className="text r-space">Added</span>
              <button className="btn" onClick={() => this.props.piece.removeFromCart()}>Remove</button>
            </span>
          ) : this.props.piece.price &&
            <button className="btn" onClick={() => this.props.piece.addToCart()}>Trade ({this.props.piece.price})</button>
          }
        </div>
      </div>
    )
  }
}

class Thumbs extends React.Component {
  render() {
    // break every 3 or 4 thumbs
    let i = 0;
    let thumbs = [];
    let lastPiece = null;
    while(i < pieces.length){
      if(i > 0 && i % 3 === 0 && lastPiece){
        thumbs.push(<br key={i} />)
        lastPiece = null;
      }
      else {
        lastPiece = pieces[i]
        thumbs.push(
          <li key={lastPiece.slug}>
            <Link href={pieces.piecePath(lastPiece)}>
              <Thumb piece={lastPiece} />
            </Link>
          </li>
        );
        i++;
      }
    };

    thumbs.push(
      <li key='see-more'>
        <a href="/art/">
          See more
        </a>
      </li>
    );

    return (
      <ul className="thumbs">{thumbs}</ul>
    );
  }
}

class Shop extends React.Component {
  render() {
    const piece = pieces.currentPiece() || pieces[0];
    return (
      <div className="shop">
        <Display piece={piece} />
        <Thumbs />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link href="/" className="logo"></Link>
        { this.props.path !== '/checkout/' && !!this.props.cartTotal && (
          <Link href='/checkout/'
            className="btn btn-lg btn-header-right"
          >Checkout</Link>) }
        { this.props.path === '/checkout/' && (
          <Link href='/'
            className="btn btn-lg btn-header-right"
          >Keep shopping</Link>) }
      </div>
    );
  }
}

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      path: urls.currentPath(),
      cartTotal: cart.total()
    };

    let self = this;
    history.onpushstate = function(state){
      self.setState({
        path: state.path
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
  history.pushState = function() {
    if(typeof history.onpushstate == "function"){
      history.onpushstate.apply(history, arguments);
    }
    // ... whatever else you want to do
    // maybe call onhashchange e.handler
    return pushState.apply(history, arguments);
  }
})(window.history);
