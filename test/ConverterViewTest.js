'use strict';

var chai = require('chai');
var sinon = require('sinon');
var jsdom = require('mocha-jsdom');
var ConverterView = require('../app/view/ConverterView');

var Converter = require('../app/model/UnitConverter');

var assert = chai.assert;

describe('ConverterView', function () {
    jsdom();
    var sut;

    it('should add event listeners to convert distance button', function () {
        createHTML();
        var btn = document.getElementById('distanceConverter').getElementsByTagName('button')[0];
        var spy = sinon.spy(btn, "addEventListener");
        sut.addListeners();
        spy.restore();
        sinon.assert.calledOnce(spy);
    });


    it('should add event listener to convert temperature button', function () {
        createHTML();
        var btn = document.getElementById('temperatureConverter').getElementsByTagName('button')[0];
        var spy = sinon.spy(btn, "addEventListener");
        sut.addListeners();
        spy.restore();
        sinon.assert.calledOnce(spy);
    });

    it('should call convertDistance on click', function () {
        createHTML();
        var btn = document.getElementById('distanceConverter').getElementsByTagName('button')[0];
        var spy = sinon.spy(sut, "convertDistance");
        btn.click();
        spy.restore();
        sinon.assert.calledOnce(spy);
    });

    it('should call convertTemperature on click', function () {
        createHTML();
        var btn = document.getElementById('temperatureConverter').getElementsByTagName('button')[0];
        var spy = sinon.spy(sut, "convertTemperature");
        btn.click();
        spy.restore();
        sinon.assert.calledOnce(spy);
    });

    it('should return false if input is not a number', function () {
        var input = 'p1';
        assert.isFalse(sut.isNumber(input));
    });

    it('should return true if input is a number', function () {
        var input = '1';
        assert.isTrue(sut.isNumber(input));
    });

    it('should print the converted distance to output', function () {
        createHTML();
        var input = document.getElementById('distance');
        var dUnit1 = document.getElementById('distanceUnit1').children[1];
        var dUnit2 = document.getElementById('distanceUnit2').children[1];
        dUnit1.selected = true;
        dUnit2.selected = true;
        input.value = '42';
        sut.convertDistance();
        var expected = '42';
        var actual = document.getElementById('distanceOutput').textContent;
        assert.equal(actual, expected);
    });

    it('should return the correct ratio for km to miles conversion', function () {
        createHTML();
        var dUnit1 = document.getElementById('distanceUnit1').children[1];
        var dUnit2 = document.getElementById('distanceUnit2').children[2];
        dUnit1.selected = true;
        dUnit2.selected = true;
        var expected = 0.62137;
        var actual = sut.getRatio();
        assert.equal(actual, expected);
    });

    it('should return correct ratio for miles to km', function () {
        createHTML();
        var dUnit1 = document.getElementById('distanceUnit1').children[2];
        var dUnit2 = document.getElementById('distanceUnit2').children[1];
        dUnit1.selected = true;
        dUnit2.selected = true;
        var expected = 1.609344;
        var actual = sut.getRatio();
        assert.equal(actual, expected);
    });

    it('should return correct ratio for meters to yards', function () {
        createHTML();
        var dUnit1 = document.getElementById('distanceUnit1').children[3];
        var dUnit2 = document.getElementById('distanceUnit2').children[4];
        dUnit1.selected = true;
        dUnit2.selected = true;
        var expected = 1.0936133;
        var actual = sut.getRatio();
        assert.equal(actual, expected);
    });

    it('should return correct ratio for yards to meters', function () {
        createHTML();
        var dUnit1 = document.getElementById('distanceUnit1').children[4];
        var dUnit2 = document.getElementById('distanceUnit2').children[3];
        dUnit1.selected = true;
        dUnit2.selected = true;
        var expected = 0.9144;
        var actual = sut.getRatio();
        assert.equal(actual, expected);
    });

    it('should return correct ratio for feet to yards', function () {
        createHTML();
        var dUnit1 = document.getElementById('distanceUnit1').children[5];
        var dUnit2 = document.getElementById('distanceUnit2').children[4];
        dUnit1.selected = true;
        dUnit2.selected = true;
        var expected = 0.333333;
        var actual = sut.getRatio();
        assert.equal(actual, expected);
    });

    it('should return 1 if both units are the same', function () {
        createHTML();
        var dUnit1 = document.getElementById('distanceUnit1').children[1];
        var dUnit2 = document.getElementById('distanceUnit2').children[1];
        dUnit1.selected = true;
        dUnit2.selected = true;
        var expected = 1;
        var actual = sut.getRatio();
        assert.equal(actual, expected);
    });

    it('should print error message if input is not a number', function () {
        createHTML();
        var input = document.getElementById('distance');
        var dUnit1 = document.getElementById('distanceUnit1').children[1];
        var dUnit2 = document.getElementById('distanceUnit2').children[2];
        dUnit1.selected = true;
        dUnit2.selected = true;
        input.value = 'asfd';
        sut.convertDistance();
        var expected = 'Input was not a number, try again';
        var actual = document.getElementById('distanceOutput').textContent;
        assert.equal(actual, expected);
    });

    it('should print the result from celsius to fahrenheit', function () {
        createHTML();
        var input = document.getElementById('temperature');
        var dUnit1 = document.getElementById('tempUnit1').children[1];
        var dUnit2 = document.getElementById('tempUnit2').children[2];
        dUnit1.selected = true;
        dUnit2.selected = true;
        input.value = '42';
        sut.convertTemperature();
        var expected = '42c';
        var actual = document.getElementById('temperatureOutput').textContent;
        assert.equal(actual, expected);
    });

    it('should print the result from fahrenheit to celsius', function () {
        createHTML();
        var input = document.getElementById('temperature');
        var dUnit1 = document.getElementById('tempUnit1').children[2];
        var dUnit2 = document.getElementById('tempUnit2').children[1];
        dUnit1.selected = true;
        dUnit2.selected = true;
        input.value = '42';
        sut.convertTemperature();
        var expected = '42f';
        var actual = document.getElementById('temperatureOutput').textContent;
        assert.equal(actual, expected);
    });

    function createHTML() {
        var html =  '<div id="app">' +
                        '<div id="distanceConverter">' +
                            '<input type="text" id="distance">' +
                            '<select name="distanceUnit1" id="distanceUnit1">' +
                                '<option value="from" disabled>-- From --</option>' +
                                '<option value="km">Kilometers</option>' +
                                '<option value="miles">Miles</option>' +
                                '<option value="meters">Meters</option>' +
                                '<option value="yards">Yards</option>' +
                                '<option value="feet">Feet</option>' +
                            '<select>' +
                            '<select name="distanceUnit2" id="distanceUnit2">' +
                                '<option value="to" disabled>-- To --</option>' +
                                '<option value="km">Kilometers</option>' +
                                '<option value="miles">Miles</option>' +
                                '<option value="meters">Meters</option>' +
                                '<option value="yards">Yards</option>' +
                                '<option value="feet">Feet</option>' +
                            '</select>' +
                            '<button>Convert</button>' +
                            '<p id="distanceOutput"></p>' +
                        '</div>' +
                        '<div class="row" id="temperatureConverter">' +
                            '<input type="text" id="temperature">' +
                            '<select name="tempUnit1" id="tempUnit1">' +
                                '<option value="from" disabled>-- From --</option>' +
                                '<option value="celsius">Celsius</option>' +
                                '<option value="fahrenheit">Fahrenheit</option>' +
                            '</select>' +
                            '<select name="tempUnit2" id="tempUnit2">' +
                                '<option value="to" disabled>-- To --</option>' +
                                '<option value="celsius">Celsius</option>' +
                                '<option value="fahrenheit">Fahrenheit</option>' +
                            '</select>' +
                            '<button>Convert</button>' +
                            '<p id="temperatureOutput"></p>' +
                        '</div>' +
                    '</div>';
        document.body.innerHTML = html;
        sut = new ConverterView(new ConverterStub());
    }

});

/**
 * JavaScript pre ES6 way of extending a "class"
 */
function ConverterStub() {
    Converter.call(this);
}
ConverterStub.prototype = Object.create(Converter.prototype);
ConverterStub.prototype.constructor = ConverterStub;
ConverterStub.prototype.distance = function(distance, ratio) {
    return 42;
};
ConverterStub.prototype.celsiusToFahrenheit = function(celsius) {
    return 42;
};
ConverterStub.prototype.fahrenheitToCelsius = function(fahrenheit) {
    return 42;
};