'use strict';

var chai = require('chai');
var DistanceConverter = require('../app/model/DistanceConverter.js');
var kmTo = require('../app/model/kmConversionEnum');

var assert = chai.assert;

describe('DistanceConverter', function () {

    var sut = new DistanceConverter();

    it('should convert kilometers to miles', function () {
        var km = 10;
        var expected = 6.2137;
        var actual = sut.kmConversion(km, kmTo.miles);
        assert.equal(actual, expected);
    });

    it('should convert km to yards', function () {
        var km = 1;
        var expected = 1093.61330;
        var actual = sut.kmConversion(km, kmTo.yards);
        assert.equal(actual, expected);
    });


    it('should convert km to meters', function () {
        var km = 1;
        var expected = 1000;
        var actual = sut.kmConversion(km, kmTo.meters);
        assert.equal(actual, expected);
    });


    it('should convert miles to kilometers', function () {
        var miles = 10;
        var expected = 16.09344;
        var actual = sut.milesToKm(miles);
        assert.equal(actual, expected);
    });

    it('should convert meters to yards', function () {
        var meters = 100;
        var expected = 109.36133;
        var actual = sut.metersToYards(meters);
        assert.equal(actual, expected);
    });

    it('should convert yards to meters', function () {
        var yards = 100;
        var expected = 91.44000;
        var actual = sut.yardsToMeters(yards);
        assert.equal(actual, expected);
    });


});
