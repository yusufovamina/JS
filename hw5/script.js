//task1
let car = {
    manufacturer: "Toyota",
    model: "Prius",
    year: 2020,
    averageSpeed: 60
};

function displayCarInfo(car) {
    console.log(`Производитель: ${car.manufacturer}`);
    console.log(`Модель: ${car.model}`);
    console.log(`Год выпуска: ${car.year}`);
    console.log(`Средняя скорость: ${car.averageSpeed} км/ч`);
}

displayCarInfo(car);

function calculateTravelTime(distance, car) {
    let travelTime = distance / car.averageSpeed;
    let restTime = Math.floor(travelTime / 4);
    let totalTime = travelTime + restTime;
    console.log(`Для того чтоб проехать ${distance} км потребуется ${totalTime} часов учитывая перерывы`);
}

calculateTravelTime(240, car); 


//task2
let fraction1 = {
    numerator: 1,
    denominator: 2
};

let fraction2 = {
    numerator: 3,
    denominator: 4
};

function addFractions(frac1, frac2) {
    let numerator = frac1.numerator * frac2.denominator + frac2.numerator * frac1.denominator;
    let denominator = frac1.denominator * frac2.denominator;
    return { numerator, denominator };
}

function subtractFractions(frac1, frac2) {
    let numerator = frac1.numerator * frac2.denominator - frac2.numerator * frac1.denominator;
    let denominator = frac1.denominator * frac2.denominator;
    return { numerator, denominator };
}


function multiplyFractions(frac1, frac2) {
    let numerator = frac1.numerator * frac2.numerator;
    let denominator = frac1.denominator * frac2.denominator;
    return { numerator, denominator };
}

function divideFractions(frac1, frac2) {
    let numerator = frac1.numerator * frac2.denominator;
    let denominator = frac1.denominator * frac2.numerator;
    return { numerator, denominator };
}
function getCD(a, b) {
    while (b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function simplifyFraction(fraction) {
    let commonDivisor = getCD(fraction.numerator, fraction.denominator);
    fraction.numerator /= commonDivisor;
    fraction.denominator /= commonDivisor;
    return fraction;
}


let resultAdd = addFractions(fraction1, fraction2);
console.log(`сложение: ${resultAdd.numerator}/${resultAdd.denominator}`);
let resultSub = subtractFractions(fraction1, fraction2);
console.log(`Вычетание: ${resultSub.numerator}/${resultSub.denominator}`);
let resultM = subtractFractions(fraction1, fraction2);
console.log(`Умножение: ${resultM.numerator}/${resultM.denominator}`);
let resultDiv = subtractFractions(fraction1, fraction2);

console.log(`Деление: ${resultDiv.numerator}/${resultDiv.denominator}`);
let resultSimplified = simplifyFraction(resultAdd);
console.log(`Сокращенная дробь: ${resultSimplified.numerator}/${resultSimplified.denominator}`);


//task3
let time = {
    hours: 20,
    minutes: 30,
    seconds: 45
};

function displayTime(time) {
    console.log(`${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`);
}

function addSeconds(time, seconds) {
    time.seconds += seconds;
    if (time.seconds >= 60) {
        time.minutes += Math.floor(time.seconds / 60);
        time.seconds %= 60;
    }
    if (time.minutes >= 60) {
        time.hours += Math.floor(time.minutes / 60);
        time.minutes %= 60;
    }
    if (time.hours >= 24) {
        time.hours %= 24;
    }
}

function addMinutes(time, minutes) {
    time.minutes += minutes;
    if (time.minutes >= 60) {
        time.hours += Math.floor(time.minutes / 60);
        time.minutes %= 60;
    }
    if (time.hours >= 24) {
        time.hours %= 24;
    }
}

function addHours(time, hours) {
    time.hours += hours;
    if (time.hours >= 24) {
        time.hours %= 24;
    }
}


displayTime(time);

addSeconds(time, 30);

displayTime(time);

addMinutes(time, 45);
displayTime(time);
addHours(time, 5);
displayTime(time);
