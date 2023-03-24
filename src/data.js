// Beverages
// Hot Drinks
import latte1 from "./assets/SAJ Hot Drink 001.jpg";
import latte2 from "./assets/SAJ Hot Drink 002.jpg";
import latte3 from "./assets/SAJ Hot Drink 003.jpg";
import latte4 from "./assets/SAJ Hot Drink 004.jpg";
import latte5 from "./assets/SAJ Hot Drink 005.jpg";
import latte6 from "./assets/SAJ Hot Drink 006.jpg";
import latte7 from "./assets/SAJ Hot Drink 007.jpg";
import doubleEspresso from "./assets/SAJ Double Espresso-min.jpg";
import hotAmericano from "./assets/SAJ Hot Americano -min (1).jpg";
import cortado from "./assets/Cortado-min (1).jpg";
import v60Hot from "./assets/v60Hot.jpg";
import chocalatteMocha from "./assets/SAJ Hot Chocolate-min.jpg";

// Iced Drinks
import icedV60 from "./assets/IcedV60.jpg";
import icedLatte from "./assets/iceLatte.jpg";
import icedPistachioLatte from "./assets/SAJ Iced Pistacio Latte-min.jpg";
import americano from "./assets/americano.jpg";
import icedSpanishLatte from "./assets/SAJ Iced Spanish Latte-min.jpg";
import icedCaramella from "./assets/icedCaramella.jpg";
import icedMocha from "./assets/icedMocha.jpg";

// Mojitos
import strawberryMojito from "./assets/strawberryMojito.jpg";
import blueCuracaoMojito from "./assets/blueCuracaoMojito.jpg";
import passionFruitMojito from "./assets/passionFruitMojito.jpg";

// Frappes
import pistachioFrappe from "./assets/Pistachio Frappe-min.jpg";
import coffeeFrappe from "./assets/frappe.jpg";
import caramelFrappe from "./assets/caramelFrappe.jpg";
import chocoloateFrappe from "./assets/chocolateFrappe.jpg";
import mochaFrappe from "./assets/SAJ Mocha Frappe-min.jpg";
import strawberryFrappe from "./assets/Frappe 005-min.jpg";

// Special Cakes
import carrotCake from "./assets/specialcakes/CARROT CAKE 130AED.jpg";
import carrotMonoCake from "./assets/specialcakes/CARROT MONO CAKE 20 AED.jpg";
import chocolateCheeseCake from "./assets/specialcakes/CHOCLATE CHEESE CAKE 130.jpg";
import fruitTartCake from "./assets/specialcakes/FRUIT TART CAKE 150 AED.jpg";
import lemonBlueberryCake from "./assets/specialcakes/LEMON BLUEBERRY CAKE 130 AED.jpg";
import lemonBlueberryMonoCake from "./assets/specialcakes/LEMON BLUEBERRY MONO CAKE 20 AED.jpg";

import monoCakeChocolate from "./assets/specialcakes/MONO CAKE CHOCOLATE 20 AED.jpg";
import pistachioMonoCake from "./assets/specialcakes/PISTACHIO MONO CAKE 20 AED.jpg";
import pistachioRaspberryCake from "./assets/specialcakes/PISTACHIO RASPEBERRY CAKE 130 AED.jpg";
import pumpkinCake from "./assets/specialcakes/PUMPKIN CAKE 130.jpg";
import REDVELVETCHEESECAKE from "./assets/specialcakes/RED VELVET CHEESE CAKE 80 AED.jpg";
// import PrincessPisthachioCake from "./assets/specialcakes/SAJ Princess Pisthachio Cake";
// import PumkinMonoCake from "./assets/specialcakes/SAJ Pumkin Mono Cake";
import tiramisuThurtha from "./assets/specialcakes/SAJ Tiramisu Thurtha.jpg";
import TARTMINICAKE from "./assets/specialcakes/TART MINI CAKE 20 AED.jpg"
// Special Desserts
import assortedDessertGlass from "./assets/special desserts/ASSORTED DESSERT GLASS  10 AED.jpg";
import bruleeMangoBowl from "./assets/special desserts/BRULEE MANGO BOWL 105 AED.jpg";
import bruleePistachioBowl from "./assets/special desserts/BRULEE PISTACHIO BOWL 120 AED.jpg";
import bruleeSaffroBowl from "./assets/special desserts/BRULEE SAFFRO BOWL 105 AED.jpg";
import bruleeVannillaBowl from "./assets/special desserts/BRULEE VANNILA BOWL 105 AED.jpg";
import princessPistachioBowl from "./assets/special desserts/PRINCESS PISTACHIO BOWL 120 AED.jpg";
import SAFFRONBRULEEBOWL from './assets/special desserts/SAFFRON BRULEE BOWL 105 AED.jpg'
import VANNILABRULEEBOWL from './assets/special desserts/VANNILA BRULEE BOWL 105 AED.jpg'
// Cakes
import caramelThurthaBig from "./assets/cakes/CARAMEL THURTHA BIG 150 AED-min.jpg";
import caramelThurthaSmall from "./assets/cakes/CARAMEL THURTHA SMALL 85 AED-min.jpg";
import chocolateCake from "./assets/cakes/CHOCOLATE CAKE 150 AED-min.jpg";
import frenchHoneyCakeRegular from "./assets/cakes/FRENCH HONEY CAKE REGULAR 100 AED-min.jpg";
import fruitCakeLarge from "./assets/cakes/FRUIT CAKE  LARGE 150 AED-min.jpg";
import fruitCakeSmall from "./assets/cakes/FRUIT CAKE SMALL 50 AED-min.jpg";
import koreanCake from "./assets/cakes/KOREAN CAKE 45 DH-min.jpg";
import koreanCake1 from "./assets/cakes/KOREAN CAKE 45DH-min.jpg";
import koreanCake2 from "./assets/cakes/KOREN CAKE 45 AED-min.jpg";

const randomIdGenerator = () => {
  return Math.floor(Math.random() * 100000000 + 1);
};

export const data = [
  {
    id: 1,
    name: "Cafe Latte",
    price: "AED 16.00",
    img: latte1,
    subCategory: "Hot Drinks",

    description:
      "Smooth and creamy steamed milk with single origin short of espresso",
    query: "hotDrinks",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "AED 16.00",
    img: latte2,
    category: "Hot Drinks",
    description:
      "Combination of frothed milk blended with single origin espresso shot",
    query: "hotDrinks",
  },
  {
    id: 3,
    name: "Flat White",
    price: "AED 17.00",
    img: latte3,
    category: "Hot Drinks",
    description:
      "Double shot of coffee  extraction with smooth and creamy textured milk",
    query: "hotDrinks",
  },
  {
    id: 4,
    name: "Hot Pistachio Latte",
    price: "AED 20.00",
    img: latte4,
    category: "Hot Drinks",
    description:
      "Sweet latte with combination of pistachio sauce, steamed fresh milk and espresso",
    query: "hotDrinks",
  },
  {
    id: 22,
    name: "Americano",
    price: "AED 14.00",
    img: hotAmericano,
    category: "Hot Drinks",
    description:
      "Single origin Brazilian espresso coffee lengthened with water",
    query: "hotDrinks",
  },
  {
    id: 18,
    name: "Caramella Latte",
    price: "AED 20.00",
    img: latte7,
    category: "Hot Drinks",
    description:
      "Sweet latte with combination of  caramel based  sauce, steamed fresh milk and espresso",
    query: "hotDrinks",
  },
  {
    id: 23,
    name: "Chocolate Latte",
    price: "AED 20.00",
    img: latte6,
    category: "Hot Drinks",
    description:
      "Sweet latte with combination of  Chocolate based  sauce, steamed fresh milk and espresso",
    query: "hotDrinks",
  },
  {
    id: 27,
    name: "Chocolate Mocha",
    price: "AED 21.00",
    img: chocalatteMocha,
    category: "Hot Drinks",
    description: "Rich hot chocolate with coffee",
    query: "hotDrinks",
  },

  {
    id: 19,
    name: "Spanish Latte",
    price: "AED 20.00",
    img: latte5,
    category: "Hot Drinks",
    description:
      "Sweet latte with combination of  special spanish sauce, steamed fresh milk and espresso",
    query: "hotDrinks",
  },
  {
    id: 20,
    name: "Cortado",
    price: "AED 17.00",
    img: cortado,
    category: "Hot Drinks",
    description:
      "Double shot of single origin coffee extraction with creamy and textured milk. Served in 4oz cup",
    query: "hotDrinks",
  },
  {
    id: 21,
    name: "V60",
    price: "AED 25.00",
    img: v60Hot,
    category: "Hot Drinks",
    description:
      "Manual brewing with v60 method that results in a rich, clean & tasteful cup",
    query: "hotDrinks",
  },
  {
    id: "24",
    name: "Double Espresso",
    price: "AED 12.00",
    img: doubleEspresso,
    category: "Hot Drinks",
    description: "Double shot of single origin Brazilian espresso coffee",
    query: "hotDrinks",
  },

  {
    id: 5,
    name: "Iced Latte",
    price: "AED 16.00",
    img: icedLatte,
    category: "Iced Drinks",
    description: "Fresh milk with shot of espresso over ice",
    query: "icedDrinks",
  },
  {
    id: 6,
    name: "Iced Pistachio Latte",
    price: "AED 23.00",
    img: icedPistachioLatte,
    category: "Iced Drinks",
    description:
      "Sweet latte with combination of  pistachio sauce, fresh milk and espresso over ice",
    query: "icedDrinks",
  },
  {
    id: 7,
    name: "Iced Mocha",
    price: "AED 24.00",
    img: icedMocha,
    category: "Iced Drinks",
    description: "Rich hot chocolate with coffee over ice",
    query: "icedDrinks",
  },
  {
    id: 8,
    name: "Iced Americano",
    price: "AED 14.00",
    img: americano,
    category: "Iced Drinks",
    description:
      "Single origin Brazilian espresso coffee lengthened with water and ice",
    query: "icedDrinks",
  },
  {
    id: 9,
    name: "Iced Spanish Latte",
    price: "AED 23.00",
    img: icedSpanishLatte,
    category: "Iced Drinks",
    description:
      "Sweet latte with combination of spanish sauce, fresh milk and espresso over ice",
    query: "icedDrinks",
  },
  {
    id: 10,
    name: "Iced Caramella",
    price: "AED 23.00",
    img: icedCaramella,
    category: "Iced Drinks",
    description:
      "Sweet latte with combination of caramel based sauce, fresh milk and espresso over ice",
    query: "icedDrinks",
  },
  {
    id: 22,
    name: "Iced V60",
    price: "AED 23.00",
    img: icedV60,
    category: "Iced Drinks",
    description:
      "Manual brewing with v60 method that results in a rich, clean & tasteful cup  with ice",
    query: "icedDrinks",
  },
  {
    id: 11,
    name: "Strawberry Mojito",
    price: "AED 25.00",
    img: strawberryMojito,
    category: "Mojitos",
    description: "A refreshing aerated mojito with strawberry flavor",
    query: "mojitos",
  },
  {
    id: 12,
    name: "Blue Curacao Mojito",
    price: "AED 25.00",
    img: blueCuracaoMojito,
    category: "Mojitos",
    description: "A refreshing aerated mojito with blue curacao flavor",
    query: "mojitos",
  },
  {
    id: 13,
    name: "Passion Fruit Mojito",
    price: "AED 25.00",
    img: passionFruitMojito,
    category: "Mojitos",
    description: "A refreshing aerated mojito with Passion fruit flavor",
    query: "mojitos",
  },
  {
    id: 14,
    name: "Pistachio Frappe",
    price: "AED 27.00",
    img: pistachioFrappe,
    category: "Frappes",
    description: "Iced blended drink with flavour of Pista",
    query: "frappes",
  },
  {
    id: 15,
    name: "Coffee Frappe",
    price: "AED 26.00",
    img: coffeeFrappe,
    category: "Frappes",
    description: "Iced blended drink with flavour of coffee",
    query: "frappes",
  },
  {
    id: 16,
    name: "Caramel Frappe",
    price: "AED 26.00",
    img: caramelFrappe,
    category: "Frappes",
    description: "Iced blended drink with flavour of caramel",
    query: "frappes",
  },
  {
    id: 17,
    name: "Chocolate Frappe",
    price: "AED 26.00",
    img: chocoloateFrappe,
    category: "Frappes",
    description: "Iced blended drink with flavour of chocolate",
    query: "frappes",
  },
  {
    id: 25,
    name: "Mocha Frappe",
    price: "AED 26.00",
    img: mochaFrappe,
    category: "Frappes",
    description: "Iced blended drink with flavour of mocha",
    query: "frappes",
  },
  {
    id: 26,
    name: "Strawberry Frappe",
    price: "AED 26.00",
    img: strawberryFrappe,
    category: "Frappes",
    description: "Iced blended drink with flavour of strawberry",
    query: "frappes",
  },
];
export const categories = [
  { label: "Hot Drinks", id: "hotDrinks" },
  { label: "Iced Drinks", id: "icedDrinks" },
  { label: "Mojitos", id: "mojitos" },
  { label: "Frappes", id: "frappes" },
];

export const menu = {
  categories: [
    {
      id: 1,
      name: "Beverages",
      url: "beverages",
      subCategories: [
        {
          id: 1,
          name: "Hot Drinks",
          url: "hot-drinks",
          items: [
            {
              id: 1,
              name: "Cafe Latte",
              price: "AED 16.00",
              img: latte1,
              subCategory: 'Hot Drinks',
              description: 'Smooth and creamy steamed milk with single origin short of espresso',
              query: 'hotDrinks'
            },
            {
              id: 2,
              name: "Cappuccino",
              price: "AED 16.00",
              img: latte2,
              category: "Hot Drinks",
              description:
                "Combination of frothed milk blended with single origin espresso shot",
              query: "hotDrinks",
            },
            {
              id: 3,
              name: "Flat White",
              price: "AED 17.00",
              img: latte3,
              category: "Hot Drinks",
              description:
                "Double shot of coffee  extraction with smooth and creamy textured milk",
              query: "hotDrinks",
            },
            {
              id: 4,
              name: "Hot Pistachio Latte",
              price: "AED 20.00",
              img: latte4,
              category: "Hot Drinks",
              description:
                "Sweet latte with combination of pistachio sauce, steamed fresh milk and espresso",
              query: "hotDrinks",
            },
            {
              id: 5,
              name: "Americano",
              price: "AED 14.00",
              img: hotAmericano,
              category: "Hot Drinks",
              description:
                "Single origin Brazilian espresso coffee lengthened with water",
              query: "hotDrinks",
            },
            {
              id: 6,
              name: "Caramella Latte",
              price: "AED 20.00",
              img: latte7,
              category: "Hot Drinks",
              description:
                "Sweet latte with combination of  caramel based  sauce, steamed fresh milk and espresso",
              query: "hotDrinks",
            },
            {
              id: 7,
              name: "Chocolate Latte",
              price: "AED 20.00",
              img: latte6,
              category: "Hot Drinks",
              description:
                "Sweet latte with combination of  Chocolate based  sauce, steamed fresh milk and espresso",
              query: "hotDrinks",
            },
            {
              id: 8,
              name: "Chocolate Mocha",
              price: "AED 21.00",
              img: chocalatteMocha,
              category: "Hot Drinks",
              description: "Rich hot chocolate with coffee",
              query: "hotDrinks",
            },

            {
              id: 9,
              name: "Spanish Latte",
              price: "AED 20.00",
              img: latte5,
              category: "Hot Drinks",
              description:
                "Sweet latte with combination of  special spanish sauce, steamed fresh milk and espresso",
              query: "hotDrinks",
            },
            {
              id: 10,
              name: "Cortado",
              price: "AED 17.00",
              img: cortado,
              category: "Hot Drinks",
              description:
                "Double shot of single origin coffee extraction with creamy and textured milk. Served in 4oz cup",
              query: "hotDrinks",
            },
            {
              id: 11,
              name: "V60",
              price: "AED 25.00",
              img: v60Hot,
              category: "Hot Drinks",
              description:
                "Manual brewing with v60 method that results in a rich, clean & tasteful cup",
              query: "hotDrinks",
            },
            {
              id: 12,
              name: "Double Espresso",
              price: "AED 12.00",
              img: doubleEspresso,
              category: "Hot Drinks",
              description:
                "Double shot of single origin Brazilian espresso coffee",
              query: "hotDrinks",
            },
          ],
        },
        {
          id: 2,
          name: "Iced Drinks",
          url: "iced-drinks",
          items: [
            {
              id: 13,
              name: "Iced Latte",
              price: "AED 16.00",
              img: icedLatte,
              category: "Iced Drinks",
              description: "Fresh milk with shot of espresso over ice",
              query: "icedDrinks",
            },
            {
              id: 14,
              name: "Iced Pistachio Latte",
              price: "AED 23.00",
              img: icedPistachioLatte,
              category: "Iced Drinks",
              description:
                "Sweet latte with combination of  pistachio sauce, fresh milk and espresso over ice",
              query: "icedDrinks",
            },
            {
              id: 15,
              name: "Iced Mocha",
              price: "AED 24.00",
              img: icedMocha,
              category: "Iced Drinks",
              description: "Rich hot chocolate with coffee over ice",
              query: "icedDrinks",
            },
            {
              id: 16,
              name: "Iced Americano",
              price: "AED 14.00",
              img: americano,
              category: "Iced Drinks",
              description:
                "Single origin Brazilian espresso coffee lengthened with water and ice",
              query: "icedDrinks",
            },
            {
              id: 17,
              name: "Iced Spanish Latte",
              price: "AED 23.00",
              img: icedSpanishLatte,
              category: "Iced Drinks",
              description:
                "Sweet latte with combination of spanish sauce, fresh milk and espresso over ice",
              query: "icedDrinks",
            },
            {
              id: 18,
              name: "Iced Caramella",
              price: "AED 23.00",
              img: icedCaramella,
              category: "Iced Drinks",
              description:
                "Sweet latte with combination of caramel based sauce, fresh milk and espresso over ice",
              query: "icedDrinks",
            },
            {
              id: 19,
              name: "Iced V60",
              price: "AED 23.00",
              img: icedV60,
              category: "Iced Drinks",
              description:
                "Manual brewing with v60 method that results in a rich, clean & tasteful cup  with ice",
              query: "icedDrinks",
            },
          ],
        },
        {
          id: 3,
          name: "Mojitos",
          url: "mojitos",
          items: [
            {
              id: 20,
              name: "Strawberry Mojito",
              price: "AED 25.00",
              img: strawberryMojito,
              category: "Mojitos",
              description: "A refreshing aerated mojito with strawberry flavor",
              query: "mojitos",
            },
            {
              id: 21,
              name: "Blue Curacao Mojito",
              price: "AED 25.00",
              img: blueCuracaoMojito,
              category: "Mojitos",
              description:
                "A refreshing aerated mojito with blue curacao flavor",
              query: "mojitos",
            },
            {
              id: 22,
              name: "Passion Fruit Mojito",
              price: "AED 25.00",
              img: passionFruitMojito,
              category: "Mojitos",
              description:
                "A refreshing aerated mojito with Passion fruit flavor",
              query: "mojitos",
            },
          ],
        },
        {
          name: 'Frappes',
          url: 'frappes',
          items: [
            {
              id: 23,
              name: "Pistachio Frappe",
              price: "AED 27.00",
              img: pistachioFrappe,
              category: "Frappes",
              description: "Iced blended drink with flavour of Pista",
              query: "frappes",
            },
            {
              id: 24,
              name: "Coffee Frappe",
              price: "AED 26.00",
              img: coffeeFrappe,
              category: "Frappes",
              description: "Iced blended drink with flavour of coffee",
              query: "frappes",
            },
            {
              id: 25,
              name: "Caramel Frappe",
              price: "AED 26.00",
              img: caramelFrappe,
              category: "Frappes",
              description: "Iced blended drink with flavour of caramel",
              query: "frappes",
            },
            {
              id: 26,
              name: "Chocolate Frappe",
              price: "AED 26.00",
              img: chocoloateFrappe,
              category: "Frappes",
              description: "Iced blended drink with flavour of chocolate",
              query: "frappes",
            },
            {
              id: 27,
              name: "Mocha Frappe",
              price: "AED 26.00",
              img: mochaFrappe,
              category: "Frappes",
              description: "Iced blended drink with flavour of mocha",
              query: "frappes",
            },
            {
              id: 28,
              name: "Strawberry Frappe",
              price: "AED 26.00",
              img: strawberryFrappe,
              category: "Frappes",
              description: "Iced blended drink with flavour of strawberry",
              query: "frappes",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Special Cakes",
      url: "special-cakes",
      items: [
        {
          id: 1,
          name: "Carrot Cake",
          price: "AED 130.00",
          img: carrotCake,
          category: "Special Cakes",
          description: "A cake with carrot and cream cheese frosting",
          query: "specialCakes",
        },
        {
          id: 2,
          name: "Carrot Mono Cake",
          price: "AED 20.00",
          img: carrotMonoCake,
          category: "Special Cakes",
          description: "A cake with carrot and cream cheese frosting",
          query: "specialCakes",
        },
        {
          id: 3,
          name: "Chocolate Cheese Cake",
          price: "AED 130.00",
          img: chocolateCheeseCake,
          category: "Special Cakes",
          description: "A cake with chocolate and cream cheese frosting",
          query: "specialCakes",
        },
        {
          id: 4,
          name: "Fruit Tart Cake",
          price: "AED 150.00",
          img: fruitTartCake,
          category: "Special Cakes",
          description: "A cake with fruit and cream cheese frosting",
          query: "specialCakes",
        },
        {
          id: 5,
          name: "Lemon Blueberry Cake",
          price: "AED 130.00",
          img: lemonBlueberryCake,
          category: "Special Cakes",
          description: "A cake with lemon and blueberry frosting",
          query: "specialCakes",
        },
        {
          id: 6,
          name: "Lemon Blueberry Mono Cake",
          price: "AED 20.00",
          img: lemonBlueberryMonoCake,
          category: "Special Cakes",
          description: "A cake with lemon and blueberry frosting",
          query: "specialCakes",
        },
        {
          id: 7,
          name: "Mono Chocolate Cake",
          price: "AED 20.00",
          img: monoCakeChocolate,
          category: "Special Cakes",
          description: "A cake with chocolate and cream cheese frosting",
          query: "specialCakes",
        },
        {
          id: 8,
          name: "Pistachio Mono Cake",
          price: "AED 20.00",
          img: pistachioMonoCake,
          category: "Special Cakes",
          description: "A cake with pistachio and cream cheese frosting",
          query: "specialCakes",
        },
        {
          id: 9,
          name: "Pistachio Rasberry Cake",
          price: "AED 130.00",
          img: pistachioRaspberryCake,
          category: "Special Cakes",
          description: "A cake with pistachio and rasberry frosting",
          query: "specialCakes",
        },
        {
          id: 10,
          name: "pumpkin Cake",
          price: "AED 130.00",
          img: pumpkinCake,
          category: "Special Cakes",
          description: "A cake with pumpkin and cream cheese frosting",
          query: "specialCakes",
        },
        {
          id: 11,
          name: "Red Velvet Cheese Cake",
          price: "AED 80.00",
          img: REDVELVETCHEESECAKE,
          category: "Special Cakes",
          description: "A cake with red velvet and cream cheese frosting",
          query: "specialCakes",
        },
        {
          id: 12,
          name: "Tart Mini Cake",
          price: "AED 20.00",
          img: TARTMINICAKE,
          category: "Special Cakes",
          description: "A cake with fruit and cream cheese frosting",
          query: "specialCakes",
        },

        {
          id: 13,
          name: "Tiramisu Thurtha Cake",
          price: "AED 130.00",
          img: tiramisuThurtha,
          category: "Special Cakes",
          description: "A cake with tiramisu and cream cheese frosting",
          query: "specialCakes",
        },
      ],
    },
    {
      id: 4,
      name: "Special Desserts",
      url: "special-desserts",
      items: [
        {
          id: 1,
          name: "Assorted Dessert Glass",
          price: "AED 10.00",
          img: assortedDessertGlass,
          category: "Special Desserts",
          description: "A glass with assorted desserts",
          query: "specialDesserts",
        },
        {
          id: 2,
          name: "Brulee Mango Bowl",
          price: "AED 105.00",
          img: bruleeMangoBowl,
          category: "Special Desserts",
          description: "A bowl with brulee mango",
          query: "specialDesserts",
        },
        {
          id: 3,
          name: "Brulee Pistachio Bowl",
          price: "AED 120.00",
          img: bruleePistachioBowl,
          category: "Special Desserts",
          description: "A bowl with brulee pistachio",
          query: "specialDesserts",
        },
        {
          id: 4,
          name: "Brulee Saffron Bowl",
          price: "AED 105.00",
          img: bruleeSaffroBowl,
          category: "Special Desserts",
          description: "A bowl with brulee saffron",
          query: "specialDesserts",
        },
        {
          id: 5,
          name: "Brulee Vanilla Bowl",
          price: "AED 105.00",
          img: bruleeVannillaBowl,
          category: "Special Desserts",
          description: "A bowl with brulee vanilla",
          query: "specialDesserts",
        },
        {
          id: 6,
          name: "Princess Pistachio Bowl",
          price: "AED 120.00",
          img: princessPistachioBowl,
          category: "Special Desserts",
          description: "A bowl with princess pistachio",
          query: "specialDesserts",
        },
        {
          id: 7,
          name: "SAFFRON BRULEE BOWL",
          price: " AED 105.00 ",
          img: SAFFRONBRULEEBOWL,
          category: "Special Desserts",
          description: "A bowl with SAFFRON BRULEE  ",
          query: "specialDesserts",
        },
        {
          id: 8,
          name: "VANNILA BRULEE BOWL",
          price: "AED 105 ",
          img: VANNILABRULEEBOWL,
          category: "Special Desserts",
          description: "A bowl with VANNILA BRULEE BOWL",
          query: "specialDesserts",

        },
      ],
    },
    {
      id: 3,
      name: "Cakes",
      url: "cakes",
      items: [
        {
          id: 1,
          name: "Caramel Thurtha Big Cake",
          price: "AED 150.00",
          img: caramelThurthaBig,
          category: "Cakes",
          description: "A cake with caramel and cream cheese frosting",
          query: "cakes",
        },
        {
          id: 2,
          name: "Caramel Thurtha Small Cake",
          price: "AED 85.00",
          img: caramelThurthaSmall,
          category: "Cakes",
          description: "A cake with caramel and cream cheese frosting",
          query: "cakes",
        },
        {
          id: 3,
          name: "Chocolate Cake",
          price: "AED 150.00",
          img: chocolateCake,
          category: "Cakes",
          description: "A cake with chocolate and cream cheese frosting",
          query: "cakes",
        },
        {
          id: 4,
          name: "French Honey Cake",
          price: "AED 100.00",
          img: frenchHoneyCakeRegular,
          category: "Cakes",
          description: "A cake with french honey and cream cheese frosting",
          query: "cakes",
        },
        {
          id: 5,
          name: "Fruit Cake Large",
          price: "AED 150.00",
          img: fruitCakeLarge,
          category: "Cakes",
          description: "A cake with fruit and cream cheese frosting",
          query: "cakes",
        },
        {
          id: 6,
          name: "Fruit Cake Small",
          price: "AED 50.00",
          img: fruitCakeSmall,
          category: "Cakes",
          description: "A cake with fruit and cream cheese frosting",
          query: "cakes",
        },
        {
          id: 7,
          name: "Korean Cake",
          price: "AED 100.00",
          img: koreanCake,
          category: "Cakes",
          description: "A cake with korean and cream cheese frosting",
          query: "cakes",
        },
        {
          id: 7,
          name: "Korean Cake",
          price: "AED 100.00",
          img: koreanCake1,
          category: "Cakes",
          description: "A cake with korean and cream cheese frosting",
          query: "cakes",
        },
        {
          id: 7,
          name: "Korean Cake",
          price: "AED 100.00",
          img: koreanCake2,
          category: "Cakes",
          description: "A cake with korean and cream cheese frosting",
          query: "cakes",
        },
      ],
    },
    {
      id: 6,
      name: "Sweets",
      url: "sweets",
      subCategories: [
        {
          id: randomIdGenerator(),
          name: "Arabian Sweets",
          items: [
          ],
        },
        {
          id: randomIdGenerator(),
          name: "Oriental Sweets",
          items: [
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Savouries",
      items: [],
    },
  ],
};
