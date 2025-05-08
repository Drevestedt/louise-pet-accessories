import chewToyImg from '../assets/images/chew-toy.png';
import dogFoodImg from '../assets/images/dog_food.png';
import rawHideBoneImg from '../assets/images/rawhide_bone.png';

const products = [
  {
    id: 1,
    category: 'dogs',
    name: 'Chew Toy',
    price: 9.99,
    image: chewToyImg,
  },
  {
    id: 2,
    category: 'dogs',
    name: 'Food',
    price: 39.99,
    image: dogFoodImg,
  },
  {
    id: 3,
    category: 'dogs',
    name: 'Raw Hide Bone',
    price: 14.99,
    image: rawHideBoneImg,
  },
  /*{
    id: 3,
    category: 'cats',
    name: 'Cat Tree',
    price: 49.99,
    image: '/images/cat-tree.jpg',
  },
  {
    id: 4,
    category: 'birds',
    name: 'Bird Mirror',
    price: 5.99,
    image: '/images/bird-mirror.jpg',
  },
  {
    id: 5,
    category: 'fish',
    name: 'Aquarium',
    price: 299.00,
    image: '/images/aquarium.jpg',
  },
  {
    id: 6,
    category: 'rodents',
    name: 'Running Wheel',
    price: 6.99,
    image: '/images/running-wheel.jpg',
  },*/
  // Add more per category
];

export default products;
