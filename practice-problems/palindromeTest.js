function isPalindrome(string) {
  for(let i = 0; i < string.length; i++){
    // console.log(string[i])
    // console.log(string[string.length - i - 1])
    if(string[i] == string[string.length - i - 1]){
      return true
    }
  //   let y = string[i]
  //   let x = string[string.length - i - 1]
  //   if( x !== y ){
  //     return false
  //   }
  }
  // return true
  return false

}

console.log(isPalindrome("asdfa"))