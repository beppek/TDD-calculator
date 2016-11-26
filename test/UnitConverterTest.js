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

        it('should only accept positive number for distance', function () {
            var negativeDistance = -12;
            var ratio = 1;
            assert.throws(function() {sut.distance(negativeDistance, ratio)}, TypeError, "Input can't be a negative number");
        });

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


            it('should convert km to feet', function () {
                var km = 1;
                var expected = 3280.8399;
                var actual = sut.distance(km, kmTo.feet);
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


            it('should convert miles to meters', function () {
                var miles = 12;
                var expected = 19312.128;
                var actual = sut.distance(miles, milesTo.meters);
                assert.equal(actual, expected);
            });

            it('should convert miles to yards', function () {
                var miles = 3;
                var expected = 5280;
                var actual = sut.distance(miles, milesTo.yards);
                assert.equal(actual, expected);
            });

            it('should convert miles to feet', function () {
                var miles = 0.5;
                var expected = 2640;
                var actual = sut.distance(miles, milesTo.feet);
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

            it('should convert meters to kilometers', function () {
                var meters = 2354;
                var expected = 2.354;
                var actual = sut.distance(meters, metersTo.km);
                assert.equal(actual, expected);
            });

            it('should convert meters to miles', function () {
                var meters = 3498;
                var expected = 2.17356;
                var actual = sut.distance(meters, metersTo.miles);
                assert.equal(actual, expected);
            });

            it('should convert meters to feet', function () {
                var meters = 34;
                var expected = 111.54856;
                var actual = sut.distance(meters, metersTo.feet);
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

            it('should convert yards to kilometers', function () {
                var yards = 4500;
                var expected = 4.1148;
                var actual = sut.distance(yards, yardsTo.km);
                assert.equal(actual, expected);
            });


            it('should convert yards to miles', function () {
                var yards = 5600;
                var expected = 3.1808;
                var actual = sut.distance(yards, yardsTo.miles);
                assert.equal(actual, expected);
            });

            it('should convert yards to feet', function () {
                var yards = 42;
                var expected = 126;
                var actual = sut.distance(yards, yardsTo.feet);
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
