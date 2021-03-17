// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


function moveZerosToEnd(a) {
  if (a.length <= 1) { return a; }

  let moved = 0;
  for (let i = 0; i < a.length - 1; i++) {
      if (a[i-moved] === 0) {
          a.splice(i - moved, 1); // if this operation is O(N), then full implementation has O(N^2)
          a.push(0);
          moved++;
      }
  }

  return a;
}

console.log(moveZerosToEnd([0,3,2,4,0,1,0]))



let moveZeroes = function(nums) {
  for(let i= nums.length-1; i>=0; i--){
      if(nums[i]===0){
          nums.push(0) 
          nums.splice(i,1)
      }
  }
  return nums
};

console.log(moveZeroes([0,1,3,2,1,0,3]))