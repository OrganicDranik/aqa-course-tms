// task 1
const str1 = "Привет, Людмила Жвачкина!";
const repeated1 = str1.repeat(5).toLowerCase();
const repeated2 = str1.repeat(5).toUpperCase();
console.log(repeated1);
console.log(repeated2);
console.log("==========================================");

// task 2
const str2 = "я учу typescript";
const substring = "учу";
const substringPosition = str2.indexOf(substring);
if (substringPosition) {
  console.log(substringPosition);
} else {
  console.log("Данной подстроки нет");
}
console.log("==========================================");

// task 3
const str3 = "My name is Liudmila!";
const charPosition = 5;
if (charPosition > str3.length - 1) {
  console.log("Вы вышли за границу строки");
} else {
  console.log(str3[charPosition]);
}
console.log("==========================================");

// task 4
const task4 = "My name is Liuda!";
if (task4.endsWith(".")) {
  console.log("Данное предложение закончено");
} else {
  console.log("В конце предложения не хватает точки");
}
console.log("==========================================");

// task 5
const str5 = "я учу typescript!";
const result1 = str5.slice(2, 6);
const result2 = str5.substring(6, 15);

console.log(result1);
console.log(result2);
console.log("==========================================");

// task 6
const str6 = "я учу typescript!";
console.log(str6.split(" "));
console.log("==========================================");

// task 7
const str7 = " я учу typescript! ";
console.log(str7.trim());
console.log("==========================================");

// task 8
const str8 = 8.829734872948;
console.log(str8.toFixed(3));
console.log("==========================================");

// task 9
const str9 = "5.80";
if (Number.isInteger(str9)) {
  console.log(str9);
} else {
  console.log(Number.parseInt(str9));
}
console.log("==========================================");

// task 10
const str10 = 9.81;
console.log(Math.floor(str10));
console.log(Math.ceil(str10));
console.log(Math.round(str10));
console.log("==========================================");

// task 11
const str11 = 5;
console.log(Math.pow(str11, 2));
console.log("==========================================");

// task 12
const min12 = Math.ceil(1.5);
const max12 = Math.floor(9.08);
const result12 = Math.floor(Math.random() * (max12 - min12) + min12);
console.log(result12);
console.log("==========================================");

// task 13
const min13 = Math.ceil(2.1);
const max13 = Math.floor(7.56);
const result13 = Math.random() * (max13 - min13) + min13;
console.log(result13);
console.log("==========================================");

// task 14
const date = new Date();
const result14 = `Текущая дата: ${date.getMonth()}/${date.getFullYear()}/${date.getDate()}. Текущее время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.`;
console.log(result14);
