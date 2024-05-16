import addNumbersIn from "./strCalculator.js";

describe("String Calculator", () => {
  it("it should return 0 when string is empty", () => {
    expect(addNumbersIn("")).toEqual(0);
  });
  it("it should return the number when string has a number, (1)=>1", () => {
    expect(addNumbersIn("1")).toEqual(1);
  });
  it("it should return the sum of two numbers when string has two numbers splited by ',' (1,2)=>3", () => {
    expect(addNumbersIn("1,2")).toEqual(3);
  });
  it("it should return the sum of many numbers when string has numbers splited by ',' (1,2,3,4)=>10", () => {
    expect(addNumbersIn("1,2,3,4")).toEqual(10);
  });
  it("it should return the sum of many numbers when string has numbers splited by ',' or '-' (1-2,3-4)=>10", () => {
    expect(addNumbersIn("1-2,3-4")).toEqual(10);
  });
  it("it should return the sum of many numbers when string has numbers splited by ',' or '-' or is an specific char in a comando (//[;] 1,2,3-4;5;6)=>21", () => {
    expect(addNumbersIn("//[;] 1,2,3-4;5;6")).toEqual(21);
  });
  it("it should ignore numbers bigger than 1000 for the sum (//[;] 1,2,3-4;1001,5;6)=>21", () => {
    expect(addNumbersIn("//[;] 1,2,3-4;1001,5;6")).toEqual(21);
  });
});
