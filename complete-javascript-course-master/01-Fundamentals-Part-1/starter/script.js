/*let js = 'amazing';
if(js === 'amazing') alert ("hello");

let a = 40+20;
console.log(a);
console.log(js);
*/

/*let value = true;

//console.log(typeof 'javed');
//console.log(typeof 22);
console.log(typeof value);

value = 'hello!!';

console.log(typeof value);
console.log(value);

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year =1994;
console.log(typeof year);

console.log(typeof null); //object but its not
*/

/*let age = 23;
age = 34;


const year = 1994;
//year = 1995 // const can not be change

//const job; // error: const must be intitlze

//prior to ES6... so never use

var job = 'program';
job = 'teached';

console.log(job);
*/

// Basic Operators

/*const now =2022;
const tom = now-13;
const jerry = now-10;

console.log(tom,jerry);

const multi = 2 * 3;
console.log(multi);

const power = 2 ** 3
console.log(power);


let x = 10 + 5; // 15
x += 10; // x = x + 10
console.log(x);

console.log(tom>jerry);

const num = 10;
const a = num - 7;
const b = num - 8;

console.log(a,b);
console.log(num-7 > num-8);
*/

/////////////////////////Coding challenge 1
/*
const markWeight = 78
const markHeight = 1.69
const johnWeight = 92
const johnHeight = 1.95

/*
const markWeight = 95
const markHeight = 1.88
const johnWeight = 85
const johnHeight = 1.76

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI,johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

/////////////////////////Coding challenge 2

if(markHigherBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
*/

///////// Type Conversiona
/*
const year = '1994';

console.log(year, typeof year); ///String
console.log(year + 10);

const yearUpdate = Number(year);

console.log(yearUpdate, typeof yearUpdate); ///Number
console.log(yearUpdate + 10);

///..and Coercion

console.log('I am ' + 23 + ' year old');
console.log('23' - '10' - '3');  // string change to number

console.log('23' + '10' + '3');  // treated as string so concatenated

// Guess the number

let n= '1' + 1; //11 
n= n-1; // 11 - 1 = 10
console.log(n);
*/

///////////////////// Truthy and False....
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
*/

///// Equal and Equality operator
/*
const age = '18';

if(age == 18) console.log("age is 18")

if(age === 18) console.log("age is 18...")
*/
/*
const fav = Number(prompt("give a  number"));
console.log(fav);
console.log(typeof fav);

if(fav === 23){
    console.log("23 is number");
} else if(fav === 7){
    console.log("7 s the number")
}
*/

///////////////////? COding challenge 3
/*
let dolphins = 96 + 108 + 89;
let dolphinsAvg = dolphins/3;
let Koalas = 88 + 91 + 110;
let KoalasAvg = Koalas/3;

if(dolphinsAvg > KoalasAvg){
    console.log('Dolphin Wins');
}else if (dolphinsAvg < KoalasAvg){
    console.log('Koalas Wins');
}else if (dolphinsAvg == KoalasAvg){
    console.log("Draw");
}
*/

/////////// SWITCH statment
/*
const day = 'monday';

switch(day){
    case 'monday':
        console.log("its monday");
        break;
    case 'tuesday':
        console.log("its monday");
        break;
    case 'wednesday':
        console.log("its monday");
        break;
    default:
        console.log("INVALID");    
}
*/


/////////////////// COding challenge 4   ///////////////


let bill = 40;

let tip = bill>=50 && bill <=300 ? bill * 0.15 : bill * 0.2;

console.log(`“The bill was ${bill}, the tip was ${tip}, 
and the total value ${bill+tip}`);


/////////////////// COding challenge 4   ///////////////