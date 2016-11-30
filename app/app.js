var CalculatorView = require('./view/CalculatorView');
var ConverterView = require('./view/ConverterView');
var Calculator = require('./model/Calculator');
var UnitConverter = require('./model/UnitConverter');

document.addEventListener('DOMContentLoaded', function() {
    if (document.title === 'Calculator') {
        new CalculatorView(new Calculator());
    } else {
        new ConverterView(new UnitConverter());
    }
});