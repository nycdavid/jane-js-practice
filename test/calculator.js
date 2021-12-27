import { describe } from "mocha";
import { expect } from "chai";
import {
  add,
  subtract,
  multiply,
  divide
} from "../calculator.js";

describe("Calculator", () => {
  describe("add", () => {
    it("adds 2 numbers together", () => {
      const x = 5
      const y = 10

      const result = add(x, y);

      expect(result).to.equal(15)
    });
  });

  describe("subtract", () => {
    it("subtracts 2 numbers", () => {
      const x = 100;
      const y = 75;

      const result = subtract(100, 75);

      expect(result).to.equal(25);
    });
  });

  describe("multiply", () => {
    it("multiplies 2 numbers", () => {
      const x = 20;
      const y = 10;

      const result = multiply(20, 10);

      expect(result).to.equal(200);
    });
  });

  describe("divide", () => {
    it("divides 2 numbers", () => {
      const x = 50;
      const y = 2;

      const result = divide(50, 2);

      expect(result).to.equal(25);
    });
  });
});