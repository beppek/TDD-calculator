'use strict';

function View() {

}

View.prototype.init = function() {
    var calculatorDiv = document.getElementById('calculator');
    var calculatorBtns = calculatorDiv.getElementsByTagName('button');
    var i;
    for (i = 0; i < calculatorBtns.length; i += 1) {
        calculatorBtns[i].addEventListener('click', function(event) {
            this.handleClick(event);
        }.bind(this));
    }

};

View.prototype.handleClick = function(event) {
    var target = event.target;
    var value = target.firstChild.nodeValue;
    this.printToInputDisplay(value);
};

View.prototype.printToInputDisplay = function(value) {
    var inputDisplay = document.getElementById('input');
    var inputValue = document.createTextNode(value);
    inputDisplay.appendChild(inputValue);
};

module.exports = View;