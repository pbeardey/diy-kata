const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(12)).toEqual('Fizz');
    expect(fizzBuzz(102)).toEqual('Fizz');
    expect(fizzBuzz(3003)).toEqual('Fizz');
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(20)).toEqual('Buzz');
    expect(fizzBuzz(55)).toEqual('Buzz');
    expect(fizzBuzz(5000)).toEqual('Buzz');
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
    expect(fizzBuzz(150)).toEqual('FizzBuzz');
    expect(fizzBuzz(150)).toEqual('FizzBuzz');
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toEqual(4);
    expect(fizzBuzz(13)).toEqual(13);
    expect(fizzBuzz(34)).toEqual(34);
    expect(fizzBuzz(401)).toEqual(401);
  });
});
