'use strict';

var nums = require('./helpers/numbers');

function Calculator() {

}

Calculator.prototype.add = function(numbers) {
    nums.checkAreNumbers(numbers);
    var result = 0;
    numbers.forEach(function(num) {
        result += num;
    });
    return result;
};

Calculator.prototype.subtract = function(numbers) {
    nums.checkAreNumbers(numbers);
    var result = numbers[0];
    var i;
    for (i = 1; i < numbers.length; i += 1) {
        result -= numbers[i];
    }
    return result;
};

Calculator.prototype.multiply = function(numbers) {
    nums.checkAreNumbers(numbers);
    var result = numbers[0];
    var i;
    for (i = 1; i < numbers.length; i += 1) {
        result *= numbers[i];
    }
    return result;
};

Calculator.prototype.divide = function(numbers) {
    nums.checkAreNumbers(numbers);
    var result = numbers[0];
    var i;
    for (i = 1; i < numbers.length; i += 1) {
        result /= numbers[i];
    }
    return result;
};

module.exports = Calculator;