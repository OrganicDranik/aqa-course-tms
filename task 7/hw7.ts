// Task 1
const colours = ["red", "green", "blue"];
console.log(colours.length);

console.log("==========================================");

//Task 2
const animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]);

console.log("==========================================");

//Task 3
const numbers1 = [5, 43, 63, 23, 90];
const numbers2 = [5, 43, 63, 23, 90];
console.log(numbers1.splice(0));
console.log(numbers1);
numbers2.length = 0;
console.log(numbers2);

console.log("==========================================");

//Task 4
const students = ["Polina", "Dasha", "Masha"];
students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);

console.log("==========================================");

//Task 5
const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
for (const item of cats) {
  console.log(item);
}
console.log("==========================================");

//Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const res = evenNumbers.concat(oddNumbers);
console.log(res);
console.log(res.indexOf(8));

console.log("==========================================");

//Task 7
const binary = [0, 0, 0, 0];
const partBinary1 = binary.slice(0, 1);
partBinary1.push(1);
const partBinary2 = binary.slice(2, 3);
partBinary2.push(1);
const partBinary3 = binary.slice(2, 3);
partBinary3.push(1);
const partBinary4 = binary.slice(binary.length - 1);
const check = partBinary1.concat(partBinary2, partBinary3, partBinary4);
const check2 = check.join("");
console.log(check2);

console.log("==========================================");

// ADVANCED task 1
function isPalindrome1(entry1: string) {
  const entry2 = entry1.split("").reverse().join("");
  return entry1 === entry2;
}
const isPalindrome = isPalindrome1("tenet");
console.log(isPalindrome);

function isPalindrome2(word: string): boolean {
  let isPalindrome = true;
  const wordArray = word.toLowerCase().split("");

  for (let index = 0; index < wordArray.length / 2; index++) {
    if (wordArray[index] !== wordArray[wordArray.length - index - 1]) {
      isPalindrome = false;
    }
  }

  return isPalindrome;
}
console.log(isPalindrome2("abba"));

console.log("==========================================");

// ADVANCED task 2
const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

function getAverageMatrix(matrix: number[][]): number[] {
  const result: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = getAverageNumber(matrix[i]);
  }
  return result;
}

function getAverageNumber(subArray: number[]): number {
  let sumOfSubArray = 0;
  for (let i = 0; i < subArray.length; i++) {
    sumOfSubArray += subArray[i];
  }
  return sumOfSubArray / subArray.length;
}

const averageNumbers = getAverageMatrix(matrix);
console.log(averageNumbers);

console.log("==========================================");

// ADVANCED task 3
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
const positiveNumbers = mixedNumbers.filter((number) => number >= 0);
const negativeNumbers = mixedNumbers.filter((number) => number < 0);
console.log(positiveNumbers);
console.log(negativeNumbers);

console.log("==========================================");

// ADVANCED task 4
const emptyArray = Array(5);

const randomNumbers: number[] = [];
for (let i = 0; i < emptyArray.length; i++) {
  randomNumbers[i] = Math.round(Math.random() * 100);
}
console.log(randomNumbers);

const powNumbers: number[] = [];
for (let i = 0; i < randomNumbers.length; i++) {
  powNumbers[i] = Math.pow(randomNumbers[i], 3);
}
console.log(powNumbers);
