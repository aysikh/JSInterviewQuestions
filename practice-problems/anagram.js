/**
 * Write a function to determine if one String is 
 * a case-insensitive anagram of another String
 */

let isAnagram = function (str1, str2) {
  let sorted1 = str1.split('').sort().join('').toLowerCase();
  let sorted2 = str2.split('').sort().join('').toLowerCase();
  return (sorted1 === sorted2);
}

console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello', 'loelh'));



// Words to match
var words = ["dell", "ledl", "abc", "cba"];

// The output object
var anagrams = {};

for (var i in words) {
    var word = words[i];

    // sort the word like you've already described
    var sorted = sortWord(word);

    // If the key already exists, we just push
    // the new word on the the array
    if (anagrams[sorted] != null) {
        anagrams[sorted].push(word);
    } 
    // Otherwise we create an array with the word
    // and insert it into the object
    else {
        anagrams[sorted] = [ word ];
    }
}