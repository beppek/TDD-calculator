'use strict';

var Calculator = require('../model/Calculator');
var c;

function View() {
    c = new Calculator();
}

View.prototype.init = function() {
    var calculatorDiv = document.getElementById('calculator');
    var calculatorBtns = calculatorDiv.getElementsByTagName('button');
    var i;
    for (i = 0; i < calculatorBtns.length; i += 1) {
        calculatorBtns[i].addEventListener('click', function(event) {
            this.handleClick(event);
        }.bind(this));
    }

};

View.prototype.handleClick = function(event) {
    var target = event.target;
    var value = target.firstChild.nodeValue;
    if (!isNaN(value)) {
        this.printToInputDisplay(value);
    } else if (this.isOperator(value) === true ) {
        this.printToInputDisplay(' ' + value + ' ');
    } else {
        this.calculate();
    }
};

View.prototype.printToInputDisplay = function(value) {
    var display = document.getElementById('inputDisplay');
    var inputValue = document.createTextNode(value);
    display.appendChild(inputValue);
};

View.prototype.isOperator = function(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        return true;
    }
    return false;
};

View.prototype.calculate = function() {
    var result = 0;
    var resultP = document.getElementById('result');
    var t = document.createTextNode(result);
    resultP.appendChild(t);
};

module.exports = View;