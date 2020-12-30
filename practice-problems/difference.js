/**
 * Write a function to determine the largest difference 
 * between any two numbers in an array of numbers
 */

let numbers = [12, 10, 2, 6, 5, 5, 5, 9, 10, 10, 33];

let difference = (function (arr) {

  // first I want to remove the duplicates
  // use Set
  // let answer = Array.from(new Set(arr)); // we now have a brand new array with all of the duplicates remove
  // console.log(answer.length) just to make sure 
  let answer = Array.from(new Set(arr)).sort((a, b) => (b-a)); // this does a numerical sort b/c the method 'sort' only sorts letters properly
  return answer[0] - answer[answer.length - 1];

})(numbers);

console.log(difference);