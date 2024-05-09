import stringCalculator from "./strCalculator.js";

describe("String Calculator", () => {
  it("it should return 0 when string is empty", () => {
    expect(stringCalculator("")).toEqual(0);
  });
  it("it should return the number when string has a number, (1)=>1", () => {
    expect(stringCalculator("1")).toEqual(1);
  });
});
