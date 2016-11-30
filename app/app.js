var View = require('./view/View');
var Calculator = require('./model/Calculator');
var v;

document.addEventListener('DOMContentLoaded', function() {
    v = new View(new Calculator());
});