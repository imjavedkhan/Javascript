'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order : function(strateIndex, mainIndex){
//     return [this.starterMenu[strateIndex], this.mainMenu[mainIndex]];
//   },
// };

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name : restaurantName, 
//   openingHours : hours, 
//   categories : tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const newRestaurant = {
//   name : restaurant.location,
//   openingHours : hours
// }
// console.log(newRestaurant);

// // spread operator
// const newMenu = [...restaurant.mainMenu, 'Paneer'];
// console.log(newMenu);


// // Iterables : arrays, string, maps, sets. NOT objects


// const str = 'STAR';
// console.log(...str);

/*
// Destructuring Array... Unpacking array //added a=burger if elment is missing
const [x,y,z,a='Burger'] = restaurant.mainMenu;
console.log(x,y,z,a);

let [b,,,d] = restaurant.categories; // let not const for switching 
console.log(b,d);

// switching variables
[b,d] = [d,b];
console.log(b,d);

const [starter,main] = restaurant.order(3,0);
console.log(starter,main);

//nested array destructuring
const nested = [1,2,[3,4]];

//const[i,,j] = nested;
const[i,,[j,k]] = nested;
console.log(i,j,k);
*/

// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a,b,others);

// const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu,
// ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

const [players1, players2] = game.players;
console.log(players1,players2);

const [gk,...fieldPlayers] = players1;
console.log(gk,fieldPlayers);

const allPlayers = [...players1,...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho' , 'Perisic'];

const {
  odds: {team1, x: draw, team2}
}=game;
console.log(team1, draw, team2);

const printGoals = function (...players){
  console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Burki');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

