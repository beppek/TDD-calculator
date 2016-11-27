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

	__webpack_require__(1);
	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nums = __webpack_require__(2);

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
/* 2 */
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A simple unit converter
	 *
	 * @author beppek
	 * @version 0.0.1
	 *
	 * ex usage:
	 * var UnitConverter = require('../model/UnitConverter');
	 * var convert = new UnitConverter();
	 * convert.celsiusToFahrenheit(32);
	 */
	'use strict';

	var Calculator = __webpack_require__(1);
	var nums = __webpack_require__(2);

	var c;

	function UnitConverter() {
	    c = new Calculator();
	}

	/**
	 * Will convert one distance to another with at most 5 decimals
	 * @param distance - a number to be converted
	 * @param ratio - the conversion ratio between the selected units. Use files in ./units/
	 */
	UnitConverter.prototype.distance = function(distance, ratio) {
	    nums.checkPositive([distance, ratio]);
	    return c.multiply([distance, ratio]).toFixed(5);
	};

	/**
	 * Converts a given temperature from celsius to fahrenheit
	 * @return converted temperature as a number with at most 2 decimal points
	 */
	UnitConverter.prototype.celsiusToFahrenheit = function(celsius) {
	    return (c.multiply([celsius, 1.8]) + 32).toFixed(2);
	};

	/**
	 * Converts a given temperature from fahrenheit to celsius
	 * @return converted temperature as a number with at most 2 decimal points
	 */
	UnitConverter.prototype.fahrenheitToCelsius = function(fahrenheit) {
	    return c.multiply([fahrenheit - 32, 0.5556]).toFixed(2);
	};

	module.exports = UnitConverter;

/***/ }
/******/ ]);