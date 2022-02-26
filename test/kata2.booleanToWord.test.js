const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it ('When passed TRUE it retuns Yes', () => {
    expect(booleanToWord(true)).toBe('Yes');
  })
  it ('When passed FALES it retuns No', () => {
    expect(booleanToWord(false)).toBe('No');
  })
});
