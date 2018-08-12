import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './Checkout';
import cart from './cart';
import pieces from './pieces';

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
              <span className="btn disabled rm-space">Mahalo!</span>
              <button className="btn" onClick={() => this.props.piece.removeFromCart()}>Remove</button>
            </span>
          ) : this.props.piece.price &&
            <button className="btn" onClick={() => this.props.piece.addToCart()}>Buy! (${this.props.piece.price / 100})</button>
          }
        </div>
      </div>
    )
  }
}

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piece: null,
      cartTotal: cart.total()
    };

    var self = this;
    var pieceProto = {
      addToCart: function(){
        cart.addPiece(this);
        window.location.href = '/shop?checkout';
      },
      removeFromCart: function(){
        cart.removePiece(this);
        self.setState({ cartTotal: cart.total() });
      },
      isInCart: function(){
        return cart.has(this);
      }
    };
    
    pieces.forEach(piece => {
      piece.__proto__ = pieceProto;
    });

    const slug = window.location.search.slice(1);
    this.state.piece = slug ? pieces.find(piece => {
      return piece.slug === slug;
    }) : pieces[0];
  }

  render() {
    const thumbs = pieces.map(piece => {
      const url = '?' + piece.slug;
      return (
        <li key={piece.slug}>
          <a href={url}>
            <img src={piece.thumb} />
          </a>
        </li>
      );
    });

    return (
      <div className="shop">
        <div className="header l-space">
          <a href="/shop" className="logo"></a>
          { this.state.cartTotal ? (
            <a href="?checkout"
              className="btn btn-lg btn-checkout"
            >Checkout</a>
          ) : (
            <span className="btn btn-lg btn-checkout disabled">Checkout</span>
          )}
        </div>
        <Display piece={this.state.piece} />
        <ul className="thumbs">{thumbs}</ul>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const slug = window.location.search.slice(1);
    if(slug === 'checkout'){
      return (<Checkout />);
    }
    else {
      return (<Shop />);
    }
  }
}


// ========================================
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

