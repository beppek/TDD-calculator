'use strict';

var chai = require('chai');
var sinon = require('sinon');
var jsdom = require('mocha-jsdom');
var CalculatorView = require('../app/view/CalculatorView');

var Calculator = require('../app/model/Calculator');

var assert = chai.assert;

describe('CalculatorView', function () {
    jsdom();
    var sut;

    it('should add eventlisteners to buttons in div with id calculator', function () {
        createHTMLStub();
        var btns = document.getElementsByTagName('button');
        var i;
        for (i = 0; i < btns.length; i += 1) {
            var value = btns[i].innerHTML;
            if (!isNaN(value)) {
                btns[i].click();
            }
        }
        var expected = '123';
        var actual = document.getElementById('inputDisplay').textContent;
        assert.equal(actual, expected);
    });

    it('should print to p tag with id inputDisplay', function () {
        createHTMLStub();
        var expected = 'Print this';
        sut.printToInputDisplay('Print this');
        var actual = document.getElementById('inputDisplay').textContent;
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
        stub.target.textContent = '+';
        var expected = ' + ';
        sut.handleClick(stub);
        var actual = document.getElementById('inputDisplay').textContent;
        assert.equal(actual, expected);
    });

    it('should print number without white space', function () {
        createHTMLStub();
        var stub = sinon.stub(window.event);
        stub.target = document.createElement('button');
        stub.target.textContent = '1';
        var expected = '1';
        sut.handleClick(stub);
        var actual = document.getElementById('inputDisplay').textContent;
        assert.equal(actual, expected);
    });

    it('should calculate 1+1 if equal button is clicked', function () {
        createHTMLStub();
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
        var actual = document.getElementById('result').textContent;
        assert.equal(actual, expected);
    });


    it('should call subtract if subtract operator is selected', function () {
        createHTMLStub();
        var inputDisplay = document.getElementById('inputDisplay');
        inputDisplay.textContent = '2 - 1';
        sut.printResult();
        var expected = '1';
        var actual = document.getElementById('result').textContent;
        assert.equal(actual, expected);
    });

    it('should call divide if divide operator is selected', function () {
        createHTMLStub();
        var inputDisplay = document.getElementById('inputDisplay');
        inputDisplay.textContent = '6 / 2';
        sut.printResult();
        var expected = '3';
        var actual = document.getElementById('result').textContent;
        assert.equal(actual, expected);
    });

    it('should call multiply if multiply operator is selected', function () {
        createHTMLStub();
        var inputDisplay = document.getElementById('inputDisplay');
        inputDisplay.textContent = '2 * 2';
        sut.printResult();
        var expected = '4';
        var actual = document.getElementById('result').textContent;
        assert.equal(actual, expected);
    });

    it('should disable all operator buttons except the one "clicked"', function () {
        createHTMLStub();
        var value = '+';
        sut.disableOperatorButtons(value);
        var operators = document.getElementById('operators').childNodes;
        var i;
        for (i = 0; i < operators.length; i += 1) {
            if (operators[i].textContent === value) {
                var expected = false;
                var actual = operators[i].disabled;
                assert.equal(actual, expected);
            } else {
                var expected = true;
                var actual = operators[i].disabled;
                assert.equal(actual, expected);
            }
        }
    });

    it('should clear previous input', function () {
        createHTMLStub();
        var inputDisplay = document.getElementById('inputDisplay');
        inputDisplay.textContent = '6 / 2';
        sut.clearView();
        var expected = '';
        var actual = inputDisplay.textContent;
        assert.equal(actual, expected);
    });

    it('should set disabled to false for all buttons', function () {
        createHTMLStub();
        var operators = document.getElementById('operators').childNodes;
        var i;
        for (i = 0; i < operators.length; i += 1) {
            operators[i].disabled = true;
        }
        sut.clearView();
        for (i = operators.length - 1; i >= 0; i -= 1) {
            var expected = false;
            var actual = operators[i].disabled;
            assert.equal(actual, expected);
        }
    });

    it('should clear result', function () {
        createHTMLStub();
        var resultDiv = document.getElementById('result');
        resultDiv.textContent = '2';
        var expected = '';
        sut.clearView();
        var actual = resultDiv.textContent;
        assert.equal(actual, expected);
    });

    it('should call clearView function', function () {
        createHTMLStub();
        var clearButton = document.getElementById('clear');
        var spy = sinon.spy(sut, "clearView");
        clearButton.click();
        spy.restore();
        sinon.assert.calledOnce(spy);
    });


    function createHTMLStub() {
        var html = '<div id="app">' +
                        '<p id="inputDisplay"></p>' +
                    '<div id="calculator">' +
                        '<div id="operators">' +
                            '<button>+</button><button>-</button><button>/</button><button>*</button>' +
                        '</div>' +
                        '<div id="numpad">' +
                            '<div><button>1</button><button>2</button><button>3</button></div><button id="clear">clear</button>' +
                        '</div>' +
                        '<div>' +
                            '<button id="calculate">=</button>' +
                        '</div>' +
                        '<div>' +
                            '<p id="result"></p>' +
                        '</div>' +
                    '</div>';
        document.body.innerHTML = html;
        sut = new CalculatorView(new CalculatorStub());
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