// Task #1
const MyObject01: { name?: string; age?: number } = {
  name: "Liudmila",
  age: 18,
};
console.log(MyObject01);

delete MyObject01.name;
console.log(MyObject01);

delete MyObject01.age;
console.log(MyObject01);

console.log("==========================================");

// Task #2
const MyObject02: { country: string; city: string } = {
  country: "Belarus",
  city: "Minsk",
};
console.log("country" in MyObject02);

console.log("==========================================");

// Task #3
const student: any = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (const studentKeys in student) {
  console.log(`studentKeys ====> ${studentKeys} studentValues ====> ${student[studentKeys]}`);
}

console.log("==========================================");

// Task #4
const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
console.log(colors["ru pum pu ru rum"]["red"]);
console.log(colors["ru pum pu ru rum"]["blue"]);

console.log("==========================================");

// Task #5
const salaries = {
  andrey1: 500,
  sweta: 413,
  anton: 987,
  andrey2: 664,
  alexandra: 199,
  bogdan: 999,
};

function getAverageSalary(salaries: { [key: string]: number }): number {
  let salariesSum = 0;
  const salaryObjectEntries = Object.entries(salaries);
  for (const [_key, value] of salaryObjectEntries) {
    salariesSum += value;
  }

  return salariesSum / salaryObjectEntries.length;
}

const averageSalary = getAverageSalary(salaries);
console.log(averageSalary);

console.log("==========================================");

// Task #6
const validator = {
  login: "",
  password: "",

  register: function (login: string, password: string): void {
    this.login = login;
    this.password = password;
  },
  validate: function (login: string, password: string): void {
    if (login === this.login && password === this.password) {
      console.log("Добро пожалоВать");
    } else {
      console.log("Попробуй еще раз!");
    }
  },
};

validator.register("Liudmila", "2022");
validator.validate("Liudmila", "2022");
validator.validate("Liudmila", "2021");

console.log("==========================================");

// Advanced Task #2
declare type Student = {
  name: string;
  age: number;
};

const student1: Student = {
  name: "Polina",
  age: 27,
};

const student2: Student = {
  name: "Polina",
  age: 27,
};

function isEqual(student1: Student, student2: Student) {
  if (JSON.stringify(student1) === JSON.stringify(student2)) {
    console.log("True");
  } else {
    console.log("False");
  }
}

isEqual(student1, student2);

console.log("==========================================");

// Advanced Task #3
type catType = {
  name: string;
  age: number;
};

const cat1: catType = {
  name: "Енчик",
  age: 3,
};

const cat2 = JSON.parse(JSON.stringify(cat1));
const cat3 = Object.assign({}, cat1);

cat1.name = "new name 0";
cat2.name = "new name 1";
cat3.name = "new name 2";

console.log(cat1);
console.log(cat2);
console.log(cat3);
