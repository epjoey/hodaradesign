import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './Checkout';
import cart from './cart';
import pieces from './pieces';
import Link from './Link';

class Display extends React.Component {
  render() {
    if(!this.props.piece){
      return (<div className='display'></div>);
    }
    return (
      <div className='display'>
        <div className="display-image b-space">
          <img src={this.props.piece.images[0]} />
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

class Shop extends React.Component {
  render() {
    const thumbs = pieces.map(piece => {
      return (
        <li key={piece.slug}>
          <Link to={piece.slug}>
            <img src={piece.thumb} />
          </Link>
        </li>
      );
    });

    const piece = this.props.slug ? pieces.find(piece => {
      return piece.slug === this.props.slug;
    }) : pieces[0];

    return (
      <div className="shop">
        <Display piece={piece} />
        <ul className="thumbs">{thumbs}</ul>
      </div>
    );
  }
}


class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      slug: Link.current(),
      cartTotal: cart.total()
    };

    let self = this;
    history.onpushstate = function(state){
      self.setState({slug: state.to});
      window.scrollTo(0, 0);
    };

    var pieceProto = {
      addToCart: function(){
        cart.addPiece(this);
        self.setState({ cartTotal: cart.total() });
        Link.to('checkout');
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
      <div className={"page page-" + this.state.slug}>
        <div className="header">
          <Link to="" className="logo"></Link>
          { this.state.slug !== 'checkout' && !!this.state.cartTotal && (
            <Link to='checkout'
              className="btn btn-lg btn-header-right"
            >Checkout</Link>) }
          { this.state.slug === 'checkout' && (
            <Link to=''
              className="btn btn-lg btn-header-right"
            >Keep shopping</Link>) }
        </div>
        { this.state.slug === 'checkout' && (<Checkout />) }
        { this.state.slug !== 'checkout' &&
          (
            <Shop slug={this.state.slug} />
          )
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

(function(history){
  var pushState = history.pushState;
  history.pushState = function() {
    if (typeof history.onpushstate == "function") {
      history.onpushstate.apply(history, arguments);
    }
    // ... whatever else you want to do
    // maybe call onhashchange e.handler
    return pushState.apply(history, arguments);
  }
})(window.history);