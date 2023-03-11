import latte1 from "./assets/SAJ Hot Drink 001.jpg";
import latte2 from "./assets/SAJ Hot Drink 002.jpg";
import latte3 from "./assets/SAJ Hot Drink 003.jpg";
import latte4 from "./assets/SAJ Hot Drink 004.jpg";
import latte5 from "./assets/SAJ Hot Drink 005.jpg";
import latte6 from "./assets/SAJ Hot Drink 006.jpg";
import latte7 from "./assets/SAJ Hot Drink 007.jpg";
import doubleEspresso from "./assets/SAJ Double Espresso-min.jpg";
import hotAmericano from './assets/SAJ Hot Americano -min.jpg';
import cortado from "./assets/Cortado.png.jpg";
import v60Hot from "./assets/v60Hot.jpg";
import chocalatteMocha from "./assets/SAJ Hot Chocolate-min.jpg";

import icedV60 from "./assets/IcedV60.jpg";
import icedLatte from './assets/iceLatte.jpg';
import icedPistachioLatte from './assets/SAJ Iced Pistacio Latte-min.jpg';
import americano from './assets/americano.jpg';
import icedSpanishLatte from './assets/SAJ Iced Spanish Latte-min.jpg';
import icedCaramella from './assets/icedCaramella.jpg';
import icedMocha from './assets/icedMocha.jpg';

import strawberryMojito from './assets/strawberryMojito.jpg';
import blueCuracaoMojito from './assets/blueCuracaoMojito.jpg';
import passionFruitMojito from './assets/passionFruitMojito.jpg';

import pistachioFrappe from './assets/Pistachio Frappe-min.jpg';
import coffeeFrappe from './assets/frappe.jpg';
import caramelFrappe from './assets/caramelFrappe.jpg';
import chocoloateFrappe from './assets/chocolateFrappe.jpg';
import mochaFrappe from './assets/SAJ Mocha Frappe-min.jpg';
import strawberryFrappe from './assets/Frappe 005-min.jpg';

export const data = [
  {
    id: 1,
    name: "Cafe Latte",
    price: "AED 16.00",
    img: latte1,
    category: 'Hot Drinks',
    description: 'Smooth and creamy steamed milk with single origin short of espresso',
    query: 'hotDrinks'
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "AED 16.00",
    img: latte2,
    category: 'Hot Drinks',
    description: 'Combination of frothed milk blended with single origin espresso shot',
    query: 'hotDrinks'
  },
  {
    id: 3,
    name: "Flat White",
    price: "AED 17.00",
    img: latte3,
    category: 'Hot Drinks',
    description: 'Double shot of coffee  extraction with smooth and creamy textured milk',
    query: 'hotDrinks'
  },
  {
    id: 4,
    name: "Hot Pistachio Latte",
    price: "AED 20.00",
    img: latte4,
    category: 'Hot Drinks',
    description: 'Sweet latte with combination of pistachio sauce, steamed fresh milk and espresso',
    query: 'hotDrinks'
  },
  {
    id: 22,
    name: "Americano",
    price: "AED 14.00",
    img: hotAmericano,
    category: 'Hot Drinks',
    description: 'Single origin Brazilian espresso coffee lengthened with water',
    query: 'hotDrinks'
  },
  {
    id: 18,
    name: "Caramella Latte",
    price: "AED 20.00",
    img: latte7,
    category: 'Hot Drinks',
    description: 'Sweet latte with combination of  caramel based  sauce, steamed fresh milk and espresso',
    query: 'hotDrinks'
  },
  {
    id: 23,
    name: "Chocolate Latte",
    price: "AED 20.00",
    img: latte6,
    category: 'Hot Drinks',
    description: 'Sweet latte with combination of  Chocolate based  sauce, steamed fresh milk and espresso',
    query: 'hotDrinks'
  },
  {
    id: 27,
    name: "Choclolate Mocha",
    price: "AED 21.00",
    img: chocalatteMocha,
    category: 'Hot Drinks',
    description: 'Rich hot chocolate with coffee',
    query: 'hotDrinks'
  },

  {
    id: 19,
    name: "Spanish Latte",
    price: "AED 20.00",
    img: latte5,
    category: 'Hot Drinks',
    description: 'Sweet latte with combination of  special spanish sauce, steamed fresh milk and espresso',
    query: 'hotDrinks'
  },
  {
    id: 20,
    name: "Cortado",
    price: "AED 17.00",
    img: cortado,
    category: 'Hot Drinks',
    description: 'Double shot of single origin coffee extraction with creamy and textured milk. Served in 4oz cup',
    query: 'hotDrinks'
  },
  {
    id: 21,
    name: "V60",
    price: "AED 25.00",
    img: v60Hot,
    category: 'Hot Drinks',
    description: 'Manual brewing with v60 method that results in a rich, clean & tasteful cup',
    query: 'hotDrinks'

  },
  {
    id: '24',
    name: 'Double Espresso',
    price: 'AED 12.00',
    img: doubleEspresso,
    category: 'Hot Drinks',
    description: 'Double shot of single origin Brazilian espresso coffee',
    query: 'hotDrinks'
  },

  {
    id: 5,
    name: 'Iced Latte',
    price: 'AED 16.00',
    img: icedLatte,
    category: 'Iced Drinks',
    description: 'Fresh milk with shot of espress over ice',
    query: 'icedDrinks'
  },
  {
    id: 6,
    name: 'Iced Pistachio Latte',
    price: 'AED 23.00',
    img: icedPistachioLatte,
    category: 'Iced Drinks',
    description: 'Sweet latte with combination of  pistachio sauce, fresh milk and espresso over ice',
    query: 'icedDrinks'
  },
  {
    id: 7,
    name: 'Iced Mocha',
    price: 'AED 24.00',
    img: icedMocha,
    category: 'Iced Drinks',
    description: 'Rich hot chocolate with coffee over ice',
    query: 'icedDrinks'

  },
  {
    id: 8,
    name: 'Iced Americano',
    price: 'AED 14.00',
    img: americano,
    category: 'Iced Drinks',
    description: 'Single origin Brazilian espresso coffee lengthened with water and ice',
    query: 'icedDrinks'
  },
  {
    id: 9,
    name: 'Iced Spanish Latte',
    price: 'AED 23.00',
    img: icedSpanishLatte,
    category: 'Iced Drinks',
    description: 'Sweet latte with combination of spanish sauce, fresh milk and espresso over ice',
    query: 'icedDrinks'
  },
  {
    id: 10,
    name: 'Iced Caramella',
    price: 'AED 23.00',
    img: icedCaramella,
    category: 'Iced Drinks',
    description: 'Sweet latte with combination of caramel based sauce, fresh milk and espresso over ice',
    query: 'icedDrinks'
  },
  {
    id: 22,
    name: 'Iced V60',
    price: 'AED 23.00',
    img: icedV60,
    category: 'Iced Drinks',
    description: 'Manual brewing with v60 method that results in a rich, clean & tasteful cup  with ice',
    query: 'icedDrinks'
  },
  {
    id: 11,
    name: 'Strwaberry Mojito',
    price: 'AED 25.00',
    img: strawberryMojito,
    category: 'Mojitos',
    description: 'A refreshing aerated mojito with strawberry flavor',
    query: 'mojitos'
  },
  {
    id: 12,
    name: 'Blue Curacao Mojito',
    price: 'AED 25.00',
    img: blueCuracaoMojito,
    category: 'Mojitos',
    description: 'A refreshing aerated mojito with blue curacao flavor',
    query: 'mojitos'
  },
  {
    id: 13,
    name: 'Passion Fruit Mojito',
    price: 'AED 25.00',
    img: passionFruitMojito,
    category: 'Mojitos',
    description: 'A refreshing aerated mojito with Passion fruit flavor',
    query: 'mojitos'
  },
  {
    id: 14,
    name: 'Pistachio Frappe',
    price: 'AED 27.00',
    img: pistachioFrappe,
    category: 'Frappes',
    description: 'Iced blended drink with flavour of mocha',
    query: 'frappes'

  },
  {
    id: 15,
    name: 'Coffee Frappe',
    price: 'AED 26.00',
    img: coffeeFrappe,
    category: 'Frappes',
    description: 'Iced blended drink with flavour of coffee',
    query: 'frappes'

  },
  {
    id: 16,
    name: 'Caramel Frappe',
    price: 'AED 26.00',
    img: caramelFrappe,
    category: 'Frappes',
    description: 'Iced blended drink with flavour of caramel',
    query: 'frappes'
  },
  {
    id: 17,
    name: 'Chocolate Frappe',
    price: 'AED 26.00',
    img: chocoloateFrappe,
    category: 'Frappes',
    description: 'Iced blended drink with flavour of chocolate',
    query: 'frappes'
  },
  {
    id: 25,
    name: 'Mocha Frappe',
    price: 'AED 26.00',
    img: mochaFrappe,
    category: 'Frappes',
    description: 'Iced blended drink with flavour of mocha',
    query: 'frappes'
  },
  {
    id: 26,
    name: 'Strawberry Frappe',
    price: 'AED 26.00',
    img: strawberryFrappe,
    category: 'Frappes',
    description: 'Iced blended drink with flavour of strawberry',
    query: 'frappes'
  },
];
export const categories = [
  { label: 'Hot Drinks', id: 'hotDrinks' },
  { label: 'Iced Drinks', id: 'icedDrinks' },
  { label: 'Mojitos', id: 'mojitos' },
  { label: 'Frappes', id: 'frappes' },
]