function isScrambledPalindrome(input) {
  // TODO: Add error handling code.
  var a = input.split("").sort();
  var char, nextChar = "";
  var charCount = [ 0 ];
  var charIdx = 0;
  for ( var i = 0; i < a.length; ++i) {
      char = a[i];
      nextChar = a[i + 1] || "";
      charCount[charIdx]++;
      if (char !== nextChar) {
          if (charCount[charIdx] % 2 === 1) {
              if (charCount.length > 1) {
                  // A scrambled palindrome can only have 1 odd char count.
                  return false;
              }
              charIdx = 1;
              charCount.push(0);
          } else if (charCount[charIdx] % 2 === 0) {
              charCount[charIdx] = 0;
          }
      }
  }
  return true;
}

console.log("abc: " + isScrambledPalindrome("abc")); // false
console.log("aabbcd: " + isScrambledPalindrome("aabbcd")); // false
console.log("aabbb: " + isScrambledPalindrome("aabbb")); // true
console.log("a: " + isScrambledPalindrome("a")); // true




// Write a function that returns True or False if a given string is an anagram of a palindrome

function isAnagramPalindrome(string) {
  // have array to hold letters
    let array = []
    // parse thru the string
    for (i = 0; i < string.length; i++ ) {
    // check each letter of string
      let letter = string[i]
      if (array.includes(letter)) {
    // if letter is included in array, remove it
          array.splice(array.indexOf(letter), 1)
      }
    // if letter it NOT included, add it
    else {
      array.push(letter)
    }
    }
  // after loop/parsing
  // check if array length is less than 2, return TRUE else FALSE
    if (array.length < 2) {
      return true
    }
    else {
      return false
    }
}

isAnagramPalindrome("mama")










//







// function isAnagramPalindrome(word){
// // create an empty array that'll add each letters
// // loop through the word, if there is a pair, remove those letters from array
// // if the array's length is more than 1, it is not a palindrome
//   let letterArray = [];
//   let string = word.split("").sort()
//   // console.log(string)
//   for(let i = 0; i < string.length; i++){
//     letter = string[i]; 
//     nextLetter = string[i + 1];
//     if(letter != nextLetter){
//       letterArray.push(letter)
//     } 
//     else{
//       letterArray
//     }
//   }
//     return letterArray
//   // if(letterArray.length >= 3){
//   //   return false
//   // }
//   // return true 
// }

// isAnagramPalindrome("nugget")


