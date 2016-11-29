'use strict';

var chai = require('chai');
var sinon = require('sinon');
var jsdom = require('mocha-jsdom');
var View = require('../app/view/View');

var Calculator = require('../app/model/Calculator');

var assert = chai.assert;

describe('CalculatorView', function () {
    jsdom();
    var sut;

    it('should add eventlisteners to buttons in div with id calculator', function () {
        createHTMLStub();
        sut.init();
        var btns = document.getElementsByTagName('button');
        var i;
        for (i = 0; i < btns.length; i += 1) {
            var value = btns[i].innerHTML;
            if (!isNaN(value)) {
                btns[i].click();
            }
        }
        var expected = '123';
        var actual = document.getElementById('inputDisplay').innerHTML;
        assert.equal(actual, expected);
    });

    it('should print to p tag with id inputDisplay', function () {
        createHTMLStub();
        var expected = 'Print this';
        sut.printToInputDisplay('Print this');
        var actual = document.getElementById('inputDisplay').innerHTML;
        assert.equal(actual, expected);
    });

    it('should return true when value is operator', function () {
        var value = '+';
        assert.isTrue(sut.isOperator(value));
    });

    it('should return false when value is not operator', function () {
        var value = '0';
        assert.isFalse(sut.isOperator(value));
    });

    it('should print operator with white space on either side', function () {
        createHTMLStub();
        var stub = sinon.stub(window.event);
        stub.target = document.createElement('button');
        stub.target.innerHTML = '+';
        var expected = ' + ';
        sut.handleClick(stub);
        var actual = document.getElementById('inputDisplay').innerHTML;
        assert.equal(actual, expected);
    });

    it('should print number without white space', function () {
        createHTMLStub();
        var stub = sinon.stub(window.event);
        stub.target = document.createElement('button');
        stub.target.innerHTML = '1';
        var expected = '1';
        sut.handleClick(stub);
        var actual = document.getElementById('inputDisplay').innerHTML;
        assert.equal(actual, expected);
    });

    it('should calculate 1+1 if equal button is clicked', function () {
        createHTMLStub();
        sut.init();
        var operators = document.getElementById('operators');
        var plusBtn = operators.firstElementChild;
        var numpad = document.getElementById('numpad');
        var btn1 = numpad.firstChild.firstChild;
        var eqBtn = document.getElementById('calculate');
        btn1.click();
        plusBtn.click();
        btn1.click();
        eqBtn.click();
        var expected = '2';
        var actual = document.getElementById('result').innerHTML;
        assert.equal(actual, expected);
    });


    it('should call subtract if subtract operator is selected', function () {
        createHTMLStub();
        var inputDisplay = document.getElementById('inputDisplay');
        inputDisplay.innerHTML = '2 - 1';
        sut.printResult();
        var expected = '1';
        var actual = document.getElementById('result').innerHTML;
        assert.equal(actual, expected);
    });


    function createHTMLStub() {
        var html = '<div id="app">' +
                        '<p id="inputDisplay"></p>' +
                    '<div id="calculator">' +
                        '<div id="operators">' +
                            '<button>+</button><button>-</button><button>/</button><button>*</button>' +
                        '</div>' +
                        '<div id="numpad">' +
                            '<div><button>1</button><button>2</button><button>3</button></div>' +
                        '</div>' +
                        '<div>' +
                            '<button id="calculate">=</button>' +
                        '</div>' +
                        '<div>' +
                            '<p id="result"></p>' +
                        '</div>' +
                    '</div>';
        document.body.innerHTML = html;
        sut = new View(new CalculatorStub());
    }

});

/**
 * JavaScript pre ES6 way of extending a "class"
 */
function CalculatorStub() {
    Calculator.call(this);
}
CalculatorStub.prototype = Object.create(Calculator.prototype);
CalculatorStub.prototype.constructor = CalculatorStub;
CalculatorStub.prototype.add = function(numbers) {
    return 1+1;
};
CalculatorStub.prototype.subtract = function(numbers) {
    return 2-1;
};
CalculatorStub.prototype.multiply = function(numbers) {
    return 2*2;
};
CalculatorStub.prototype.divide = function(numbers) {
    return 6/2;
};