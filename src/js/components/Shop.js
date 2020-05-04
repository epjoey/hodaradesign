import React from 'react';
import pieces from '../services/pieces';
import urls from '../services/urls';
import Link from './Link';
import Thumb from './Thumb';


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
            <Link href={urls.toPiece(lastPiece)}>
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


export default Shop;