'use strict';

var chai = require('chai');
var Calculator = require('../app/model/Calculator');
var helper = require('./testHelpers/testHelper');

var assert = chai.assert;

describe('Calculator', function () {

    var sut = new Calculator();

    describe('Subtraction', function () {

        it('should subtract 2 numbers', function () {
            var numbers = [2,1];
            var expected = 1;
            var actual = sut.subtract(numbers);
            assert.equal(expected, actual);
        });


        it('should throw TypeError if params are NaN', function () {
            var notNumbers = ['a', 'b', 'c'];
            assert.throws(function() {sut.subtract(notNumbers)}, TypeError, "Input was not a number");
        });


        it('should subtract more than 2 numbers', function () {
            var numbersLength = helper.getRandomArrayLength();
            var numbers = helper.getRandomNumbers(numbersLength);

            var expected = numbers[0];
            var i;
            for (i = 1; i < numbers.length; i += 1) {
                expected -= numbers[i];
            }

            var actual = sut.subtract(numbers);
            assert.equal(expected, actual);
        });


        it('should handle negative numbers', function () {
            var numbers = [-2, -3];
            var expected = 1;
            var actual = sut.subtract(numbers);
            assert.equal(expected, actual);
        });

    });
});
