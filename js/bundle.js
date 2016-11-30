/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var View = __webpack_require__(1);
	var Calculator = __webpack_require__(2);
	var v;

	document.addEventListener('DOMContentLoaded', function() {
	    v = new View(new Calculator());
	    v.init();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

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

	View.prototype.init = function() {

	};

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

	module.exports = View;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nums = __webpack_require__(3);

	function Calculator() {

	}

	Calculator.prototype.add = function(numbers) {
	    nums.checkAreNumbers(numbers);
	    var result = 0;
	    numbers.forEach(function(num) {
	        result += num;
	    });
	    return result;
	};

	Calculator.prototype.subtract = function(numbers) {
	    nums.checkAreNumbers(numbers);
	    var result = numbers[0];
	    var i;
	    for (i = 1; i < numbers.length; i += 1) {
	        result -= numbers[i];
	    }
	    return result;
	};

	Calculator.prototype.multiply = function(numbers) {
	    nums.checkAreNumbers(numbers);
	    var result = numbers[0];
	    var i;
	    for (i = 1; i < numbers.length; i += 1) {
	        result *= numbers[i];
	    }
	    return result;
	};

	Calculator.prototype.divide = function(numbers) {
	    nums.checkAreNumbers(numbers);
	    var result = numbers[0];
	    var i;
	    for (i = 1; i < numbers.length; i += 1) {
	        result /= numbers[i];
	    }
	    return result;
	};

	module.exports = Calculator;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    checkPositive: checkPositive,
	    checkAreNumbers: checkAreNumbers
	};

	function checkPositive(numbers) {
	    numbers.forEach(function(number) {
	        if (number < 0) {
	            throw new Error("Input can't be a negative number");
	        }
	    });
	}

	function checkAreNumbers(numbers) {
	    numbers.forEach(function(num) {
	        if (isNaN(num)) {
	            throw new TypeError("Input was not a number");
	        }
	    });
	}

/***/ }
/******/ ]);