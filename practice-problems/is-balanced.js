const openers = ["(", "[", "{"]
const closers = [")", "]", "}"]
let braketOrder = []

const isBalanced = (str) => {
  if (str.length % 2 !== 0) {
    return false
  }

  for (let i = 0; i < str.length; i++) {
    // charToMatch = str.charAt(i)
    if (closers.includes(str.charAt(i)) && closers.indexOf(str.charAt(i)) === openers.indexOf(braketOrder[braketOrder.length - 1]) ) {
      braketOrder.pop()
    } else if (openers.includes(str.charAt(i))) {
      braketOrder.push(str.charAt(i))
    } else {
      return false
    }
  }
  return true
}