'use strict';

var uc;

function ConverterView(converter) {
    uc = converter;
    this.addListeners();
}

ConverterView.prototype.addListeners = function() {
    var convertDistanceBtn = document.getElementById('distanceConverter').getElementsByTagName('button')[0];
    var convertTempBtn = document.getElementById('temperatureConverter').getElementsByTagName('button')[0];
    console.log(convertDistanceBtn.textContent);
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

};

ConverterView.prototype.convertTemperature = function() {

};

ConverterView.prototype.isNumber = function(input) {
    var parsed = parseInt(input);
    if (isNaN(parsed)) {
        return false;
    }
}

module.exports = ConverterView;