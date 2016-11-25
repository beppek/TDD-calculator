'use strict';

function Calculator() {

}

Calculator.prototype.add = function(numbers) {
    checkInputAreNumbers(numbers);
    var result = 0;
    numbers.forEach(function(num) {
        result += num;
    });
    return result;
};

Calculator.prototype.subtract = function(numbers) {
    checkInputAreNumbers(numbers);
    var result = numbers[0];
    var i;
    for (i = 1; i < numbers.length; i += 1) {
        result -= numbers[i];
    }
    return result;
};

Calculator.prototype.multiply = function(numbers) {
    checkInputAreNumbers(numbers);
    var result = numbers[0];
    var i;
    for (i = 1; i < numbers.length; i += 1) {
        result *= numbers[i];
    }
    return result;
};

Calculator.prototype.divide = function(numbers) {
    var result = numbers[0];
    var i;
    for (i = 1; i < numbers.length; i += 1) {
        result /= numbers[i];
    }
    return result;
};

function checkInputAreNumbers(numbers) {
    numbers.forEach(function(num) {
        if (isNaN(num)) {
            throw new TypeError("Input was not a number");
        }
    });
}

module.exports = Calculator;