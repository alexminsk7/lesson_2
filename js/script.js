'use strict';

// объявление переменной money
let myMoney = +prompt("Ваш бюджет на месяц ?", '');

// объявление переменной time
let myTime = prompt("Введите дату в формате YYYY-MM-DD", '');

// создаем объект
let appData = {
   moneyData: myMoney,
   timeData: myTime,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};

// создаем цикл с вопросами для пользователя
for (let i = 0; i < 2; i++) {
   let a = prompt('Какая статья расходов?', '');
   let b = +prompt('Во сколько обойдется?', '');

   if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
      && a != '' && b != '' && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;

   } else {
      i--;
   }

};

// через while  
// let i = 0;
// while (i < 2) {
//    let a = prompt('Какая статья расходов?', '');
//    let b = +prompt('Во сколько обойдется?', '');
//    i++;

//    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//       a != '' && b != '' && a.length < 50) {
//       console.log('done');
//       appData.expenses[a] = b;

//    } else {
//       i--;
//    }
// 
// };

// через do while
// let i = 0;
// do {
//    let a = prompt('Какая статья расходов?', '');
//    let b = +prompt('Во сколько обойдется?', '');
//    i++;

//    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//       a != '' && b != '' && a.length < 50) {
//       console.log('done');
//       appData.expenses[a] = b;

//    } else {
//       i--;
//    }
// } while (i < 2);

appData.moneyPerDay = appData.moneyData / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
   console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
   console.log('Высокий уровень достатка');
} else {
   console.log('Произошла ошибка');
}