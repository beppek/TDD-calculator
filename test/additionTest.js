'use strict';

var chai = require('chai');
var Calculator = require('../app/model/Calculator');
var helper = require('./testHelpers/testHelper');

var assert = chai.assert;


describe('Calculator', function () {

    var sut = new Calculator();

    describe('Addition', function () {

        it('should add 2 numbers', function () {
            var numbers = [1,2];
            var expected = 3;
            var actual = sut.add(numbers);
            assert.equal(expected, actual);
        });


        it('should throw TypeError if params are NaN', function () {
            var notNumbers = ['a', 'b', 'c'];
            assert.throws(function() {sut.add(notNumbers)}, TypeError, "Input was not a number");
        });


        it('should add more than 2 numbers', function () {
            var numbersLength = helper.getRandomArrayLength();
            var numbers = helper.getRandomNumbers(numbersLength);

            var expected = 0;
            numbers.forEach(function(num) {
                expected += num;
            });

            var actual = sut.add(numbers);

            assert.equal(expected, actual);
        });


    });
});
