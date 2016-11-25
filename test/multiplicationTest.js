'use strict';

var chai = require('chai');
var Calculator = require('../app/model/Calculator');

var assert = chai.assert;

describe('Calculator', function () {

    describe('Multiplication', function () {

        var sut = new Calculator();

        it('should multiply 2 numbers', function () {
            var numbers = [2,3];
            var expected = 6;
            var actual = sut.multiply(numbers);
            assert.equal(expected, actual);
        });

        it('should throw TypeError if params are NaN', function () {
            var notNumbers = ['a', 'b', 'c'];
            assert.throws(function() {sut.multiply(notNumbers)}, TypeError, "Input was not a number");
        });


        it('should multiply more than 2 numbers', function () {
            var numbers = [];
            var numbersLength = Math.floor((Math.random() * 10) + 3);

            var i;
            for (i = 0; i < numbersLength; i += 1) {
                var randomNumber = Math.floor((Math.random() * 100) + 1);
                numbers.push(randomNumber);
            }

            var expected = numbers[0];
            for (i = 1; i < numbers.length; i += 1) {
                expected *= numbers[i];
            }

            var actual = sut.multiply(numbers);
            assert.equal(expected, actual);
        });


    });

});
