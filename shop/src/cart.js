import pieces from './pieces';

var KEY = 'cart';

var cart = {
  items: [],

  init: function(){
    const items = window.localStorage.getItem(KEY);
    if(items){
      cart.items = JSON.parse(items);
    }

    window.onunload = () => cart.store();
  },

  store: function(){
    localStorage.setItem(KEY, JSON.stringify(cart.items));
  },

  addItem: function(item){
    let items = cart.items.slice()
    items.push(item);
    cart.items = items;
    cart.store();
  },

  addPiece: function(piece){
    let item = cart.findItem(piece.slug);
    if(!item){
      item = {slug: piece.slug, count: 1};
    }
    else {
      item = Object.assign({}, item);
      item.count += 1;
    }
    cart.addItem(item);
  },

  setCount: function(piece, count){
    let item = cart.findItem(piece.slug);
    let index = cart.items.indexOf(item);
    item = Object.assign({}, item);
    item.count = count;
    cart.items.splice(index, 1, item);
    return item;
  },

  removeItem: function(item){
    let items = cart.items.slice()
    var index = items.indexOf(item);
    items.splice(index, 1);
    cart.items = items;
    cart.store();
  },

  removePiece: function(piece){
    var item = cart.findItem(piece.slug);
    if(item){
      cart.removeItem(item);
    }
    else {
      console.log('cart: trying to remove discluded piece');
    }
  },

  findItem: function(slug){
    return cart.items.find(item => item.slug === slug);
  },

  price: function(item, piece){
    return (item && piece) ? (item.count * piece.price) : 0;
  },

  has: function(piece){
    return !!cart.findItem(piece.slug);
  },

  total: function(){
    return cart.items.reduce((total, item) => total + cart.price(item, pieces.findPiece(item.slug)), 0);
  }
};

cart.init();

export default cart;