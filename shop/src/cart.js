import pieces from './pieces';

var KEY = 'cart';
var cart = {
  items: [],
  init: function(){
    const items = window.localStorage.getItem(KEY);
    if(items){
      this.items = JSON.parse(items);
    }

    window.onunload = () => this.store();
  },
  store: function(){
    localStorage.setItem(KEY, JSON.stringify(this.items));
  },
  add: function(piece) {
    var item = cart.findItem(piece);
    if(!item){
      item = {id: piece.slug, count: 1};
      this.items.push(item);
    }
    else {
      item.count += 1;
    }
    this.store();
  },
  remove: function(piece){
    var item = this.findItem(piece);
    if(item){
      var index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
    else {
      console.log('cart: trying to remove discluded piece')
    }
    this.store();
  },
  findItem: function(piece){
    return this.items.find(item => {
      return item.id === piece.slug;
    });
  },
  findPiece: function(item){
    return pieces.find(piece => {
      return item.id === piece.slug;
    });
  },
  price: function(item, piece){
    piece = piece || cart.findPiece(item);
    return piece ? (piece.price * item.count) : 0;
  },
  has: function(piece){
    return !!this.findItem(piece);
  },
  total: function(){
    return this.items.reduce((total, item) => total + this.price(item), 0);
  }
};

cart.init();

export default cart;