'use strict';

var calculator;

function View(c) {
    calculator = c;
    var calculatorDiv = document.getElementById('calculator');
    var calculatorBtns = calculatorDiv.getElementsByTagName('button');
    var i;
    for (i = 0; i < calculatorBtns.length; i += 1) {
        calculatorBtns[i].disabled = false;
        calculatorBtns[i].addEventListener('click', function(event) {
            this.handleClick(event);
        }.bind(this));
    }
}

View.prototype.handleClick = function(event) {
    var target = event.target;
    var value = target.firstChild.nodeValue;
    if (!isNaN(value)) {
        this.printToInputDisplay(value);
    } else if (this.isOperator(value) === true ) {
        this.printToInputDisplay(' ' + value + ' ');
        this.disableOperatorButtons(value);
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

View.prototype.disableOperatorButtons = function(value) {
    var operators = document.getElementById('operators').childNodes;
    var i;
    for (i = 0; i < operators.length; i += 1) {
        if (operators[i].textContent !== value) {
            operators[i].disabled = true;
        }
    }
};

View.prototype.printResult = function() {
    var input = this.readInput();
    var result;
    switch (input.operator) {
        case '+':
            result = calculator.add(input.numbers);
            break;
        case '-':
            result = calculator.subtract(input.numbers);
            break;
        case '*':
            result = calculator.multiply(input.numbers);
            break;
        case '/':
            result = calculator.divide(input.numbers);
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

View.prototype.clearView = function() {

};

module.exports = View;