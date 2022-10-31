import { Mercedes } from "./Mercedes";
import { BMW } from "./BMW";

const mercedes = new Mercedes("", 150);
const bmw = new BMW("", 250);
const oldBmw = new BMW("", 49);

console.log(mercedes);
console.log(bmw);
console.log(oldBmw);

try {
  console.log(mercedes.isCarFast());
  console.log(bmw.isCarFast());
  oldBmw.isCarFast();
} catch (e) {
  console.log(e);
}

try {
  bmw.turn(true);
  bmw.turn(false);
  mercedes.turn(true);
  mercedes.turn(false);
} catch (e) {
  console.log(e);
}
