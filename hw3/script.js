// task1
// function power(base, exponent) {
//     if (exponent === 0) {
//       return 1;
//     } else {
//       return base * power(base, exponent - 1);
//     }
//   }
  

//   console.log(power(2, 4)); 
  
  // task2
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  

  console.log(gcd(18, 24));
  
  //task3
  function maxDigit(number) {
    if (number < 10) {
      return number;
    } else {
      let lastDigit = number % 10;
      let remainingDigits = Math.floor(number / 10);
      let maxInRemaining = maxDigit(remainingDigits);
      return Math.max(lastDigit, maxInRemaining);
    }
  }
  
  console.log(maxDigit(73642)); 
  
  //task4
  function isPrime(number, divisor = 2) {
    if (number <= 2) {
      return (number === 2);
    }
    if (number % divisor === 0) {
      return (number === divisor);
    }
    return isPrime(number, divisor + 1);
  }
  
  
  console.log(isPrime(17)); 
  
  // task5
  function primeFactors(number, divisor = 2) {
    if (number === 1) {
      return [];
    }
    if (number % divisor === 0) {
      return [divisor, ...primeFactors(number / divisor, divisor)];
    } else {
      return primeFactors(number, divisor + 1);
    }
  }
  
  console.log(primeFactors(18));
  
  // task6
  function fibonacci(n) {
    if (n <= 2) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  console.log(fibonacci(6));
  