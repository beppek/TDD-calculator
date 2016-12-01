'use strict';

var Ratio = require('../model/Ratio');
var uc;
var r;

function ConverterView(converter) {
    uc = converter;
    r = new Ratio();
    this.addListeners();
}

ConverterView.prototype.addListeners = function() {
    var convertDistanceBtn = document.getElementById('distanceConverter').getElementsByTagName('button')[0];
    var convertTempBtn = document.getElementById('temperatureConverter').getElementsByTagName('button')[0];
    convertDistanceBtn.addEventListener('click', function() {
        this.convertDistance();
    }.bind(this));
    convertTempBtn.addEventListener('click', function() {
        this.convertTemperature();
    }.bind(this));
};

ConverterView.prototype.convertDistance = function() {
    var output = document.getElementById('distanceOutput');
    output.textContent = '';
    var ratio = this.getRatio();
    var input = parseInt(document.getElementById('distance').value);
    if (this.isNumber(input)) {
        output.textContent = uc.distance(input, ratio);
    } else {
        output.textContent = 'Input was not a number, try again';
    }
};

ConverterView.prototype.convertTemperature = function() {
    var output = document.getElementById('temperatureOutput');
    output.textContent = '';
    var tempSelect1 = document.getElementById('tempUnit1');
    var tempSelect2 = document.getElementById('tempUnit2');
    var tempUnit1 = tempSelect1.options[tempSelect1.selectedIndex].value;
    var tempUnit2 = tempSelect2.options[tempSelect2.selectedIndex].value;
    var input = parseInt(document.getElementById('temperature').value);
    if (this.isNumber(input)) {
        if (tempUnit1 === tempUnit2) {

        } else if (tempUnit1 === 'celsius') {
            output.textContent = uc.celsiusToFahrenheit(input) + 'c';
        } else {
            output.textContent = uc.fahrenheitToCelsius(input) + 'f';
        }
    } else {
        output.textContent = 'Input was not a number, try again';
    }
};

ConverterView.prototype.isNumber = function(input) {
    if (isNaN(input)) {
        return false;
    }
    return true;
};

ConverterView.prototype.getRatio = function() {
    var dUnitSelect1 = document.getElementById('distanceUnit1');
    var dUnitSelect2 = document.getElementById('distanceUnit2');
    var dUnit1 = dUnitSelect1.options[dUnitSelect1.selectedIndex].value;
    var dUnit2 = dUnitSelect2.options[dUnitSelect2.selectedIndex].value;
    switch (dUnit1) {
        case dUnit2:
            return 1;
        case 'km':
            return r.km(dUnit2);
        case 'miles':
            return r.miles(dUnit2);
        case 'meters':
            return r.meters(dUnit2);
        case 'yards':
            return r.yards(dUnit2);
        case 'feet':
            return r.feet(dUnit2);
    }
};

module.exports = ConverterView;