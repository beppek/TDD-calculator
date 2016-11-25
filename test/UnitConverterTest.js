'use strict';

var chai = require('chai');
var UnitConverter = require('../app/model/UnitConverter');

var assert = chai.assert;

describe('UnitConverter', function () {

    describe('DistanceConversion', function () {

        var sut = new UnitConverter();

        it('should convert kilometers to miles', function () {
            var km = 10;
            var expected = 6.2137;
            var actual = sut.kmToMiles(km);
            assert.equal(expected, actual);
        });

    });

});
