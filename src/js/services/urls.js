const urls = {
  PIECE_BASE: '/piece/',
  currentPath: function(){
    return location.pathname;
  },
  toPiece: function(piece){
    return urls.PIECE_BASE + piece.slug;
  }
};

export default urls;