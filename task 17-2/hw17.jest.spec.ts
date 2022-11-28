// #3 Jest
import { Calculator } from "../calculator/calculator";

describe("Jest: calculator tests", function () {
  const instance = new Calculator();
  const e = 12;
  const f = 3;

  describe("Addition", () => {
    test("positive", () => {
      expect(instance.add(e, f)).toBe(15);
    });
    test("negative", () => {
      expect(instance.add(e, f)).not.toBe(16);
    });
  });

  describe("Subtract", () => {
    test("positive", () => {
      expect(instance.subtract(e, f)).toBe(9);
    });
    test("negative", () => {
      expect(instance.subtract(e, f)).not.toBe(10);
    });
  });

  describe("Multiply", () => {
    test("positive", () => {
      expect(instance.multiply(e, f)).toBe(36);
    });
    test("negative", () => {
      expect(instance.multiply(e, f)).not.toBe(37);
    });
  });

  describe("Divide", () => {
    test("positive", () => {
      expect(instance.divide(e, f)).toBe(4);
    });
    test("negative", () => {
      expect(instance.divide(e, f)).not.toBe(5);
    });
  });

  describe("Pow", () => {
    test("positive", () => {
      expect(instance.pow(e, f)).toBe(1728);
    });
    test("negative", () => {
      expect(instance.pow(e, f)).not.toBe(1729);
    });
  });
});
