// Task 1

export class Car {
  constructor(protected manufacturer: string, protected maxSpeed: number) {}

  public isCarFast(): boolean {
    if (this.maxSpeed > 200) {
      return true;
    } else if (this.maxSpeed > 50) {
      return false;
    } else {
      throw new Error("It is not even a car!");
    }
  }
}
