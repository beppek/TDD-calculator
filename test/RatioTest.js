'use strict';
var chai = require('chai');
var Ratio = require('../app/model/Ratio');

var assert = chai.assert;

describe('Ratio', function () {
    var sut = new Ratio();

    it('should return correct ratio for km to miles', function () {
        var expected = 0.62137;
        var actual = sut.km('miles');
        assert.equal(actual, expected);
    });


});
