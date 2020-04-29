import React from 'react';
import urls from './urls';

class Thumb extends React.Component {
  render() {
    return (
      <img src={this.props.piece.thumb} />
    );
  }  
};

export default Thumb;