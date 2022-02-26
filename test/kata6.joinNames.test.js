const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const names1 = [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}];
    const names2 = [{name: 'Fred'},{name: 'Wilma'},{name: 'Pebbles'},{name: 'Baby Puss'},{name: 'Grandma Pearl'},{name: 'Uncle Tex'}];
    expect(joinNames(names1)).toEqual('Bart, Lisa & Maggie');
    expect(joinNames(names2)).toEqual('Fred, Wilma, Pebbles, Baby Puss, Grandma Pearl & Uncle Tex');
  });
});
