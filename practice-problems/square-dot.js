// Differences between dot notation and square bracket syntax

let sam = {
  castiel: "mary"
}
let dean = {
  john: "crowley",
  mary: "chuck"
}

//which, if any, of these three log statements will work?
console.log(dean[sam.castiel]); // dean['mary] => chuck
console.log(dean.sam.castiel); // failure
console.log(dean[sam['castiel']]); // dean['mary'] => chuck
console.log(dean[sam[castiel]]); // failure because there are no quotations around castiel. there's no object called castiel
// we are really looking at dean[sam[undefined]]