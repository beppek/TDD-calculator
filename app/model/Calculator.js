'use strict';

function Calculator() {

}

Calculator.prototype.add = function(numbers) {
    var result = 0;
    checkInputAreNumbers(numbers);
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

Calculator.prototype.multiply = function(a, b) {

};

Calculator.prototype.divide = function(a, b) {

};

function checkInputAreNumbers(numbers) {
    numbers.forEach(function(num) {
        if (isNaN(num)) {
            throw new TypeError("Input was not a number");
        }
    });
}

module.exports = Calculator;