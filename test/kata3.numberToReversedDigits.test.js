const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    //expect(numberToReversedDigits(123)).toEqual([3,2,1]);
    //expect(numberToReversedDigits(1)).toEqual([1]);
    expect(numberToReversedDigits(9823)).toEqual([3,2,8,9]);
  });
});
