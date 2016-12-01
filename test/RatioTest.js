'use strict';
var chai = require('chai');
var Ratio = require('../app/model/Ratio');

var assert = chai.assert;

describe('Ratio', function () {
    var sut = new Ratio();

    describe('Kilometer Ratio', function () {

        it('should return correct ratio for km to miles', function () {
            var expected = 0.62137;
            var actual = sut.km('miles');
            assert.equal(actual, expected);
        });

        it('should return ratio for km to meters', function () {
            var expected = 1000;
            var actual = sut.km('meters');
            assert.equal(actual, expected);
        });

        it('should return ratio for km to yards', function () {
            var expected = 1093.6133;
            var actual = sut.km('yards');
            assert.equal(actual, expected);
        });

        it('should return ratio for km to feet', function () {
            var expected = 3280.8399;
            var actual = sut.km('feet');
            assert.equal(actual, expected);
        });

    });

    describe('Miles Ratio', function () {

        it('should return correct ratio for km', function () {
            var expected = 1.609344;
            var actual = sut.miles('km');
            assert.equal(actual, expected);
        });

        it('should return correct ratio for meters', function () {
            var expected = 1609.344;
            var actual = sut.miles('meters');
            assert.equal(actual, expected);
        });

        it('should return ratio for yards', function () {
            var expected = 1760;
            var actual = sut.miles('yards');
            assert.equal(actual, expected);
        });


    });

});
