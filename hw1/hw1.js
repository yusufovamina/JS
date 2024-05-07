//task 1
// let name = prompt("Введите ваше имя:");
// alert("Привет, " + name );

//task2
// const currentYear = 2024;
// let birthYear = parseInt(prompt("Введите ваш год рождения:"));
// let age = currentYear - birthYear;
// alert("Ваш возраст: " + age);

//task3
// let side = parseFloat(prompt("Введите длину стороны квадрата"));
// let perimeter = 4 * side;
// alert("Периметр квадрата: " + perimeter);

//task4
// const pi = 3.14;
// let radius = parseFloat(prompt("Введите радиус окружности:"));
// let area = pi * radius * radius;
// alert("Площадь окружности " + area);

//task5
// let distance = parseFloat(prompt("Введите расстояние между двумя городами:"));
// let time = parseFloat(prompt("За сколько часов вы хотите добраться?"));
// let speed = distance / time;
// alert("Необходимая скорость: " + speed + " км/ч");

//task6
// const usdToEurRate = 0.85;
// let dollars = parseFloat(prompt("Введите сумму в долларах"));
// let euros = dollars * usdToEurRate;
// alert("Сумма в евро: " + euros.toFixed(2));

//task7
// let flashDriveGB = parseFloat(prompt("Введите объем флешки в гб"));
// let fileSizeMB = 820;
// let flashDriveMB = flashDriveGB * 1024;
// let fileCount = Math.floor(flashDriveMB / fileSizeMB);
// alert("На флешке поместится " + fileCount + " файлов размером по 820 Мб");

//task8
// let wallet = parseFloat(prompt("Введите сумму в кошельке"));
// let chocolatePrice = parseFloat(prompt("Цена одной шоколадки"));
// let chocolateCount = Math.floor(wallet / chocolatePrice);
// let change = wallet - (chocolateCount * chocolatePrice);
// alert("Вы можете купить " + chocolateCount + " шоколадок и у вас останется сдача - " + change.toFixed(2));

//task9
// let threeDigitNumber = parseInt(prompt("Введите трехзначное число"));
// let reversedNumber = 0;
// while (threeDigitNumber > 0) {
//   reversedNumber = (reversedNumber * 10) + (threeDigitNumber % 10);
//   threeDigitNumber = Math.floor(threeDigitNumber / 10);
// }
// alert("Число задом наперед - " + reversedNumber);

//task10
let number = parseInt(prompt("Введите целое число"));
let isEven = (number % 2) === 0;
alert("Число " + (isEven ? "четное" : "нечетное") + ".");

