'use strict';

var Calculator = require('./Calculator');

var c;

function UnitConverter() {
    c = new Calculator();
}

UnitConverter.prototype.distance = function(distance, ratio) {
    return c.multiply([distance, ratio]).toFixed(5);
};

UnitConverter.prototype.celsiusToFahrenheit = function(celsius) {
    return c.multiply([celsius, 1.8]) + 32;
}

UnitConverter.prototype.fahrenheitToCelsius = function(fahrenheit) {

}

module.exports = UnitConverter;