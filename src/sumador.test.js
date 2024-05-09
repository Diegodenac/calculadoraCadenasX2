import stringCalculator from "./strCalculator.js";

describe("String Calculator", () => {
  it("it should return 0 when string is empty", () => {
    expect(stringCalculator("")).toEqual(0);
  });
});
