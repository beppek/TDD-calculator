'use strict';

var chai = require('chai');
var jsdom = require('mocha-jsdom');
var View = require('../app/view/View');

var assert = chai.assert;

describe('view', function () {
    var sut = new View();
    jsdom();

    it('should add eventlisteners to buttons in div with id calculator', function () {
        document.body.innerHTML = '<div id="calculator"><button>1</buttton><button>2</buttton></div><p id="input"></p>';
        sut.addEvents();
        var btns = document.getElementsByTagName('button');
        var i;
        for (i = 0; i < btns.length; i += 1) {
            btns[i].click();
        }
        var expected = '1 2 ';
        var actual = document.getElementById('input').firstChild.nodeValue;
        assert.equal(actual, expected);
    });

});
