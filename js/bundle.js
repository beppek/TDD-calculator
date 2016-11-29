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
	var v = new View();

	document.addEventListener('DOMContentLoaded', function() {
	    v.addEvents();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function View() {

	}

	View.prototype.addEvents = function() {
	    var calculatorDiv = document.getElementById('calculator');
	    var calculatorBtns = calculatorDiv.getElementsByTagName('button');
	    var i;
	    for (i = 0; i < calculatorBtns.length; i += 1) {
	        console.log("hello");
	        calculatorBtns[i].addEventListener('click', function(event) {
	            this.printToInputDisplay(event.target.firstChild.nodeValue);
	        }.bind(this));
	    }

	};

	View.prototype.printToInputDisplay = function(value) {
	    var inputDisplay = document.getElementById('input');
	    var inputValue = document.createTextNode(value + " ");
	    inputDisplay.appendChild(inputValue);
	};

	module.exports = View;

/***/ }
/******/ ]);