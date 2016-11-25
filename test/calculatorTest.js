'use strict';

var chai = require('chai');
var Calculator = require('../app/model/Calculator');

var assert = chai.assert;


describe('Calculator', function () {

    var sut = new Calculator();

    describe('Division', function () {

        it('should add 2 numbers', function () {
            var a = 1;
            var b = 2;
            var expected = a + b;
            var actual = sut.add(a, b);
            assert.equal(expected, actual);
        });

    });
});
