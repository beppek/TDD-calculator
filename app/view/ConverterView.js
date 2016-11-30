'use strict';

var uc;

function ConverterView(converter) {
    uc = converter;
}

ConverterView.prototype.addListeners = function() {
    var convertDistanceBtn = document.getElementById('distanceConverter').getElementsByTagName('button')[0];
    var convertTempBtn = document.getElementById('temperatureConverter').getElementsByTagName('button')[0];

}

module.exports = ConverterView;