/**
 * A simple unit converter
 *
 * @author beppek
 * @version 0.0.1
 *
 * ex usage:
 * var UnitConverter = require('../model/UnitConverter');
 * var convert = new UnitConverter();
 * convert.celsiusToFahrenheit(32);
 */
'use strict';

var Calculator = require('./Calculator');
var nums = require('./helpers/numbers.js');

var c;

function UnitConverter() {
    c = new Calculator();
}

/**
 * Will convert one distance to another with at most 5 decimals
 * @param distance - a number to be converted
 * @param ratio - the conversion ratio between the selected units. Use files in ./units/
 */
UnitConverter.prototype.distance = function(distance, ratio) {
    nums.checkPositive([distance, ratio]);
    return c.multiply([distance, ratio]).toFixed(5);
};

/**
 * Converts a given temperature from celsius to fahrenheit
 * @return converted temperature as a number with at most 2 decimal points
 */
UnitConverter.prototype.celsiusToFahrenheit = function(celsius) {
    return (c.multiply([celsius, 1.8]) + 32).toFixed(2);
};

/**
 * Converts a given temperature from fahrenheit to celsius
 * @return converted temperature as a number with at most 2 decimal points
 */
UnitConverter.prototype.fahrenheitToCelsius = function(fahrenheit) {
    return c.multiply([fahrenheit - 32, 0.5556]).toFixed(2);
};

module.exports = UnitConverter;