'use strict';

var chai = require('chai');
var Calculator = require('../app/model/Calculator');

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

    });
});
