function averagePair(array, target) {
// define left & right
    let left = 0; // we move forward
    let right =  array.length -1; // we move backward
    // loop thru left, increment by 1
    while(left < right) {
        let result = (array[left] + array[right]) / 2
        if (result === target){
          return true
        }
        else if (result < target){
          left++;
        }
        else {
          right--; 
        }
    }
        return false
} 

console.log(averagePair([1,2,100], 50))
