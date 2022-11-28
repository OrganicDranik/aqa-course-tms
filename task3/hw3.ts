// Task 1
const x = 20;
const y = 58;
const z = 42;
console.log(x + y + z);

console.log("==========================================");

// Task 2
const myAge = 33;
const secondsInMinute = 60;
const minuteInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;
const myAgeInSeconds = myAge * daysInYear * hoursInDay * minuteInHour * secondsInMinute;
console.log(myAgeInSeconds);

console.log("==========================================");

// Task 3
const count = 42;
const userName = "42";

const countString1 = String(count);
const countString2 = count.toString();
const countString3 = `${count}`;
const countString4 = "" + count;

console.log(`typeOf countString1 variable: `, typeof countString1);
console.log(`typeOf countString2 variable: `, typeof countString2);
console.log(`typeOf countString3 variable: `, typeof countString3);
console.log(`typeOf countString4 variable: `, typeof countString4);

const userNameNum1 = Number(userName);
const userNameNum2 = +userName;
const userNameNum3 = parseInt(userName);

console.log(`typeOf userNameNum1 variable: `, typeof userNameNum1);
console.log(`typeOf userNameNum2 variable: `, typeof userNameNum2);
console.log(`typeOf userNameNum3 variable: `, typeof userNameNum3);

console.log("==========================================");

// Task 4
const a = 1;
const b = 2;
const c = "белых медведей";
console.log(a.toString() + b.toString() + " " + c);

console.log("==========================================");

// Task 5
const name1 = "доступ";
const name2 = "морпех";
const name3 = "наледь";
const name4 = "попрек";
const name5 = "рубило";

const lengthWords: number = name1.length + name2.length + name3.length + name4.length + name5.length;
console.log(lengthWords);
console.log("==========================================");

// Task 6
const variable_1 = "text";
const variable_2 = 10;
const variable_3 = false;

console.log(`Variable: %variable1% have type: ${typeof variable_1}`);
console.log(`Variable: %variable2% have type: ${typeof variable_2}`);
console.log(`Variable: %variable3% have type: ${typeof variable_3}`);

// Task 7
const var1 = "true";
const var2 = false;
const var3 = 17;
const var4 = undefined;
const var5 = null;
console.log(typeof var1, typeof var2, typeof var3, typeof var4, typeof var5);

console.log("==========================================");

// Task 8
const height = 99;
const width = 2;
if (height > width) {
  console.log(height);
} else {
  console.log(width);
}
console.log("==========================================");
// Task 9
for (let i = 1; i < 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
console.log("==========================================");
// Task 10
const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;
const shouldGoToWork = key && documents && pen && (apple || orange);
if (shouldGoToWork) {
  console.log("you can go to work");
} else {
  console.log("you can't go to work");
}
console.log("==========================================");
// Task 11
const myNumber = 20;
if (myNumber % 3 === 0 && myNumber % 5 === 0) {
  console.log("FizBuz");
} else if (myNumber % 3 === 0) {
  console.log("Buz");
} else if (myNumber % 5 === 0) {
  console.log("Fiz");
}
console.log("==========================================");

// Task 12
const userAge = 33;
if (userAge >= 18) {
  console.log("Попей пивка");
} else if (userAge >= 16) {
  console.log("Можешь выкурить сигаретку, только маме не говори");
} else {
  console.log("Пей колу");
}
console.log("==========================================");

// Task 13
const wishCountry = "север";

switch (wishCountry) {
  case "юг":
    console.log("на юг пойдешь счастье найдешь");
    break;
  case "север":
    console.log("на север пойдешь много денег найдешь");
    break;
  case "запад":
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case "восток":
    console.log("восток на восток пойдешь разработчиком станешь");
    break;
  default:
    console.log("попробуй еще раз");
}
console.log("==========================================");
// ADVANCED level, Task 1
let value1 = 4;
let value2 = 3;
console.log(value1, value2);
value1 = value1 + value2;
value2 = value1 - value2;
value1 = value1 - value2;
console.log(value1, value2);
console.log("==========================================");
// ADVANCED level, Task 2
for (let i = 1; i <= 6; i++) {
  console.log("#".repeat(i));
}
