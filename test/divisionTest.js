'use strict';

var chai = require('chai');
var Calculator = require('../app/model/Calculator');
var helper = require('./testHelpers/testHelper');

var assert = chai.assert;

describe('Calculator', function () {

    describe('Division', function () {

        var sut = new Calculator();

        it('should divide 2 numbers', function () {
            var numbers = [10, 2];
            var expected = 5;
            var actual = sut.divide(numbers);
            assert.equal(actual, expected);
        });


        it('should throw TypeError if params are NaN', function () {
            var notNumbers = ['a', 'b', 'c'];
            assert.throws(function() {sut.divide(notNumbers)}, TypeError, "Input was not a number");
        });

        it('should divide more than 2 numbers', function () {
            var numbersLength = helper.getRandomArrayLength();
            var numbers = helper.getRandomNumbers(numbersLength);

            var expected = numbers[0];
            var i;
            for (i = 1; i < numbers.length; i += 1) {
                expected /= numbers[i];
            }

            var actual = sut.divide(numbers);
            assert.equal(expected, actual);
        });


    });

});
