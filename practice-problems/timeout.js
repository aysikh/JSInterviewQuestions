console.log('a')
let timmy = setTimeout(function () {
  console.log('b')
}, 1)
let timer = setTimeout(function () {
  console.log('d')
}, 0)
let timothy = setTimeout(function () {
  console.log('c')
}, 10);
console.log('e')

// node timeout.js
// what is the order of the output of the letters and why??