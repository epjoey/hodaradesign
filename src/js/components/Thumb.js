import React from 'react';


class Thumb extends React.Component {
  render() {
    return (
      <img width={this.props.width} src={this.props.piece.thumb} />
    );
  }  
};

export default Thumb;