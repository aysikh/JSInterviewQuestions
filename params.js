let f = function (a, b) { 
  if (arguments.length === f.length){ // arguments is the array like structures that have been passed into the function
    console.log('we have a match')
  } else {
    console.log('not a match')
  }
}

// determine if the function received the number of params it expected

f(1);
f(1,2);
f(1,2,3);