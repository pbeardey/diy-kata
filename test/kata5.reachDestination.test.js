const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(45,10)).toEqual('I should be there in 4.5 hours.');
    expect(reachDestination(55,10)).toEqual('I should be there in 5.5 hours.');
  });
  
  it("returns string with estimated time of arrival rounded up to nearest 0.5", () => {
    expect(reachDestination(44,10)).toEqual('I should be there in 4.5 hours.');
    expect(reachDestination(48,10)).toEqual('I should be there in 5 hours.');
  });
});
