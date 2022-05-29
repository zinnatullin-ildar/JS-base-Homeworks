// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
avg = (sum / arr.length).toFixed(2);
return { min: min, max: max, avg: +avg }
}


// Задание 2
function worker(arr) {
  let value = 0;
  let sum = arr.reduce(function (a, b) {
    return a + b;
  }, value);
  return sum;
}

function makeWork(arrOfArr, func) {
let max = func(arrOfArr[0]);
  for (i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i])
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  return Math.abs(Math.max(...arr) - Math.min(...arr))
}