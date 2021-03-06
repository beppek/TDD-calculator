'use strict';

var calculator;

function CalculatorView(c) {
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

CalculatorView.prototype.handleClick = function(event) {
    var target = event.target;
    var value = target.firstChild.nodeValue;
    if (!isNaN(value)) {
        this.printToInputDisplay(value);
    } else if (this.isOperator(value) === true ) {
        this.printToInputDisplay(' ' + value + ' ');
        this.disableOperatorButtons(value);
    } else if (target.id === 'clear') {
        this.clearView();
    } else {
        this.printResult();
    }
};

CalculatorView.prototype.printToInputDisplay = function(value) {
    var display = document.getElementById('inputDisplay');
    var inputValue = document.createTextNode(value);
    display.appendChild(inputValue);
};

CalculatorView.prototype.isOperator = function(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        return true;
    }
    return false;
};

CalculatorView.prototype.disableOperatorButtons = function(value) {
    var operators = document.getElementById('operators').childNodes;
    var i;
    for (i = 0; i < operators.length; i += 1) {
        if (operators[i].textContent !== value) {
            operators[i].disabled = true;
        }
    }
};

CalculatorView.prototype.printResult = function() {
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

CalculatorView.prototype.readInput = function() {
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

CalculatorView.prototype.clearView = function() {
    document.getElementById('inputDisplay').textContent = '';
    var operators = document.getElementById('operators').childNodes;
    var i;
    for (i = 0; i < operators.length; i += 1) {
        operators[i].disabled = false;
    }
    document.getElementById('result').textContent = '';
};

module.exports = CalculatorView;