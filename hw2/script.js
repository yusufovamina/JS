//task1
// const start = parseInt(prompt("Введите начальное число:"));
// const end = parseInt(prompt("Введите конечное число:"));
// let sum = 0;
// for (let i = start; i <= end; i++) {
//   sum += i;
// }
// console.log(`Сумма чисел от ${start} до ${end} равна ${sum}`);

//task2
// const num1 = parseInt(prompt("Введите первое число:"));
// const num2 = parseInt(prompt("Введите второе число:"));
// let a = num1;
// let b = num2;
// while (b !== 0) {
//   const temp = b;
//   b = a % b;
//   a = temp;
// }
// console.log(`Наибольший общий делитель чисел ${num1} и ${num2} равен ${a}`);

//task3
// const number = parseInt(prompt("Введите число:"));
// console.log(`Делители числа ${number}`);
// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//   }
// }

//task4
// const inputNumber = parseInt(prompt("Введите число"));
// const digitCount = inputNumber.toString().length;
// console.log(`Количество цифр в числе ${inputNumber}: ${digitCount}`);

//task5
// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
// let evenCount = 0;
// let oddCount = 0;
// for (let i = 0; i < 10; i++) {
//   const num = parseInt(prompt(`Введите число ${i + 1}:`));
//   if (num > 0) {
//     positiveCount++;
//   } else if (num < 0) {
//     negativeCount++;
//   } else {
//     zeroCount++;
//   }
//   if (num % 2 === 0) {
//     evenCount++;
//   } else {
//     oddCount++;
//   }
// }
// console.log(`Положительных чисел: ${positiveCount}`);
// console.log(`Отрицательных чисел: ${negativeCount}`);
// console.log(`Нулей: ${zeroCount}`);
// console.log(`Четных чисел: ${evenCount}`);
// console.log(`Нечетных чисел: ${oddCount}`);


//task6
// let anotherCalculation = true;

// while (anotherCalculation) {
//     const num1 = parseFloat(prompt("Введите первое число"));
//     const operator = prompt("Введите оператор (+, -, *, /)");
//     const num2 = parseFloat(prompt("Введите второе число"));

//     let result;
//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             result = "Неверный оператор";
//     }

//     alert(`Результат: ${result}`);

//     anotherCalculation = confirm("Хотите решить еще один пример?");
// }


//task7

// const number = prompt("Введите число:");
//     const shiftAmount = parseInt(prompt("На сколько цифр его сдвинуть?"));

//     const shiftedNumber = number.slice(shiftAmount) + number.slice(0, shiftAmount);

//     alert(`Результат: ${shiftedNumber}`);


//task8
// const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//     let index = 0;

//     while (confirm(`${daysOfWeek[index]}. Хотите увидеть следующий день?`)) {
//         index = (index + 1) % 7;
//     }


//task9
// for (let i = 2; i <= 9; i++) {
//     console.log(`Таблица умножения для ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log("***************");
// }

//task10
let min = 0;
let max = 100;
let guessed = false;

while (!guessed) {
    const guess = Math.floor((min + max) / 2);
    const userInput = prompt(`Ваше число > ${guess}, < ${guess} или == ${guess}?`);

    if (userInput === ">") {
        min = guess + 1;
    } else if (userInput === "<") {
        max = guess - 1;
    } else if (userInput === "==") {
        alert(`Ваше число  ${guess}`);
        guessed = true;
    } else {
        alert("Неверный ввод. Попробуйте снова.");
    }
}
