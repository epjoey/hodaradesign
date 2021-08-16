const paths = {
  checkout: {
    index: '/checkout/'
  },
  gallery: {
    index: '/piece/', 
  },
  currentPath: function(){
    return location.pathname;
  },
  toPiece: function(piece){
    return paths.gallery.index + piece.slug;
  }
};

export default paths;