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

/* Техническое задание
Напиши программу, которая формирует заказ в виде строки.
Массив с вариантами основы для смузи записан в переменную liquids.
Массив с фруктами находится в переменной fruits.
Массив с зеленью записан в переменную greens.
Выбор посетителя записан в виде чисел в переменные chosenLiquid (индекс выбранной основы для смузи), chosenFruit (выбранный фрукт), chosenGreen (выбранная зелень).
Обрати внимание, что посетители выбирают пункты в электронном меню, где нумерация начинается с единицы, а не с нуля, как в массивах. Учти это при решении.
Собери строку с заказом посетителя вида 'Основа — ' + основа для смузи + ', фрукт — ' + выбранный фрукт + ', зелень — ' + выбранная зелень. Запиши результат в переменную order.
*/

const liquids: string[] = ['вода', 'молоко', 'сок', 'чай', 'йогурт'];
const fruits: string[] = ['киви', 'банан', 'персик', 'манго', 'груша', 'ананас'];
const greens: string[] = ['мята', 'шпинат', 'руккола', 'петрушка', 'базилик'];

const chosenLiquid: number = 1;
const chosenFruit: number = 3;
const chosenGreen: number = 2;

let order: string = '';
order +=
  'Основа — ' +
  liquids[chosenLiquid - 1] +
  ', ' +
  'фрукт — ' +
  fruits[chosenFruit - 1] +
  ', ' +
  'зелень — ' +
  greens[chosenGreen - 1];

/* Техническое задание

Напиши программу, которая составит из элементов массива список покупок.
В результате должна получиться строка с элементами массива через запятую вида 'элемент, элемент, элемент'.
Каждый элемент должен быть отделён запятой, точка в конце строки не нужна. И помни про пробелы перед всеми словами, кроме первого.
Элементы должны добавляться в строку последовательно, начиная с самого первого элемента массива, заканчивая последним.
Массив с покупками записан в переменную groceries.
Строку со списком покупок записывай в переменную shoppingList.
*/
const groceries: string[] = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
let shoppingList: string = '';

shoppingList = groceries.join(', ');

/* Техническое задание
Мяу! Напиши программу getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.
Функция принимает на вход два параметра:
- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.
Названия параметров могут быть любыми.
Внутри функции надо сравнить два проекта: срочный и обычный.
Обрати внимание, что срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.
Функция getProfitableProject должна возвращать строку:
- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.
*/

const getPrice = function (hours: number, projectUrgency: boolean): number {
  let fixedRate: number = 1500;
  let endHours: number = hours;

  if (projectUrgency) {
    endHours = hours / 2;
    fixedRate *= 2.5;
  } else if (endHours > 150) {
    fixedRate -= 250;
  }
  return endHours * fixedRate;
};

const getProfitableProject = function (projectInHours: number, profit: number) {
  const urgentProject: number = getPrice(projectInHours, true) - profit;
  const unUrgentProject: number = getPrice(projectInHours, false);

  if (urgentProject < unUrgentProject) {
    return 'Выгодней срочный проект. Потратишь на него ' + urgentProject;
  } else {
    return 'Выгодней обычный проект. Потратишь на него ' + unUrgentProject;
  }
};

/* Техническое задание
Мяу! Напиши программу для определения типа транспорта на велосипедной парковке.
Оформи решение в виде функции checkVehicle с двумя параметрами: количество колёс у транспорта и вес этого транспорта. Названия параметров могут быть любыми.
Если колеса два и вес транспорта меньше 100 кг, это велосипед. Функция должна возвращать строку 'Парковка разрешена'.
В остальных случаях функция должна возвращать строку 'Вам здесь не место! Мяу!'.
*/
const checkVehicle = function (wheels: number, weight: number): string {
  if (wheels == 2 && weight < 100) {
    return 'Парковка разрешена';
  } else {
    return 'Вам здесь не место! Мяу!';
  }
};

/* Техническое задание
Мяу! Напиши функцию calculatePressure, которая будет считать давление на глубине и возвращать это значение из функции.
Формула расчёта такая: давление = плотность жидкости * ускорение свободного падения * глубина.
У calculatePressure должно быть два параметра: плотность жидкости и глубина. Названия параметров могут быть любыми.
Ускорение свободного падения записывать в параметры не нужно. В формуле можно использовать среднее фиксированное значение — 9.8.
Результат вычислений округляй с помощью Math.round.
*/
const calculatePressure = function (density: number, depth: number): number {
  return Math.round(density * 9.8 * depth);
};

/*
Напиши программу-переводчик.
Создай функцию translate с двумя параметрами.
Первый параметр — строка со словом на русском языке,которое нужно перевести на английский.
Второй параметр — объект с данными, в котором хранится перевод слов.
Функция должна возвращать строку вида: 'понедельник по-английски: monday'.
*/
const translate = function (rusWord: string, obj: { [key: string]: string }): string {
  return rusWord + ' по-английски: ' + obj.rusWord;
};
