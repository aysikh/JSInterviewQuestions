/**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

let palindrome = function (word) {
  word = word.replace(/\W/g, '') // \W defines all of the ! ? '' , etc. g looks for ALL of them
  word = word.toLowerCase(); // just in case if the word has uppercase letters
  let half = Math.floor(word.length/2) // find the length of the word and split in half to round down
  for (let i = 0; i < half.length; i+=1){ // make a for loop to iterate through the word
    if (word[i] !== word[word.length] - 1 - i){ // compare the beginning letter with the last letter in the word
      return false;
    }
  }
  return true;
}

let fastestIsPalindrome = function (str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}

let palindrome1 = function (word) {
  word = word.replace(/\W/g, '') // \W defines all of the ! ? '' , etc. g looks for ALL of them
  word = word.toLowerCase(); // just in case if the word has uppercase letters
  return word === word.split('').reverse().join('');
}

// console.log(palindrome('radar')); //true
// console.log(palindrome('redder')); //true
// console.log(palindrome('window')); //false
// console.log(palindrome('tacocat'))

// console.log(palindrome1('radar')); //true
// console.log(palindrome1('redder')); //true
// console.log(palindrome1('window')); //false

console.log(fastestIsPalindrome('radar'))
console.log(fastestIsPalindrome('redder'))
console.log(fastestIsPalindrome('tacocat'))
console.log(fastestIsPalindrome('asdf'))
