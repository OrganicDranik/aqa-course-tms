class Calculator {
  getAddition(a: number, b: number) {
    return a + b;
  }
  getSubtraction(a: number, b: number) {
    return a - b;
  }
  getMultiply(a: number, b: number) {
    return a * b;
  }
  getDivide(a: number, b: number) {
    return a / b;
  }
  getPower(a: number, b: number) {
    return Math.pow(a, b);
  }
}
const calculator = new Calculator();

console.log(calculator.getAddition(2, 3) === 5 ? "Addition is passed" : "Addition is failed");
console.log(calculator.getAddition(2, 3) === 4 ? "Addition is passed" : "Addition is failed");

console.log(calculator.getSubtraction(3, 2) === 1 ? "Subtraction is passed" : "Subtraction is failed");
console.log(calculator.getSubtraction(3, 2) === 2 ? "Subtraction is passed" : "Subtraction is failed");

console.log(calculator.getMultiply(2, 3) === 6 ? "Multiply is passed" : "Multiply is failed");
console.log(calculator.getMultiply(2, 3) === 5 ? "Multiply is passed" : "Multiply is failed");

console.log(calculator.getDivide(3, 2) === 1.5 ? "Divide is passed" : "Divide is failed");
console.log(calculator.getDivide(3, 2) === 2 ? "Divide is passed" : "Divide is failed");

console.log(calculator.getPower(2, 3) === 8 ? "Power is passed" : "Power is failed");
console.log(calculator.getPower(2, 3) === 10 ? "Power is passed" : "Power is failed");
