import React from 'react';


class Thumb extends React.Component {
  render() {
    let src = '/images/art/' + this.props.piece.image;
    return (
      <img width='150' src={src} />
    );
  }  
};

export default Thumb;