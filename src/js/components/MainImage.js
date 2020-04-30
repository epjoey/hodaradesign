import React from 'react';


class MainImage extends React.Component {
  render() {
    return (
      <img src={this.props.piece.images[0]} />
    );
  }  
};

export default MainImage;