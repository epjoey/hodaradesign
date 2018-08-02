import React from 'react';
import ReactDOM from 'react-dom';

class Display extends React.Component {
  render() {
    if(!this.props.item){
      return (<div className='display'></div>);
    }
    return (
      <div className='display'>
        <h4 className="display-title">{this.props.item.title}</h4>
        <div className="display-image">
          <img src={this.props.item.images[0]} />
        </div>
        <span className="display-description">{this.props.item.text}</span>
      </div>
    )
  }
}

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        slug: 'kualeho',
        title: 'Kualeho Carrying Sandalwood',
        text: 'Woodcut, colored pencil',
        thumb: '//i.imgur.com/chN3Huv.png?3',
        images: ['//i.imgur.com/rkopfkV.png', '//i.imgur.com/hAGLR84.png']
      },{
        slug: 'mavs',
        title: 'Mavs',
        text: 'Linocut',
        thumb: '//i.imgur.com/EAFKqDus.jpg',
        images: ['//i.imgur.com/EAFKqDul.jpg']
      }],
      item: null
    };

    let itemsBySlug = {};
    this.state.items.forEach(item => {
      itemsBySlug[item.slug] = item;
    })

    const slug = window.location.search.slice(1);
    if(slug){
      this.state.item = itemsBySlug[slug];
    } else {
      this.state.item = this.state.items[0];
    }
  }

  render() {
    const items = this.state.items.map(item => {
      const url = '?' + item.slug;
      return (
        <li key={item.thumb}>
          <a href={url}>
            <img src={item.thumb} width='50'/>
          </a>
        </li>
      );
    });

    return (
      <div>
        <div className="header">
          <a href="/store" className="logo"></a>
          <a href="/checkout" className="checkout-link">Checkout</a>
        </div>
        <div className="store">
          <div className="items">
            <ul>{items}</ul>
          </div>
          <Display item={this.state.item} />
        </div>
      </div>
    );
  }
}


// ========================================
ReactDOM.render(
  <Store />,
  document.getElementById('root')
);

