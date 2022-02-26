const numberToReversedDigits = number => {
    return number.toString().split('').reverse().map( e => parseInt(e) );
};

module.exports = numberToReversedDigits;
