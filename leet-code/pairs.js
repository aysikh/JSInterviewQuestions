var validateParenthesis = str => {
  // have empty array to store characters
  const stack = []
  // store opening & closing characters
  const parenthesis = {
    '(' : ')'
  }
  // loop through the characters in the string
  for (const char of str) {
  // asking if the char in the string is in the parenthesis
      if(char in parenthesis) {
          stack.push(parenthesis[char])
          // if the stack is empty or if the last element in the array doesn't equal the character 
      } else {
        if(stack.length === 0 || stack.pop() !== char) {
              return false;
        }
      }
      return stack.length === 0
  }
};

console.log(validateParenthesis('(())'))

var isValid = function(s) {
  const stack = []
  const keys = {
      '(': ')',
      '{': '}',
      '[': ']',
  }
  for (const ch of s) {
      if (ch in keys) {
          stack.push(keys[ch])
      } else {
          if (stack.length === 0 || stack.pop() !== ch) {
              return false
          }
      }
  }
  return stack.length === 0
};

console.log(isValid('(())'))