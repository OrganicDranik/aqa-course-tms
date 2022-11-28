// #1 Mocha
import assert from "assert";
import { Calculator } from "../calculator/calculator";
import { expect } from "chai";

describe("Mocha: calculator tests", () => {
  const instance = new Calculator();
  const a = 2;
  const b = 1;

  describe("Addition", () => {
    it("positive", () => {
      assert.equal(instance.add(a, b), 3, "Result is correct");
    });

    it("negative", () => {
      assert.notEqual(instance.add(a, b), 4, "Result is incorrect");
    });
  });

  describe("Subtract", () => {
    it("positive", () => {
      assert.equal(instance.subtract(a, b), 1, "Result is correct");
    });

    it("negative", () => {
      assert.notEqual(instance.subtract(a, b), 4, "Result is incorrect");
    });
  });

  describe("Multiply", () => {
    it("positive", () => {
      assert.equal(instance.multiply(a, b), 2, "Result is correct");
    });

    it("negative", () => {
      assert.notEqual(instance.multiply(a, b), 3, "Result is incorrect");
    });
  });

  describe("Divide", () => {
    it("positive", () => {
      assert.equal(instance.divide(a, b), 2, "Result is correct");
    });

    it("negative", () => {
      assert.notEqual(instance.divide(a, b), 3, "Result is incorrect");
    });
  });

  describe("Pow", () => {
    it("positive", () => {
      assert.equal(instance.pow(a, b), 2, "Result is correct");
    });

    it("negative", () => {
      assert.notEqual(instance.pow(a, b), 3, "Result is incorrect");
    });
  });
});

//#2 Chai

describe("Chai: calculator tests", function () {
  const instance = new Calculator();
  const c = 12;
  const d = 3;

  describe("Addition", () => {
    it("positive", () => {
      expect(instance.add(c, d)).to.equal(15);
    });

    it("negative", () => {
      expect(instance.add(c, d)).to.not.equal(16);
    });
  });

  describe("Subtract", () => {
    it("positive", () => {
      expect(instance.subtract(c, d)).to.equal(9);
    });

    it("negative", () => {
      expect(instance.subtract(c, d)).to.not.equal(10);
    });
  });

  describe("Multiply", () => {
    it("positive", () => {
      expect(instance.multiply(c, d)).to.equal(36);
    });

    it("negative", () => {
      expect(instance.multiply(c, d)).to.not.equal(37);
    });
  });

  describe("Divide", () => {
    it("positive", () => {
      expect(instance.divide(c, d)).to.equal(4);
    });

    it("negative", () => {
      expect(instance.divide(c, d)).to.not.equal(5);
    });
  });

  describe("Pow", () => {
    it("positive", () => {
      expect(instance.pow(c, d)).to.equal(1728);
    });

    it("negative", () => {
      expect(instance.pow(c, d)).to.not.equal(1729);
    });
  });
});
