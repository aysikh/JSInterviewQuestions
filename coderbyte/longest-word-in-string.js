// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

function LongestWord(sen) { 
  sen=sen.replace(/[^a-zA-Z ]/ig,'')
  words = sen.split(" ")
  LongestWord = words[0]
  for (i = 0; i<words.length; i ++) {
  	if (words[i].length > LongestWord.length) {
  	  LongestWord = words[i]	
  	}
  }
 return LongestWord
}


// keep this function call here 
LongestWord(readline());


function LongestWord(sen) { 

  // get individual words
  var words = sen.match(/\w+/g);
  
  // set initial longest word
  var longest = words[0];

  // compare words to longest
   for (var i=0; i<words.length; i++) {
       if (words[i].length > longest.length) {
           longest = words[i];
       }
   }  
   
  return longest; 
}


function LongestWord(str) { 

  var string = str.replace(/[^a-zA-Z0-9 ]/g, "").split(' ')
  
  return string[string.map(x => x.length).findIndex(x => x == Math.max(...string.map(x => x.length)))]
         
}
