'use strict';
var chai = require('chai');

var assert = chai.assert;


describe('Numbers helper', function () {
    var sut = require('../app/model/helpers/numbers');

    it('should throw TypeError if input is not a number', function () {
        var notNumbers = ['a', 'b'];
        assert.throws(function() {sut.checkAreNumbers(notNumbers)}, Error, "Input was not a number")
    });

});
