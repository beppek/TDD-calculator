'use strict';

var Calculator = require('./Calculator');

var c;

function TemperatureConverter() {
    c = new Calculator();
}

module.exports = TemperatureConverter;