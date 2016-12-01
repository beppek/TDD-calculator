'use strict';

var uc;

function ConverterView(converter) {
    uc = converter;
}

ConverterView.prototype.addListeners = function() {
    var convertDistanceBtn = document.getElementById('distanceConverter').getElementsByTagName('button')[0];
    var convertTempBtn = document.getElementById('temperatureConverter').getElementsByTagName('button')[0];
    convertDistanceBtn.addEventListener('click', function() {

    });
    convertTempBtn.addEventListener('click', function() {

    });
};

ConverterView.prototype.convertDistance = function() {

};

ConverterView.prototype.convertTemperature = function() {

};

module.exports = ConverterView;