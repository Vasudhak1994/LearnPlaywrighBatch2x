class calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }
    sub() {
        return this.num1 - this.num2;
    }
    multiplication() {
        return this.num1 * this.num2;
    }
    division() {
        return this.num1 / this.num2;
    }
}

const calc = new calculator(10, 5);
console.log("Numbers taken for calculation:", calc.num1, "and", calc.num2);
console.log("Addition:", calc.add());
console.log("Subtraction:", calc.sub());
console.log("Multiplication:", calc.multiplication());
console.log("Division:", calc.division());
