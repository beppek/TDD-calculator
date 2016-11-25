'use strict';

var chai = require('chai');
var DistanceConverter = require('../app/model/DistanceConverter.js');

var assert = chai.assert;

describe('DistanceConverter', function () {

    var sut = new DistanceConverter();

    it('should convert kilometers to miles', function () {
        var km = 10;
        var expected = 6.2137;
        var actual = sut.kmToMiles(km);
        assert.equal(expected, actual);
    });


    it('should convert miles to kilometers', function () {
        var miles = 10;
        var expected = 16.09344;
        var actual = sut.milesToKm(miles);
        assert.equal(expected, actual);
    });

});
