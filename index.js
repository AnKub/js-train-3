// Задача 1: Напишіть функцію, яка перетворює рядок в число, використовуючи Number()

function stringToNumber(str) {
 let num = Number(str);
 return num;
}

console.log("Завдання 1 ====================================");
console.log('stringToNumber("42")', stringToNumber("42")); // Виведе 42

// Задача 2: Напишіть функцію, яка визначає, чи є два числа майже однаковими, використовуючи Number.EPSILON

function isAlmostSame(num1, num2) {
  // Визначаємо, чи є різниця між двома числами меншою або рівною EPSILON
    return Math.abs(num1 - num2) < Number.EPSILON;
}

console.log("Завдання 2 ====================================");
console.log("isAlmostSame(0.1 + 0.2, 0.3)", isAlmostSame(0.1 + 0.2, 0.3)); // Виведе true

// Задача 3: Напишіть функцію, яка перевіряє, чи є число безпечним цілим числом

function isSafeInteger(num) {
  return Math.abs(num) <= Number.MAX_SAFE_INTEGER; 

}

console.log("Завдання 3 ====================================");
console.log(
  "isSafeInteger(Number.MAX_SAFE_INTEGER + 1)",
  isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
); // Виведе false

// Задача 4: Використовуючи результати Задачі 3, напишіть функцію, яка перевіряє, чи є число небезпечним цілим числом

function isUnsafeInteger(num) {
  // Використовуємо логічну оператор НЕ (!), щоб отримати протилежну відповідь від функції isSafeInteger()
}

console.log("Завдання 4 ====================================");
console.log(
  "isUnsafeInteger(Number.MIN_SAFE_INTEGER - 1)",
  isUnsafeInteger(Number.MIN_SAFE_INTEGER - 1)
); // Виведе true

// Задача 5: Напишіть функцію, яка перевіряє, чи є число надто великим для представлення в JavaScript

function isTooLarge(num) {
  num >= Number.MAX_VALUE;
  return 'Too much';
}

console.log("Завдання 5 ====================================");
console.log(
  "isTooLarge(Number.MAX_VALUE * 2)",
  isTooLarge(Number.MAX_VALUE * 2)
); // Виведе true

// Задача 6: Напишіть функцію, яка перевіряє, чи є число меншим чим  найменше можливе числове значення в JavaScript

function isAlmostZero(num) {
  num <= Number.MIN_VALUE;
  return 'I see almost nothing';

}

console.log("Завдання 6 ====================================");
console.log(
  "isAlmostZero(Number.MIN_VALUE / 2)",
  isAlmostZero(Number.MIN_VALUE / 2)
); // Виведе false
console.log("isAlmostZero(Number.MIN_VALUE)", isAlmostZero(Number.MIN_VALUE)); // Виведе false

// Задача 7: Напишіть функцію, яка перевіряє, чи є значення цілим числом

function checkIsInteger(num) {
 if  (Number.isInteger(num)){
return num;
}else{
return false;
}
}

console.log("Завдання 7 ====================================");
console.log("checkIsInteger(42.5)", checkIsInteger(42.5)); // Виведе false

// Задача 8: Напишіть функцію, яка перевіряє, чи є значення безпечним цілим числом

function checkIsSafeInteger(num) {
  // Використовуємо вбудовану функцію Number.isSafeInteger(), щоб перевірити, чи є значення безпечним цілим числом
  if  (Number.isSafeInteger(num)){
    return num;
    }else{
    return false;
    }
    }

console.log("Завдання 8 ====================================");
console.log(
  "checkIsSafeInteger(Math.pow(2, 53))",
  checkIsSafeInteger(Math.pow(2, 53))
); // Виведе false

// Задача 9: Напишіть функцію, яка конвертує число в рядок з експоненційним представленням

function convertToExponential(num) {
  // Використовуємо метод toExponential(), щоб конвертувати число в рядок з експоненційним представленням
  let gg = num.toExponential();
  return gg;
}

console.log("Завдання 9 ====================================");
console.log("convertToExponential(42)", convertToExponential(42)); // Виведе "4.2e+1"

// Задача 10: Напишіть функцію, яка конвертує число в рядок з фіксованою кількістю знаків після коми

function convertToFixed(num, precision) {
  let twoZero = num.toFixed(precision);
  return twoZero;
}

console.log("Завдання 10 ====================================");
console.log("convertToFixed(42.9876, 2)", convertToFixed(42.9876, 2)); // Виведе "42.99"

// Задача 11: Напишіть функцію, яка конвертує число в рядок

function convertToString(num) {
  // Використовуємо метод toString(), щоб конвертувати число в рядок
  let beLine = num.toString();
  return beLine;
}

console.log("Завдання 11 ====================================");
console.log("convertToString(42)", convertToString(42)); // Виведе "42"

// Задача 12: Напишіть функцію, яка окргугляє число до вказаної довжини

function convertToPrecision(num, precision) {
  // Використовуємо метод toPrecision(), щоб округлити число до вказаної довжини
  let beRound = num.toPrecision(precision);
  return beRound;
}

console.log("Завдання 12 ====================================");
console.log("convertToPrecision(42.9876, 2)", convertToPrecision(42.9876, 2)); // Виведе "43"
