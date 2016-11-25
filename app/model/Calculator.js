'use strict';

function Calculator() {

}

Calculator.prototype.add = function(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new TypeError("Input was not a number");
    }
    return a + b;
};

Calculator.prototype.subtract = function(a, b) {

};

Calculator.prototype.multiply = function(a, b) {

};

Calculator.prototype.divide = function(a, b) {

};

module.exports = Calculator;