'use strict';

var chai = require('chai');
var Calculator = require('../app/model/Calculator');

var assert = chai.assert;


describe('Calculator', function () {

    var sut = new Calculator();

    describe('Addition', function () {

        it('should add 2 numbers', function () {
            var a = 1;
            var b = 2;
            var expected = a + b;
            var actual = sut.add(a, b);
            assert.equal(expected, actual);
        });


        it('should throw TypeError if params are NaN', function () {
            var a = 'a';
            var b = 'b';
            assert.throws(function() {sut.add(a,b)}, TypeError, "Input was not a number");
        });


        it('should add more than 2 numbers', function () {
            var numbersArray = [];
            var numbersArrayLength = Math.floor((Math.random() * 10) + 3);

            var i;
            for (i = 0; i < numbersArrayLength; i += 1) {
                var randomNumber = Math.floor((Math.random() * 100) + 1);
                numbersArray.push(randomNumber);
            }

            var expected = 0;
            numbersArray.forEach(function(num) {
                expected += num;
            });

            var actual = sut.add(numbersArray);

            assert.equal(expected, actual);
        });


    });
});
