import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './Checkout';

class Display extends React.Component {
  render() {
    if(!this.props.item){
      return (<div className='display'></div>);
    }
    return (
      <div className='display'>
        <div className="display-image">
          <img src={this.props.item.images[0]} />
        </div>
        <div className="display-description">{this.props.item.title} • {this.props.item.text}</div>
      </div>
    )
  }
}

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        slug: 'kualeho',
        title: 'Kualeho Carrying Sandalwood',
        text: '8" x 8" Woodcut with colored pencil',
        thumb: '/fineart/thumbs/kualeho.jpg',
        images: ['//i.imgur.com/rkopfkV.png', '//i.imgur.com/hAGLR84.png']
      },{
        slug: 'mavs',
        title: 'Mavs',
        text: '6" x 8" Linocut',
        thumb: '/fineart/thumbs/mavs.jpg',
        images: ['//i.imgur.com/EAFKqDul.jpg']
      },{
        slug: 'chopu',
        title: 'Chopu',
        text: '5" x 7" Linocut',
        thumb: '/fineart/thumbs/chopu.jpg',
        images: ['/fineart/images/chopu.jpg']
      },{
        slug: 'chopus',
        title: 'Chopu',
        text: '5" x 7" Linocut',
        thumb: '/fineart/thumbs/chopu.jpg',
        images: ['/fineart/images/chopu.jpg']
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
        <li key={item.slug}>
          <a href={url}>
            <img src={item.thumb} />
          </a>
        </li>
      );
    });

    return (
      <div>
        <div className="header">
          <a href="/shop" className="logo"></a>
          <a href="?checkout" className="checkout-link">Checkout</a>
        </div>
        <div className="main">
          <Display item={this.state.item} />
          <ul className="items">{items}</ul>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const slug = window.location.search.slice(1);
    if(slug === 'checkout'){
      return (<Checkout />);
    }
    else {
      return (<Shop />);
    }
  }
}


// ========================================
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

