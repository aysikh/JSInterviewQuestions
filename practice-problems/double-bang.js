/**
 * What will the output of the following statements be?
 */

let log = console.log;
log(!!true); // true
log(!!false) // false
log(!!"false"); // true
log(!!"hello") // true
log(!!""); // false
log(!!1); // true
log(!!-1); // true
log(!!NaN); // false
log(!!undefined); // false
log(!!null); // false