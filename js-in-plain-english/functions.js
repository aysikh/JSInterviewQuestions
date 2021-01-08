// Creating functions
// Example of shortcut functions:

/* Wrong */
function myFunc() {}

/* Wrong */
const myFunc = function() {}

/* Correct */
const myFunct = () => {}

////////////////////////////////////////////////////////

// Getting values from an object
// Example to get values ​​and create variables:

/* Wrong */
const object1 = { a: 1 , b: 2 };
const a = object1.a;
const b = object1.b;

/* Correct */
const object1 = { a: 1 , b: 2 };
const { a, b } = object1;

////////////////////////////////////////////////////////

// Concatenate Arrays
// Example of concatenating arrays:

/* Wrong */
const array1 = [1,2,3,4];
const array2 = [5,6,7,8];
const array3 = array1.concat(array2);

/* Correct */
const array1 = [1,2,3,4];
const array2 = [5,6,7,8];
const array3 = [...array1, ...array2]

////////////////////////////////////////////////////////

// Assign a value to an Array
// Example of shortcut assign a value in an array:

/* Wrong */
const myArray = [];
myArray[myArray.length] = "hello world";

/* Correct */
const myArray = [];
myArray.push('Hello world');

////////////////////////////////////////////////////////

// Declaring Arrays
// Example for shortcut declaring arrays:

/* Wrong */
const myArray = new Array();

/* Correct */
const myArray = []; 

////////////////////////////////////////////////////////

// Declaring Objects
// Example for shortcut declaring objects:

/* Wrong */
const myObject = new Object();

/* Correct */
const myObject = {};

////////////////////////////////////////////////////////

// Use ‘let’ for the changing variables instead of ‘var’
// The let statement declares a locally scoped variable with block scope, this variable will change:

/* Wrong */
var myVal = 1;
for (var i; i < 10; i++){
  myVal = 1 + i;
}

/* Correct */
let myVal = 1;
for (let i; i < 10; i++){
  myVal += i
}

////////////////////////////////////////////////////////

// shortcut if values

/* Wrong */
const a = 5;
let b;
if (a === 5){
  b = 3;
} else {
  b = 2;
}

/* Correct */
const a = 5;
const b = a === 5 ? 3 : 2;

////////////////////////////////////////////////////////

// Shortcut if boolean

/* Wrong */
const a = 1;
const b = 1;
let isTrue = false
if (a === b) {
  isTrue = true
}

/* Correct */
const a = 1;
const b = 1;
const isTrue = a === b

////////////////////////////////////////////////////////

// Exist in array

/* Wrong */
const myArray = [{a: 1}, {a: 2}, {a: 3}];
let exist = false;
myArray.forEach( item => {
 if (item.a === 2) exist = true
})

/* Correct */
const myArray = [{a: 1}, {a: 2}, {a: 3}];
const exist = myArray.some( item => item.a == 2)

////////////////////////////////////////////////////////

// Use ‘reduce’ Instead ‘forEach’ and ‘for’ to sum values
// Example of shortcut sum of array:

/* Wrong */
const values = [1, 2, 3, 4, 5];
let total = 0;
values.forEach( (n) => { total += n})

/* Wrong */
const values = [1, 2, 3, 4, 5];
let total = 0;
for (let i; i < values.length; i++){
  total += values[i];
}

/* Correct */
const values = [1, 2, 3, 4, 5];
const total = values.reduce((total, num) => total + num);