// Задание 1

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(","); // получаем правильный хэш
    let result = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (result) { // если элемент найден
      console.log("Из кэша: " + result.value); // индекс известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + result.value;
    }

    let value = func(...args); // в кэше результата нет, нужно считать
    cache.push({ hash, value }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift() // если в кэше слишком много элементов, то удаляем самый старый (первый)
    }
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;
  }
  return wrapper;
}

// Задание 2

function debounceDecoratorNew(func, ms) {
  let flag = false;
  let timerId = null;

  function wrapper(...args) {
    if (!flag) {
      func(args);
      flag = true;
    }
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(args);
      flag = false;
    }, ms)
  }
  return wrapper;
}

// Задание 3

function debounceDecorator2(func, ms) {
  let flag = false;
  let timerId = null;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++
    if (!flag) {
      func(args);
      flag = true;
    }
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(args);
      flag = false;
    }, ms)
  }
  return wrapper;
}