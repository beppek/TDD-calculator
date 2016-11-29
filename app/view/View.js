'use strict';

var display;
var operator;

function View() {
    display = document.getElementById('inputDisplay');
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
    } else if (this.isOperator(value)) {
        this.handleOperator(value);
    }
};

View.prototype.printToInputDisplay = function(value) {
    var inputValue = document.createTextNode(value);
    display.appendChild(inputValue);
};

View.prototype.isOperator = function(value) {
    return false;
}

View.prototype.handleOperator = function(value) {
    if (operator === undefined) {
        operator = value;
    } else if (operator === value) {

    }
}

module.exports = View;