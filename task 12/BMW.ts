import { Car } from "./Car";

export class BMW extends Car {
  constructor(protected manufacturer = "BMW", protected maxSpeed: number) {
    super(manufacturer, maxSpeed);
  }

  turn(turnLightOn: boolean) {
    if (turnLightOn) {
      console.log("Turn!");
    } else {
      console.log("Who cares! Turn!");
    }
  }
}
