const { TestScheduler } = require("jest");
const { humanCatDogYears } = require("../src");

describe ("humanCatDogYears", () => {
    test('takes an age in human years of 1 and returns an array of human age 1, cat age 15 and dog 15', () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);

    });
    test('takes an age in human years of 2 and returns an array of human age 2, cat age 24 and dog 24', () => {
        expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    });
    test('takes an age in human years and returns an array [human years, cat years, dog years]', () => {
        expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    });
});
// Look Ma, no handlebars!!!
