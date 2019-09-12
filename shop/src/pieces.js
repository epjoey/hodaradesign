const pieces = [{
  slug: 'mavs',
  title: 'Mavs',
  text: '6" x 8" Linocut',
  thumb: '/fineart/thumbs/mavs.jpg',
  images: ['//i.imgur.com/EAFKqDul.jpg'],
  price: '6 rides to the beach',
},{
  slug: 'kualeho',
  title: 'Kualeho',
  text: '8" x 8" woodcut with colored pencil',
  thumb: '/fineart/thumbs/kualeho.jpg',
  images: ['//i.imgur.com/rkopfkV.png', '//i.imgur.com/hAGLR84.png'],
  price: '10lbs of homegrown veggies, delivered',
},{
  slug: 'chopu',
  title: 'Chopu',
  text: '5" x 7" Linocut',
  thumb: '/fineart/thumbs/chopu.jpg',
  images: ['/fineart/images/chopu.jpg'],
  price: '1 work of art, delivered',
},{
  slug: 'aloha',
  title: 'Aloha Ka Pu\'uwai',
  text: '8" x 10" Linocut',
  thumb: '/fineart/thumbs/aloha.jpg',
  images: ['//i.imgur.com/sP2dmcM.jpg'],
  price: '3 beach cleanups',
}
// ,{
//   slug: 'sunrise',
//   title: 'Sunrise',
//   text: '6" x 8" Linocut',
//   thumb: '/fineart/thumbs/sunrise.jpg',
//   images: ['//i.imgur.com/sP2dmcM.jpg'],
//   price: 8000,
// }
];

pieces.findPiece = (slug) => pieces.find((piece) => piece.slug === slug);

export default pieces;
