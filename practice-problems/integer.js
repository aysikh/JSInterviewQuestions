/**
 * Write a function to determine if a number is an integer
 */

let isInt = function (num) {
  return (!isNaN(num) && parseInt(num) === num); // if it IS a number and if number IS an integer
}
console.log(3, isInt(3));
console.log(3.5, isInt(3.5));
console.log(1.00000, isInt(1.00000));