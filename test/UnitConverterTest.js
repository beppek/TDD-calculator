'use strict';

var chai = require('chai');
var UnitConverter = require('../app/model/UnitConverter.js');

var assert = chai.assert;

var kmTo = require('../app/model/units/km');
var milesTo = require('../app/model/units/miles');
var metersTo = require('../app/model/units/meters');
var yardsTo = require('../app/model/units/yards');

describe('UnitConverter', function () {

    var sut = new UnitConverter();

    describe('DistanceConverter', function () {

        describe('Kilometers', function () {

            it('should convert kilometers to miles', function () {
                var km = 10;
                var expected = 6.2137;
                var actual = sut.distance(km, kmTo.miles);
                assert.equal(actual, expected);
            });

            it('should convert km to yards', function () {
                var km = 1;
                var expected = 1093.61330;
                var actual = sut.distance(km, kmTo.yards);
                assert.equal(actual, expected);
            });

            it('should convert km to meters', function () {
                var km = 1;
                var expected = 1000;
                var actual = sut.distance(km, kmTo.meters);
                assert.equal(actual, expected);
            });

        });

        describe('Miles', function () {

            it('should convert miles to kilometers', function () {
                var miles = 10;
                var expected = 16.09344;
                var actual = sut.distance(miles, milesTo.km);
                assert.equal(actual, expected);
            });

        });

        describe('Meters', function () {

            it('should convert meters to yards', function () {
                var meters = 100;
                var expected = 109.36133;
                var actual = sut.distance(meters, metersTo.yards);
                assert.equal(actual, expected);
            });
        });

        describe('yards', function () {

            it('should convert yards to meters', function () {
                var yards = 100;
                var expected = 91.44000;
                var actual = sut.distance(yards, yardsTo.meters);
                assert.equal(actual, expected);
            });
        });

    });

    describe('TemperatureConverter', function () {

        it('should convert celsius to fahrenheit', function () {
            var celsius = 50;
            var expected = 122;
            var actual = sut.celsiusToFahrenheit(celsius);
            assert.equal(actual, expected);
        });

        it('should convert fahrenheit to celsius', function () {
            var fahrenheit = 50;
            var expected = 10;
            var actual = sut.fahrenheitToCelsius(fahrenheit);
            assert.equal(actual, expected);
        });


    });


});
