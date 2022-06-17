// Задание 1

function parseCount(value) {
    let parseResult = Number.parseInt(value);
    if (isNaN(parseResult)) {
        throw new Error('Невалидное значение');
    } else {
        return parseResult;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

// let parse = parseCount(123);
// console.log(parse);

// let parse2 = parseCount('Hello');
// console.log(parse2);

// Задание 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
    }

    getPerimeter() {
        return Object.values(this).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(...arguments);
    } catch (error) {
        return {
            getArea() {
                return ('Ошибка! Треугольник не существует');
            },
            getPerimeter() {
                return ('Ошибка! Треугольник не существует');
            }
        }
    }
}
// console.log(getTriangle(3, 5, 7))