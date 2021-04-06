const checkForPrimes = (num) => {
  let isPrime = false
  for (let i = 3; i <= Math.floor(num/2); i += 2) {
    if (num % i === 0) {
      isPrime = false;
      return isPrime
    } else {
      isPrime = true;
    }

  }
  return isPrime
}

const findPrimes = () => {
  let primes = [2, 3, 5, 7, 11, 13];
  let nextPossible = 15;
  
  while (primes.length < 10002) {
  
    if (checkForPrimes(nextPossible)) {
      primes.push(nextPossible)
    }

    nextPossible += 2;
    
  }
  return primes[10001]
}


console.log(findPrimes())