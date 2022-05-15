"use strict"

// Задача №1

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;

  if (D === 0) {
    arr.push(-b / (2 * a));
  } else if (D > 0) {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  }
  return arr;
}


// Задача №2

function monthTotal(dateFrom, dateTo) {
  let diff = dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
  return (diff <= 0) ? 1 : diff;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0;
  if (isNaN(parseFloat(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  else if (isNaN(parseFloat(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  else if (isNaN(parseFloat(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  else if (!(date instanceof Date)) {
    return `"Срок ипотеки" содержит неправильное значение "${date}"`;
  } else {
    let debtAmount = amount - contribution;
    let P = (percent / 100) / 12;
    let now = new Date();
    let creditTerm = monthTotal(now, date);
    let monthlyPayment = debtAmount * (P + (P / (Math.pow((1 + P), creditTerm) - 1)));

    totalAmount = +(monthlyPayment * creditTerm).toFixed(2);
    console.log(`Сумма по кредиту составила: ${totalAmount} рублей`);

    return totalAmount;
  }
}