import React from 'react';
import gallery from '../../../gallery';
import paths from '../services/paths';
import cart from '../services/cart';
import Link from './Link';
import Thumb from './Thumb';


class Gallery extends React.Component {
  render() {
    return (
      <div className="shop">
        <Display piece={this.props.piece} />
        <Thumbs />
      </div>
    );
  }
}


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
          <img src={'/images/art/' + this.props.piece.image} />
        </div>
        <div className="text wide text-center b-space">
          {this.props.piece.title}
        </div>
        <div className='text wide text-center b-space'>{this.props.piece.text}</div>
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
    while(i < gallery.length){
      if(i > 0 && i % 3 === 0 && lastPiece){
        thumbs.push(<br key={i} />)
        lastPiece = null;
      }
      else {
        lastPiece = gallery[i]
        thumbs.push(
          <li key={lastPiece.slug}>
            <Link href={paths.toPiece(lastPiece)}>
              <Thumb piece={lastPiece} />
            </Link>
          </li>
        );
        i++;
      }
    };

    return (
      <ul className="thumbs">{thumbs}</ul>
    );
  }
}


export default Gallery;