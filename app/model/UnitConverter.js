'use strict';

var Calculator = require('./Calculator');

var c;

function UnitConverter() {
    c = new Calculator();
}

UnitConverter.prototype.kmToMiles = function(km) {

};

UnitConverter.prototype.milesToKm = function(miles) {

};

module.exports = UnitConverter;