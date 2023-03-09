import cafeLatte from "./assets/SAJ Hot Drink 001.jpg";
import cappuccino from "./assets/SAJ Hot Drink 007.jpg";
import flatWhite from "./assets/SAJ Hot Drink 005.jpg";
import hotPistachioLatte from "./assets/SAJ Hot Drink 006.jpg";
import icedLatte from './assets/iceLatte.jpg';
import icedPistachioLatte from './assets/SAJ Iced Pistacio Latte-min.jpg';
import americano from './assets/americano.jpg';
import spanishLatte from './assets/spanishLatte.jpg';
import icedCaramella from './assets/icedCaramella.jpg';
import icedMocha from './assets/icedMocha.jpg';
import strawberryMojito from './assets/strawberryMojito.jpg';
import blueCuracaoMojito from './assets/blueCuracaoMojito.jpg';
import passionFruitMojito from './assets/passionFruitMojito.jpg';
import pistachioFrappe from './assets/Pistachio Frappe-min.jpg';
import coffeeFrappe from './assets/frappe.jpg';
import caramelFrappe from './assets/caramelFrappe.jpg';
import chocoloateFrappe from './assets/chocolateFrappe.jpg';

export const data = [
  {
    id: 1,
    name: "Cafe Latte",
    price: "AED 25.00",
    img: cafeLatte,
    category: 'Hot Drinks'
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "AED 25.00",
    img: cappuccino,
    category: 'Hot Drinks'
  },
  {
    id: 3,
    name: "Flat White",
    price: "AED 25.00",
    img: flatWhite,
    category: 'Hot Drinks'
  },
  {
    id: 4,
    name: "Hot Pistachio Latte",
    price: "AED 25.00",
    img: hotPistachioLatte,
    category: 'Hot Drinks'
  },
  {
    id: 5,
    name: 'Iced Latte',
    price: 'AED 23.00',
    img: icedLatte,
    category: 'Iced Drinks'
  },
  {
    id: 6,
    name: 'Iced Pistachio Latte',
    price: 'AED 23.00',
    img: icedPistachioLatte,
    category: 'Iced Drinks'
  },
  {
    id: 7,
    name: 'Iced Mocha',
    price: 'AED 24.00',
    img: icedMocha,
    category: 'Iced Drinks'
  },
  {
    id: 8,
    name: 'Iced Americano',
    price: 'AED 14.00',
    img: americano,
    category: 'Iced Drinks'
  },
  {
    id: 9,
    name: 'Iced Spanish Latte',
    price: 'AED 23.00',
    img: spanishLatte,
    category: 'Iced Drinks'
  },
  {
    id: 10,
    name: 'Iced Caramella',
    price: 'AED 23.00',
    img: icedCaramella,
    category: 'Iced Drinks'
  },
  {
    id: 11,
    name: 'Strwaberry Mojito',
    price: 'AED 25.00',
    img: strawberryMojito,
    category: 'Mojitos'
  },
  {
    id: 12,
    name: 'Blue Curacao Mojito',
    price: 'AED 25.00',
    img: blueCuracaoMojito,
    category: 'Mojitos'
  },
  {
    id: 13,
    name: 'Passion Fruit Mojito',
    price: 'AED 25.00',
    img: passionFruitMojito,
    category: 'Mojitos'
  },
  {
    id: 14,
    name: 'Pistachio Frappe',
    price: 'AED 27.00',
    img: pistachioFrappe,
    category: 'Frappes'
  },
  {
    id: 15,
    name: 'Coffee Frappe',
    price: 'AED 26.00',
    img: coffeeFrappe,
    category: 'Frappes'

  },
  {
    id: 16,
    name: 'Caramel Frappe',
    price: 'AED 26.00',
    img: caramelFrappe,
    category: 'Frappes'
  },
  {
    id: 17,
    name: 'Chocolate Frappe',
    price: 'AED 26.00',
    img: chocoloateFrappe,
    category: 'Frappes'
  }
];
export const categories = [
  { label: 'Hot Drinks', id: 'hotDrinks' },
  { label: 'Iced Drinks', id: 'icedDrinks' },
  { label: 'Mojitos', id: 'mojitos' },
  { label: 'Frappes', id: 'frappes' },
]