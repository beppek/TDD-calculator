'use strict';

var chai = require('chai');
var Calculator = require('../app/model/Calculator');

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


    });

});
