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

    });
};

ConverterView.prototype.convertDistance = function() {

};

ConverterView.prototype.convertTemperature = function() {

};

module.exports = ConverterView;