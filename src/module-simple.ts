/* eslint-disable @typescript-eslint/no-inferrable-types */ // отменить eslint правило в рамках этого файла

//task 1
/* Техническое задание
Напиши программу, которая посчитает сколько всего рублей понадобится на поездку.
Курсы валют указаны в переменных euroRate и dollarRate.
Переменные euroAmount и dollarAmount— необходимые суммы на поездку.
Создай переменную rublesAmount и записывай в неё результат вычислений.
*/
const euroRate: number = 74;
const dollarRate: number = 63;

// отменить eslint правило только для следующей строки
// eslint-disable-next-line prefer-const
let euroAmount: number = 500;
const dollarAmount: number = 2500;

const rublesAmount: number = euroAmount * euroRate + dollarAmount * dollarRate;

//task 2
/* Техническое задание
Напиши программу, которая посчитает, сколько в итоге денег я буду должен отдать после поездки.
Я могу занять необходимую сумму, но буду должен вернуть в два раза больше, чем взял.
В переменной travelCost сумма необходимая на поездку.
В переменной balance находится сумма, которая есть у меня сейчас.
Узнай, сколько я буду должен отдать своему другу, и запиши результат в переменную debtAmount.
*/

(() => {
  const travelCost: number = 150000;
  const balance: number = 100000;

  const debtAmount: number = (travelCost - balance) * 2;
})();

/*Мяу! Запрограммируй умные весы, чтобы они давали рекомендации в зависимости от веса.
Вес записан в переменную weight.
Рекомендацию записывай строкой в переменную recommendation.
Если вес до 4 кг (не включая это значение), рекомендация – 'Пора перекусить'.
Если вес от 4 кг включительно до 5.5 кг включительно – 'Вес в норме'.
Если вес больше 5.5 кг – 'Пора на тренировку'.
*/
const weight: number = 5;
let recommendation: string;

if (weight < 4) {
  recommendation = 'Пора перекусить';
} else if (weight >= 4 && weight <= 5.5) {
  recommendation = 'Вес в норме';
} else if (weight > 5.5) {
  recommendation = 'Пора на тренировку';
}

/* Техническое задание
Программа должна анализировать числа.
Если число делится на 3, результат работы программы — строка 'Fizz'.
Если число делится на 5 — строка 'Buzz'.
Если число одновременно делится на 3 и на 5 — результат 'FizzBuzz'.
В остальных случаях результат работы программы — изначальное число.
Число записано в переменную number.
Результат работы программы записывайте в переменную taskResult.
*/
const number: number = 15;
let taskResult: string | number;

if (number % 3 == 0 && number % 5 == 0) {
  taskResult = 'FizzBuzz';
} else if (number % 5 == 0) {
  taskResult = 'Buzz';
} else if (number % 3 == 0) {
  taskResult = 'Fizz';
} else {
  taskResult = number;
}

/* Техническое задание

Напишите программу, которая последовательно выводит в консоль числа в геометрической прогрессии.
Стартовое значение, с которого должна начаться последовательность, записано в переменную startNumber.
Множитель записан в переменную multiplier.
Количество чисел записано в переменную quantity.
*/
let startNumber: number = 1;
const multiplier: number = 4;
const quantity: number = 7;

for (let i: number = 0; i < quantity; i++) {
  console.log((startNumber *= multiplier));
}

/* Техническое задание
Напишите универсальную программу, которая вычисляет сумму чисел от 1 до n.
Число, до которого нужно складывать числа (включительно), указано в переменной lastNumber.
Найдите сумму всех чисел и сохраните результат в переменную sum.
*/
const lastNum: number = 10;
let sum: number = 0;
let n: number = 1;

while (n <= lastNum) {
  sum += n;
  n++;
}

/* Техническое задание
Напишите универсальную программу, которая находит произведение всех чётных чисел из последовательности от 1 до n.
Число, до которого идёт последовательность (включительно), записано в переменную lastNumber
Найдите произведение всех чисел и сохраните результат в переменную multiplicationResult.
*/
const lastNumber: number = 5;
let multiplicationResult: number = 1;

for (let q: number = 1; q <= lastNumber; q++) {
  if (q % 2 == 0) {
    multiplicationResult *= q;
  } else {
    continue;
  }
}
