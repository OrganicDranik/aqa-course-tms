// Task 1
function getSum(n: number): number {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result = result + i;
  }
  return result;
}
const result01 = getSum(100);
console.log(result01);

console.log("==========================================");

// Task 2
function creditSum(creditAmount: number): number {
  return ((17 * creditAmount) / 100) * 5;
}
const result = creditSum(100);
console.log(`Credit overpay: ${result}`);

console.log("==========================================");

// Task 3
function trimString(str: string, index1: number, index2: number) {
  return str.substring(index1, index2);
}
const result02 = trimString("Liudmila", 1, 5);
console.log(result02);

console.log("==========================================");

// Task 4
function getSumNumbers(num: number) {
  let result = 0;
  const numString = num.toString();
  const numStringArray = numString.split("");

  for (let i = 0; i < numStringArray.length; i++) {
    const number = +numStringArray[i];
    result = result + number;
  }
  return result;
}
console.log("task4: ", getSumNumbers(1234));

console.log("==========================================");

// Task 5
function sumOfRange(from: number, to: number): number {
  if (from === to) {
    return from;
  }
  if (from < to) {
    return getSumRange(from, to);
  } else {
    return getSumRange(to, from);
  }
}

function getSumRange(from: number, to: number): number {
  let value = from;
  let result = 0;

  while (value <= to) {
    result = result + value;
    value = value + 1;
  }
  return result;
}
const result05 = sumOfRange(-1, 2);
console.log(result05);

console.log("==========================================");

// Task 6
function fooboo(t: boolean, boo: () => void, foo: () => void): void {
  if (t) {
    foo();
  } else {
    boo();
  }
}
function foo(): void {
  console.log(foo.name);
}
function boo(): void {
  console.log(boo.name);
}
fooboo(false, boo, foo);

console.log("==========================================");

// Task 7
const result07 = (function (n: number) {
  let factorial = 1;
  if (n === 0) {
    return factorial;
  }
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
})(5);

console.log(result07);
