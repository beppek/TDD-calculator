'use strict';

var Calculator = require('./Calculator');

var c;

function DistanceConverter() {
    c = new Calculator();
}

DistanceConverter.prototype.kmToMiles = function(km) {
    var ratio = 0.62137;
    var numbers = [km, ratio];
    var miles = c.multiply(numbers).toFixed(5);
    return miles;
};

DistanceConverter.prototype.milesToKm = function(miles) {
    var ratio = 1.609344;
    var numbers = [miles, ratio];
    var km = c.multiply(numbers).toFixed(5);
    return km;
};

module.exports = DistanceConverter;