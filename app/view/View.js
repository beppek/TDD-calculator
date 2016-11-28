'use strict';

function View() {

}

View.prototype.addEvents = function() {
    var calculatorDiv = document.getElementById('calculator');
    var calculatorBtns = calculatorDiv.getElementsByTagName('button');
    var i;
    for (i = 0; i < calculatorBtns.length; i += 1) {
        calculatorBtns[i].addEventListener('click', function(event) {
            View.prototype.printToInputDisplay(event.target.firstChild.nodeValue);
        });
    }

};

View.prototype.printToInputDisplay = function(value) {
    var inputDisplay = document.getElementById('input');
    var inputValue = document.createTextNode(value + " ");
    inputDisplay.appendChild(inputValue);
};

module.exports = View;