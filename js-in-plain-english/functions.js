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