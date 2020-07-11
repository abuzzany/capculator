"use strict";

var _capculator = _interopRequireDefault(require("./capculator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var buffer = document.getElementById('buffer');
var stack = document.getElementById('stack');
var divCurrentOperand = document.getElementById('divCurrentOperand');
var divPrevOperand = document.getElementById('divPrevOperand');
var divCurrentOperator = document.getElementById('divCurrentOperator');
var display = document.getElementById('display');
var capculator = new _capculator["default"](display, buffer, stack, selOperand, divCurrentOperand, divPrevOperand, divCurrentOperator);

function onClickOperand(event) {
  capculator.addOperand(event.target.value);
  capculator.updateDisplay();
}

function onClickOperator(event) {
  capculator.addOperator(event.target.value);
}

function onClickEqual(event) {
  capculator.addOperator(event.target.value);
  capculator.updateDisplay();
}

function onClickPoint(event) {
  capculator.addOperand(event.target.value);
  capculator.updateDisplay();
}

function onClickClearAll(event) {
  capculator.clearAll();
  this.display.innerHTML = 0;
}

function onClickClear(event) {
  capculator.clear();
  this.display.innerHTML = 0;
}