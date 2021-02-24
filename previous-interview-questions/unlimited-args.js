function solution(...args) {
  // return arguments[0];
  let sum = 0 
  console.log(...args)
  args.forEach(argument => sum += argument)
  return sum
}
solution(4, 5, 6, 7);
// console.log(solution(4,5,5,6,8)) 