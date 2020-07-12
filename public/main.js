"use strict";

var _capculator = _interopRequireDefault(require("./capculator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var operandButtons = document.querySelectorAll('[data-operand]');
var operatorButtons = document.querySelectorAll('[data-operator]');
var clearButton = document.querySelector('[data-clear]');
var clearAllButton = document.querySelector('[data-clear-all]');
var buffer = document.getElementById('buffer');
var stack = document.getElementById('stack');
var divCurrentOperand = document.getElementById('divCurrentOperand');
var divPrevOperand = document.getElementById('divPrevOperand');
var divCurrentOperator = document.getElementById('divCurrentOperator');
var display = document.getElementById('display');
var capculator = new _capculator["default"](display, buffer, stack, divCurrentOperand, divPrevOperand, divCurrentOperator);
operandButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    capculator.addOperand(button.innerText);
    capculator.updateDisplay();
  });
});
operatorButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    capculator.addOperator(button.innerText);
    if (button.innerText === '=') capculator.updateDisplay();
  });
});
clearButton.addEventListener('click', function () {
  capculator.clear();
  capculator.updateDisplay();
});
clearAllButton.addEventListener('click', function () {
  capculator.clearAll();
  capculator.updateDisplay();
});