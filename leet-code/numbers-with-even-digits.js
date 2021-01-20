// Given an array nums of integers, return how many of them contain an even number of digits.
 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.


var findNumbers = function(nums) {
  let count = 0;
    
  for(let i = 0; i < nums.length; i++) {
      let a = nums[i].toString();
      if(a.length%2 === 0) {
          count++
      }
      
  }
  return count;
};

console.log(findNumbers([333, 22, 1312, 33244]))
// we have an array of integers
// we want to iterate through each number in array and figure out what number is even 
// so how do we figure out if the number is even? we can do a module of 2 
// if num % 2 then return "number containers num.count digits" 
