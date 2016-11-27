'use strict';
var chai = require('chai');

var assert = chai.assert;


describe('Numbers helper', function () {
    var sut = require('../app/model/helpers/numbers');

    it('should throw TypeError if input is not a number', function () {
        var notNumbers = ['a', 'b'];
        assert.throws(function() {sut.checkAreNumbers(notNumbers)}, TypeError, "Input was not a number")
    });

    it('should not throw any error if input is numbers', function () {
        var numbers = [1,2];
        assert.doesNotThrow(function() {sut.checkAreNumbers(numbers)});
    });

    it('should throw error if input is negative', function () {
        var negativeNumbers = [-1,-2];
        assert.throws(function() {sut.checkPositive(negativeNumbers)}, Error, "Input can't be a negative number");
    });

    it('should not throw error if numbers are positive', function () {
        var numbers = [1,2];
        assert.doesNotThrow(function() {sut.checkPositive(numbers)});
    });

});
