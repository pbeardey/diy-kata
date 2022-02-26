const humanCatDogYears = number => {
    if (number === 1) {return [1,15,15];}
    else if (number === 2) {return [2,24,24];}
    else if (number > 2) {
        const twoLess = number - 2;
        const catAge = 24 + twoLess * 4;
        const dogAge = 24 + twoLess * 5;
        return [ number, catAge, dogAge ];
    }
};

module.exports = humanCatDogYears;
