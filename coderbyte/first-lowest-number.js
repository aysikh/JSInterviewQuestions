// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(array) {
  let result = 0;
  let count = 1; 
  let sortedArray = array.sort();
  let uniqueArray = [...new Set(sortedArray)]
  console.log(uniqueArray)
  let filteredArray = uniqueArray.filter(num => num > 0) 
  for( i = 0; i < filteredArray.length; i++ ){ 
      if (count !== filteredArray[i]){
        return count
      }
      else {
        count++
      }
  }
}

console.log(solution([-2, 1, 2, 4, 3, 6]))

// sort the array by smallest to largest and set it to a variable
// filter the array to see if numbers are greater than 0 
// if numbers are less than 0, return 1 
// else if numbers are greater than 0, 
// if the current number = the next number, move on the next number
// if it doesn't = the next number, add 1 to the current number, 
// and check if it equals the next number
// return result number
// for( i = 0; i < array.length; i ++ )
// let object == array[i]
// if object === array[i] + 1 ? 
