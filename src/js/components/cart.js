import React from 'react';
import cart from '../services/cart';
import pieces from '../services/pieces';
import urls from '../services/urls';
import Link from './Link';
import Thumb from './Thumb';


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: cart.items
    }
  }

  removePiece(piece) {
    piece.removeFromCart()
    this.setState({
      items: cart.items
    });
  }

  handleCountChange(event, piece) {
    piece.setCount(event.target.value);
  }

  itemJSX(item) {
    const piece = pieces.findPiece(item.slug);
    const options = Array.from({length: 10}, (x,i) => {
      return (<option key={i} value={i+1}>{i+1}</option>);
    });
    return (
      <li key={item.slug} className="cart-item h-space b-space">
        <Link href={urls.toPiece(piece)} className="cart-item-image">
          <Thumb width="70" piece={piece} />
        </Link>
        <span className="cart-item-title text">{piece.title}</span>
        <select className='cart-item-count'
          value={item.count} 
          onChange={(e) => this.handleCountChange(e, piece)}
        >
          {options}
        </select>
        <button onClick={() => this.removePiece(piece)}
          className='btn cart-item-remove'
        >Remove</button>        
        <span className="text cart-item-price">{cart.price(item, piece)}</span>
      </li>
    );  
  }

  render() {
    const cartItems = cart.items.map(item => this.itemJSX(item))
    return (
      <ul className='b-space'>
        {cartItems}
      </ul>
    )
  }
}


export default Cart;