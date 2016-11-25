'use strict';

var Calculator = require('./Calculator');

var c;

function UnitConverter() {
    c = new Calculator();
}

UnitConverter.prototype.kmToMiles = function(km) {
    var ratio = 0.62137;
    var numbers = [km, ratio];
    var miles = c.multiply(numbers).toFixed(5);
    return miles;
};

UnitConverter.prototype.milesToKm = function(miles) {

};

module.exports = UnitConverter;