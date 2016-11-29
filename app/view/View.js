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
        this.printResult();
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

View.prototype.printResult = function() {
    var input = this.readInput();
    var result;
    switch (input.operator) {
        case '+':
            result = c.add(input.numbers);
            break;
        case '-':
            result = c.subtract(input.numbers);
            break;
        case '*':
            result = c.multiply(input.numbers);
            break;
        case '/':
            result = c.divide(input.numbers);
            break;
    }
    var resultP = document.getElementById('result');
    var t = document.createTextNode(result);
    resultP.appendChild(t);
};

View.prototype.readInput = function() {
    var input = document.getElementById('inputDisplay').textContent;
    var inputs = input.split(" ");
    var numbers = [];
    var operator = inputs[1];
    var i;
    for (i = 0; i < inputs.length; i += 1) {
        if (!isNaN(inputs[i])) {
            numbers.push(parseInt(inputs[i]));
        }
    }
    return {
        numbers: numbers,
        operator: operator
    };
};

module.exports = View;