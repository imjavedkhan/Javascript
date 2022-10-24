'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("Can Drive")


function logger(){
    console.log("Hello JS");
}

logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

let res = fruitProcessor(5,1);

console.log(res);


//function without name

const calcage = function age(year){
    return 2022-year;
}

const resAge = calcage(1994);
console.log(resAge);

// Arrow function

const calcAge2 = birthYear => 2022 - birthYear;

//const resAge1 = calcAge2(1994);
console.log(calcAge2(1994));


///// function within function

function cutPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applepieces = cutPieces(apples);
    const orangepieces = cutPieces(oranges);
    const juice = `Juice with ${applepieces} pieces of apples 
    and ${orangepieces} pieces of oranges`;
    return juice;
}

let res = fruitProcessor(5,1);

console.log(res);


//const avgDolphins = calcAverage(44, 23, 71);
//const avgkoalas = calcAverage(65, 54, 49);

function calcAverage(score1, score2, score3){
    return (score1+score2+score3)/3;
}

function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
      } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
      } else {
        console.log('No team wins...');
      }
}

//checkWinner(avgDolphins,avgkoalas);

checkWinner(576, 111);

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

///////////// Arrays
/*
const cars = ['Ferrari','Bentley','BMW'];

const years = new Array(2002,2006,2001);

console.log(cars[0]);
console.log(cars.length);
console.log(cars[cars.length-1]);
console.log(years.push(2019));

const nestedArray = [cars,years];

console.log(nestedArray);


const calcAge2 = birthYear => 2022 - birthYear;

console.log(calcAge2(years[0]));


//add element in Array at end
cars.push('Aston Martin');
console.log(cars);

//add element in Array at start
cars.unshift('Lexus');
console.log(cars);

//remove last element of Array
cars.pop();
console.log(cars)

//remove first element of array
cars.shift();
console.log(cars);

//position of element in Array
console.log(cars.indexOf('BMW'));

// check element is present
console.log(cars.includes('BMW'));

///

function calcTip(bill){
   return bill>=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125,555,44];
console.log("bills " + bills);

//const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
//console.log("tips " + tips);

const tips = [bills[0]+ calcTip(bills[0]),bills[1]+calcTip(bills[1]),bills[2]+calcTip(bills[2])]
console.log("tips " + tips);

//const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
//console.log("Total " + total);
*/


///////// object
/*
const javed = {
    firstName : 'Javed',
    lastName : 'Khan',
    age : 2022-1994,
    job : 'developer',
    skills : ['java','spring','javascript']
}

console.log(javed);
console.log(javed.firstName);  //dot
console.log(javed['lastName']); // expression
console.log(javed.skills[1]);
//difference btw dot and expression


const interested = prompt(`Type to know more in detials: firstName, lastName,
age,job,skills`);

if(javed[interested]){
    console.log(javed[interested]);
}else {
    console.log("type given options");
}

javed.location = 'India';
javed['github'] = 'https://github.com/imjavedkhan';
console.log(javed);
*/

//////////////// Objects methods.............
/*
const javed = {
    firstName : 'Javed',
    lastName : 'Khan',
    birthYear : 1994,
    job : 'developer',
    skills : ['java','spring','javascript'],
    hasDriversLicense : true,

    // calcAge: function(birthYear){
    //     return 2022-birthYear;
    // }

    // calcAge: function(){
    //     console.log(this);  // this store object - javed
    //     return 2022 - this.birthYear; // so here it is javed.birthYear
    //     }

    calcAge: function(){
        //console.log(this);
         this.age = 2022 - this.birthYear; // here in object it will create
        // new property age and store the value
        return this.age;
     },

     getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old 
        ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'}
        driver's license`;
     }

};

//console.log(javed.calcAge(javed.birthYear));
//console.log(javed.calcAge());
// javed.calcAge()
// console.log(javed.age);
// console.log(javed.age); /// function calcAge of object javed called once..
console.log(javed.getSummary());

const mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        return this.BMI = this.mass / this.height ** 2;
    }
};

const john = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        return this.BMI = this.mass / this.height ** 2;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI);
console.log(john.BMI);

console.log(`John's BMI (${john.BMI}) is 
${john.BMI>mark.BMI? 'higher' : 'lower'} than Mark's (${mark.BMI})`);
*/

////////////// Iteration : for loop

// for(let i=0 ; i <= 10; i++){
//     console.log(`Number : ${i}`)
// }

// const john = ['javed','khan',21];
// const type = []
// for(let i=0 ; i < john.length; i++){
//     console.log(`${john[i]}`);
//     type.push(typeof john[i]);
// }
// console.log(type);

////////////// Iteration : for loop within for loop

// for(let i=1 ; i <= 5; i++){
//     console.log(`--------Exercise : ${i}`);
//     for(let j=1 ; j <= 3; j++){
//         console.log(`Reps : ${j}`);
//     }
// }

////////////// Iteration : for loop within for loop

// let dice = Math.trunc(Math.random() * 6)+1;
// console.log(dice);


// while(dice != 6){
//     console.log(`rolled dice :  ${dice}`);
//     dice = Math.trunc(Math.random() * 6)+1;
//     if(dice ===6 ) console.log('found 6');
// }


function calcTip(bill){
    return bill>=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const totals =[];
for(let i=0; i<bills.length; i++){

    const calctips = bills[i]+ calcTip(bills[i]);
    totals.push(calctips);
    //console.log("tips " + totals);
}
console.log(totals)


let sum = 0;
for(let i=0; i<bills.length; i++){
    sum += bills[i];
}
const avg = sum/bills.length;
console.log(avg);
