'use strict';

function Calculator() {

}

Calculator.prototype.add = function(numbers) {
    var result = 0;
    numbers.forEach(function(num) {
        if (isNaN(num)) {
            throw new TypeError("Input was not a number");
        }
        result += num;
    });
    return result;
};

Calculator.prototype.subtract = function(a, b) {

};

Calculator.prototype.multiply = function(a, b) {

};

Calculator.prototype.divide = function(a, b) {

};

module.exports = Calculator;