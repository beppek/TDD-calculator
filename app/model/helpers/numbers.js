'use strict';

module.exports = {
    checkPositive: checkPositive,
    checkAreNumbers: checkAreNumbers
};

function checkPositive(numbers) {
    numbers.forEach(function(number) {
        if (number < 0) {
            throw new Error("Input can't be a negative number");
        }
    });
}

function checkAreNumbers(numbers) {
    numbers.forEach(function(num) {
        if (isNaN(num)) {
            throw new TypeError("Input was not a number");
        }
    });
}