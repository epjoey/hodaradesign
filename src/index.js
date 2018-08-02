import React from 'react';
import ReactDOM from 'react-dom';

class Display extends React.Component {
  render() {
    if(!this.props.item){
      return '';
    }
    return (
      <div>
        <h2>{this.props.item.title}</h2>
        <div>
          <img src={this.props.item.images[0]} />
        </div>
        <span>{this.props.item.text}</span>
      </div>
    )
  }
}
class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        title: 'Kualeho Carrying Sandalwood',
        text: 'Woodcut, colored pencil',
        thumb: '//i.imgur.com/chN3Huv.png?3',
        images: ['//i.imgur.com/rkopfkV.png', '//i.imgur.com/hAGLR84.png']
      },{
        title: 'Mavs',
        text: 'Linocut',
        thumb: '//i.imgur.com/EAFKqDus.jpg',
        images: ['//i.imgur.com/EAFKqDul.jpg']
      }],
      displayedItem: null
    };
  }

  displayItem(item){
    this.setState({displayedItem: item});
  }

  render() {
    const items = this.state.items.map(item => {
      return (
        <li key={item.thumb}>
          <button onClick={() => this.displayItem(item)}>
            <img src={item.thumb} width='50'/>
          </button>
        </li>
      );
    });

    return (
      <div className="store">
        <div className="items">
          <ul>{items}</ul>
        </div>
        <Display item={this.state.displayedItem} />
      </div>
    );
  }
}


// ========================================
ReactDOM.render(
  <Store />,
  document.getElementById('store-root')
);

