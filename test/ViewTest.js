'use strict';

var chai = require('chai');
var jsdom = require('mocha-jsdom');
var View = require('../app/view/View');

var assert = chai.assert;

describe('CalculatorView', function () {
    jsdom();
    var sut;

    it('should add eventlisteners to buttons in div with id calculator', function () {
        createHTMLStub();
        sut.init();
        var btns = document.getElementsByTagName('button');
        var i;
        for (i = 0; i < btns.length; i += 1) {
            var value = btns[i].innerHTML;
            if (!isNaN(value)) {
                btns[i].click();
            }
        }
        var expected = '123';
        var actual = document.getElementById('inputDisplay').innerHTML;
        assert.equal(actual, expected);
    });

    function createHTMLStub() {
        document.body.innerHTML =   '<div id="app">' +
                                        '<p id="inputDisplay"></p>' +
                                    '<div id="calculator">' +
                                        '<div id="operators">' +
                                            '<button>+</button><button>-</button><button>/</button><button>*</button>' +
                                        '</div>' +
                                        '<div>' +
                                            '<button>1</button><button>2</button><button>3</button>' +
                                        '</div>' +
                                        '<div>' +
                                            '<button id="calculate">=</button>' +
                                        '</div>' +
                                    '</div>';
        sut = new View();
    }

});
