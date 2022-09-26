/* eslint-disable @typescript-eslint/no-inferrable-types */ // отменить eslint правило в рамках этого файла

/* Техническое задание
Мяу! Выручай! Мне нужно посчитать, каким способом я доберусь быстрее всего.
Средняя скорость транспорта находится в переменной averageSpeed и записана в километрах в час.
Расстояние записано в переменную routeDistance и указано в милях. Поэтому сначала нужно перевести его в километры.
В одной миле содержится 1.6 километров.
Посчитай сколько времени займёт поездка и запиши результат в переменную routeTime.
Округляй результат с помощью Math.round.
*/
const routeDistance: number = 78;
const averageSpeed: number = 80;
const routeTime: number = Math.round((routeDistance * 1.6) / averageSpeed);

/* Техническое задание
Мяу! Напиши программу, которая будет переводить градусы Фаренгейта в температуру по Цельсию.
В переменной fahrenheitTemperature указаны градусы по Фаренгейту.
Формула расчёта выглядит так: Tc = 5/9 * (Tf - 32).
Результат вычислений запиши в переменную celsiusTemperature.
*/
const fahrenheitTemperature: number = 77;
const celsiusTemperature: number = (5 / 9) * (fahrenheitTemperature - 32);

/* Техническое задание
Мяу! Помоги мне посчитать ИМТ и процент жира в организме.
Моя длина записана в переменную length и указана в метрах.
Вес указан в килограммах и хранится в переменной weight.
Рассчитывай ИМТ по формуле: i = вес / длина ^ 2 (вес делить на длину в квадрате). Результат округляй с помощью Math.round и записывай в переменную bodyMassIndex.
Масса жира записана в переменную fatMass и указана в килограммах.
Чтобы найти процент жира, дели массу жировой ткани на вес. Результат умножай на 100, чтобы получить процент, округляй с помощью Math.round и записывай в переменную fatPercent.
*/
const lengthCat: number = 0.55;
const weightCat: number = 5;
const fatMass: number = 0.8;

const bodyMassIndex: number = Math.round(weightCat / Math.pow(lengthCat, 2));
const fatPercent: number = Math.round((fatMass / weightCat) * 100);

/* Техническое задание
Мяу! Напиши программу, которая будет рассчитывать сумму покупки с учётом скидки.
Стоимость записана в переменную price.
Если стоимость покупки от 1000 (включительно) до 3000 (не включая это значение), скидка составляет 5%.
Если стоимость покупки от 3000 (включительно) до 5000 (не включая это значение), скидка 10%.
Если стоимость покупки от 5000 (включительно) и выше, скидка 15%.
В остальных случаях скидки для покупателей нет.
Вычисляй стоимость с учётом скидки и записывай результат в переменную
discountedPrice.
*/
const price: number = 4000;
let discountedPrice: number;

if (price >= 1000 && price < 3000) {
  discountedPrice = price - (price * 5) / 100;
} else if (price >= 3000 && price < 5000) {
  discountedPrice = price - (price * 10) / 100;
} else if (price >= 5000) {
  discountedPrice = price - (price * 15) / 100;
} else {
  discountedPrice = price;
}

/* Техническое задание
Мяу! Напиши программу, которая определит ближайшее работающее место с молоком.
Время записано в часах в переменную time.
Молокозавод находится ближе всех. Он начинает работать в 8, а закрывается в 19. Перерыв на обед с 13 до 14.
Дальше находится магазин. Он работает с 9 до 17. Перерыв на обед с 14 до 15.
Дальше всех находится рынок. Он работает с 7 до 20 без перерывов.
В остальное время все места закрыты и можно никуда не ходить.
Вычисли, куда надо пойти за молоком и запиши значение true в одну из переменных: goToDairy (молокозавод), goToStore (магазин), goToMarket (рынок).
*/
const time: number = 15;
let goToDairy: boolean = false;
let goToStore: boolean = false;
let goToMarket: boolean = false;

if ((time >= 8 && time < 13) || (time >= 14 && time < 19)) {
  goToDairy = true;
} else if ((time >= 9 && time < 14) || (time >= 15 && time < 17)) {
  goToStore = true;
} else if (time >= 7 && time < 20) {
  goToMarket = true;
}

/* Техническое задание
Напиши программу, которая определяет сколько цифр в одном числе.
Само число записано в переменную number.
Найди количество цифр в этом числе и запиши результат в переменную quantity.
*/
let numberInput: number = 123;
let quantityFind: number = 0;
while (numberInput >= 1) {
  numberInput /= 10;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  quantityFind++;
}
