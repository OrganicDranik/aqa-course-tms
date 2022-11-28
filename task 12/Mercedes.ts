import { Car } from "./Car";

export class Mercedes extends Car {
  constructor(protected manufacturer = "Mercedes", protected maxSpeed: number) {
    super(manufacturer, maxSpeed);
  }

  turn(turnLightOn: boolean) {
    if (turnLightOn) {
      console.log("Turn!");
    } else {
      throw new Error("Cannot turn without turn light on!!!");
    }
  }
}
