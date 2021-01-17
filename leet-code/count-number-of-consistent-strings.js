// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

 

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

var countConsistentStrings = function(allowed, words) {
  const allowedChars = new Set(allowed.split(''));
  let count = 0;
  for(let i = 0; i < words.length; i++) {
    let n = 0;
    while(n < words[i].length) {
      if(!allowedChars.has(words[i][n])) {
        break;
      }
      n++;
    }
    if(n === words[i].length){
      count++;
    }
  }
return count;
};


var countConsistentStrings = function(allowed, words) {
  let count  = 0;
  let char ;
  words.forEach(e => {
      char= 0;
      while(char < e.length){
          if(!allowed.includes(e[char])) break;
          char++;
      }
      if(char === e.length) count++;
  })
  return count;
};



// allowed must be split up into separate strings
// after splitting, we then split the letters in words
// we would loop through words and compare the letters with the letters in allowed
// 