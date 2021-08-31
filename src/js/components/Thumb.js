import React from 'react';


class Thumb extends React.Component {
  render() {
    let src = this.props.piece.thumb || '/thumbnail/' + this.props.piece.image;
    return (
      <img width={this.props.width} src={src} />
    );
  }  
};

export default Thumb;