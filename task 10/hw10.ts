// Task 1
// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. Конструкт родительского класса принимает
// переменные марку авто и тип двигателя. Дочерние классы должны иметь методы выводящие максиальную скорость и цену на
// соответсвующие типы авто. Выводящий текст должен быть таким: This is <carName>.
// It has <engineType> engine and max speed equal to <maxSpeed>. Approximately cost of the car is <carCost>.
// (В задании используйте не только public модификатор, где это возможно).

class Car {
  constructor(protected carBrand: string, protected engineType: string) {
    this.carBrand = carBrand;
    this.engineType = engineType;
  }
}

class SportCar extends Car {
  constructor(
    protected carBrand: string,
    protected engineType: string,
    private readonly maxSpeed: number,
    private readonly carCost: number,
  ) {
    super(carBrand, engineType);
    this.maxSpeed = maxSpeed;
    this.carCost = carCost;
  }

  getTransportInfo() {
    return `This is ${this.carBrand}.It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximately cost of the car is ${this.carCost}.`;
  }
}

class LuxuryCar extends Car {
  constructor(
    protected carBrand: string,
    protected engineType: string,
    private readonly maxSpeed: number,
    private readonly carCost: number,
  ) {
    super(carBrand, engineType);
    this.maxSpeed = maxSpeed;
    this.carCost = carCost;
  }

  getTransportInfo() {
    return `This is ${this.carBrand}.It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximately cost of the car is ${this.carCost}.`;
  }
}

const ferrari = new SportCar("ferrari", "Auto", 350, 6700);
console.log(ferrari.getTransportInfo());

const maybach = new LuxuryCar("Mercedes", "Manual", 270, 20000);
console.log(maybach.getTransportInfo());

console.log("==========================================");

// Task 2
// Создайте два объекта людей. Реализуйте метод, который выводит строку My name is <name>.
// И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя.

class Human {
  personName: string;

  constructor(personName: string) {
    this.personName = personName;
  }

  sayName() {
    console.log(`My name is ${this.personName}.`);
  }
}

const person1 = new Human("Liudmila");
const person2 = new Human("Mikalai");

person1.sayName();
person2.sayName();

//or

const person3 = {
  personName: "Liuda",
};

const person4 = {
  personName: "Mikalai",
};

function sayMyName(this: any) {
  console.log(`My name is ${this.personName}.`);
}

sayMyName.call(person3);
sayMyName.call(person4);

console.log("==========================================");

// Task 3
// Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль.
// В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах.
// К примеру This car has 3 doors and this is left-hand drive car

const Car1 = {
  numberDoors: 3,
  wheelSide: "left-hand",
};

const Car2 = {
  numberDoors: 4,
  wheelSide: "right-hand",
};

function sayCarInfo(this: any) {
  console.log(`This car has ${this.numberDoors} doors and this is ${this.wheelSide} drive car.`);
}

sayCarInfo.apply(Car1);
const boundSayCarInfo = sayCarInfo.bind(Car2);

boundSayCarInfo();
console.log("==========================================");
