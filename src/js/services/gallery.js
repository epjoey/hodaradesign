import paths from './paths';

const imagePath = '/src/images/art/';
const thumbPath = imagePath + 'thumbs/';

const gallery = [{
  slug: 'mavs',
  title: 'Mavs',
  text: '6" x 8" Linocut',
  thumb: thumbPath + 'mavs.jpg',
  images: [imagePath + 'mavs.jpg'], // is this better? //i.imgur.com/EAFKqDul.jpg
  price: '6 rides to the beach',
},{
  slug: 'kualeho',
  title: 'Kualeho',
  text: '8" x 8" woodcut with colored pencil',
  thumb: thumbPath + 'kualeho.jpg',
  images: ['//i.imgur.com/rkopfkV.png', '//i.imgur.com/hAGLR84.png'],
  price: '4lbs of homegrown food',
},{
  slug: 'chopu',
  title: 'Chopu',
  text: '5" x 7" Linocut',
  thumb: thumbPath + 'chopu.jpg',
  images: [imagePath + 'chopu.jpg'],
  price: '1 work of art',
},{
  slug: 'aloha',
  title: 'Aloha Ka Pu\'uwai',
  text: '8" x 10" Linocut',
  thumb: thumbPath + 'aloha.jpg',
  images: ['//i.imgur.com/sP2dmcM.jpg'],
  price: '5 beach cleanups',
},{
  slug: 'noriega',
  title: 'Noriega Tree',
  text: '8" x 10" Linocut on rice paper',
  thumb: thumbPath + 'noriega.jpg',
  images: [imagePath + 'noriega.jpg'],
  price: '5 beach cleanups',
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

gallery.findPiece = (slug) => gallery.find((piece) => piece.slug === slug);

export default gallery;
