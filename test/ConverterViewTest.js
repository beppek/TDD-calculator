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


    function createHTML() {
        var html =  '<div id="app">' +
                        '<div id="distanceConverter">' +
                            '<input type="text" id="distance">' +
                            '<select name="distanceUnit1" id="distanceUnit1">' +
                                '<option value="from" disabled selected>-- From --</option>' +
                                '<option value="km">Kilometers</option>' +
                                '<option value="miles">Miles</option>' +
                                '<option value="meters">Meters</option>' +
                                '<option value="yards">Yards</option>' +
                                '<option value="feet">Feet</option>' +
                            '<select>' +
                            '<select name="distanceUnit2" id="distanceUnit2">' +
                                '<option value="to" disabled selected>-- To --</option>' +
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
                                '<option value="from" disabled selected>-- From --</option>' +
                                '<option value="celsius">Celsius</option>' +
                                '<option value="fahrenheit">Fahrenheit</option>' +
                            '</select>' +
                            '<select name="tempUnit2" id="tempUnit2">' +
                                '<option value="to" disabled selected>-- To --</option>' +
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
ConverterStub.prototype.distance = function() {
    // body
}