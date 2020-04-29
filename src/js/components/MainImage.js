import React from 'react';
import urls from './urls';

class MainImage extends React.Component {
  render() {
    return (
      <img src={this.props.piece.images[0]} />
    );
  }  
};

export default MainImage;