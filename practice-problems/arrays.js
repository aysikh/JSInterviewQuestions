/* create an array that is prepopulated with 5 random numbers */

let a1 = Array.from({length: 5}, n => Math.random()); // the second argument is a map function
console.log('1', a1);

let a2 = new Array(5).fill(1).map(n => n + Math.random());
console.log('2', a2);

// node practice-problems/arrays.js