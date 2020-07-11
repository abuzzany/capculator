"use strict";

var buffer = document.getElementById('buffer');
var stack = document.getElementById('stack');
var divCurrentOperand = document.getElementById('divCurrentOperand');
var divPrevOperand = document.getElementById('divPrevOperand');
var divCurrentOperator = document.getElementById('divCurrentOperator');
var display = document.getElementById('display');
var capculator = new Capculator(display, buffer, stack, selOperand, divCurrentOperand, divPrevOperand, divCurrentOperator);

function onClickOperand(event) {
  value = event.target.value;
  capculator.addOperand(value);
  capculator.updateDisplay();
}

function onClickOperator(event) {
  value = event.target.value;
  capculator.addOperator(value);
}

function onClickEqual(event) {
  value = event.target.value;
  capculator.addOperator(value);
  capculator.updateDisplay();
}

function onClickPoint(event) {
  value = event.target.value;
  capculator.addOperand(value);
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