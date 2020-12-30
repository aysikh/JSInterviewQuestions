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