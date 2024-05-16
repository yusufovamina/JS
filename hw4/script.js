//task1
function compareNumbers(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  console.log(compareNumbers(5, 10)); 
console.log(compareNumbers(10, 5));
console.log(compareNumbers(7, 7));
  //task2
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5));

  //task3
  function digitsToNumber(a, b, c) {
    return parseInt(`${a}${b}${c}`);
  }
  console.log(digitsToNumber(1, 4, 9)); 
  //task4
  
  function calculateArea(length, width = length) {
    return length * width;
  }
console.log(calculateArea(5, 3)); 
console.log(calculateArea(4))
  
  //task5

  function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    return sum === number;
  }
  console.log(isPerfectNumber(28));
  
  //task6
  function perfectNumbersInRange(min, max) {
    for (let i = min; i <= max; i++) {
      if (isPerfectNumber(i)) {
        console.log(i);
      }
    }
  }
  perfectNumbersInRange(1, 1000);
  //task7
  function formatTime(hours, minutes = 0, seconds = 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  console.log(formatTime(9, 25, 5));
console.log(formatTime(12));
  
  //task8
  function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
  }
  console.log(timeToSeconds(1, 30, 0)); 
  //task9
  function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return formatTime(hours, minutes, remainingSeconds);
  }
  console.log(secondsToTime(3665)); 

  //task10
  function differenceBetweenDates(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    const time1 = timeToSeconds(hours1, minutes1, seconds1);
    const time2 = timeToSeconds(hours2, minutes2, seconds2);
    const difference = Math.abs(time1 - time2);
    return secondsToTime(difference);
  }
  console.log(differenceBetweenDates(12, 30, 15, 9, 45, 20));