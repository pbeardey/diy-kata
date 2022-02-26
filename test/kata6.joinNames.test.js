const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])).toEqual('Bart, Lisa & Maggie');
    expect(joinNames([{name: 'Fred'},{name: 'Wilma'},{name: 'Pebbles'},{name: 'Baby Puss'},{name: 'Grandma Pearl'},{name: 'Uncle Tex'}])).toEqual('Fred, Wilma, Pebbles, Baby Puss, Grandma Pearl & Uncle Tex');
  });
});
