// Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach((value: number) => {
  console.log(value);
});
function loggerFunction(value: number): void {
  console.log(value);
}
fibonacci.forEach(loggerFunction);

console.log("==========================================");

// Task 2
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
const formattedUsers = users.map((value: string, index: number) => {
  return `member ${index + 1}: ${value}`;
});
console.log(formattedUsers);
function formatUser(value: string, index: number): string {
  return `member ${index + 1}: ${value}`;
}
const formattedUsers2 = users.map(formatUser);
console.log(formattedUsers2);

console.log("==========================================");

// Task 3
const numbers = [7, -4, 32, -90, 54, 32, -21];
const filteredNumbers: number[] = numbers.filter((value: number) => {
  return value >= 0;
});
console.log(filteredNumbers);
function isPositiveNumber(value: number): boolean {
  return value >= 0;
}
const filteredNumbers2 = numbers.filter(isPositiveNumber);
console.log(filteredNumbers2);

console.log("==========================================");

// Task 4
const sum: number = fibonacci.reduce((accum: number, value: number) => {
  return accum + value;
}, 0);
console.log(sum);
function sumOfTwo(value1: number, value2: number): number {
  return value1 + value2;
}
const sum2: number = fibonacci.reduce(sumOfTwo, 0);
console.log(sum2);

console.log("==========================================");

// Task 5
const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const firstEvenNumber = numbers5.find((value: number) => {
  return value % 2 === 0;
});
console.log(firstEvenNumber);

console.log("==========================================");

// Task 6
const numbers6 = [1, 2, 3, 4, 5, 15];
const multipleValue: boolean = numbers6.some((value: number) => {
  return value % 3 === 0 && value % 5 === 0;
});
console.log(multipleValue);
function isMultiple(value: number): boolean {
  return value % 3 === 0 && value % 5 === 0;
}
const multipleValue2 = numbers6.some(isMultiple);
console.log(multipleValue2);

console.log("==========================================");

// Task 7
const numbers7 = [2, 8, 101];
const isEvenSum1 = numbers7.every((value) => isSumOfDigitsEven(value));
const isEvenSum2 = numbers7.every(isSumOfDigitsEven);

function getArraySum(digits: number[]): number {
  return digits.reduce((accum, currentValue) => {
    return accum + currentValue;
  }, 0);
}

function isSumOfDigitsEven(value: number): boolean {
  const square = Math.pow(value, 2);
  const digitsString = square.toString().split("");
  const digitNumbers = digitsString.map((value) => parseInt(value));
  const digitsSum = getArraySum(digitNumbers);

  return digitsSum % 2 === 0;
}

console.log(isEvenSum1);
console.log(isEvenSum2);

console.log("==========================================");

// Task 8
const ingredientsMap = new Map<string, number>([
  ["cucumber", 300],
  ["tomato", 200],
  ["salt", 10],
  ["sourCream", 110],
]);

ingredientsMap.forEach((value: number, key: string) => isNeededWeight(value, key));
ingredientsMap.forEach(isNeededWeight);

function isNeededWeight(value: number, key: string): void {
  if (value >= 100) {
    console.log(key, value);
  }
}
console.log("==========================================");

// Task 9
const numbers9 = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];
const mySet = new Set(numbers9);
console.log([...mySet]);

console.log("==========================================");

// Task 10
type MixedArray = Array<string | number>;
const array: MixedArray = [1];
function getArrayValues([_elem1, elem2 = "bbb", elem3 = "eee"]: MixedArray): { [key: string]: number | string } {
  return {
    elem2,
    elem3,
  };
}
const { elem2, elem3 } = getArrayValues(array);
console.log(elem2);
console.log(elem3);

console.log("==========================================");

// Task 11
type Person = {
  name?: string;
  surname?: string;
  age?: number | string;
};

const personObject = { age: "20 лет" };

function getValues({ name = "Аноном", surname = "Анонимович", age = "? лет" }): Person {
  return { name, surname, age };
}
const getValues2 = ({ name = "Аноном", surname = "Анонимович", age = "? лет" }): Person => ({ name, surname, age });

const object1 = getValues(personObject);
const object2 = getValues2(personObject);

console.log(object1);
console.log(object2);
