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
    var input = parseInt(document.getElementById('distance').textContent);
    if (this.isNumber(input)) {
        output.textContent = uc.distance(input, ratio);
    }
};

ConverterView.prototype.convertTemperature = function() {

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
        case 'km':
            return r.km(dUnit2);
        case 'miles':
            return r.miles(dUnit2);
        case 'meters':
            return r.meters(dUnit2);
    }
    return 1;
};

module.exports = ConverterView;