"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Capculator = /*#__PURE__*/function () {
  function Capculator(display, buffer, stack, divCurrentOperand, divPrevOperand, divCurrentOperator) {
    _classCallCheck(this, Capculator);

    this.display = display;
    this.buffer = buffer;
    this.stack = stack;
    this.divCurrentOperand = divCurrentOperand;
    this.divPrevOperand = divPrevOperand;
    this.divCurrentOperator = divCurrentOperator;
    this.prevOperand = '';
    this.currentOperand = '';
    this.prevOperator = '';
    this.currentOperator = '';
    this.displayResult = '';
    this.bufferOperands = [];
    this.stackOperations = [];
  }

  _createClass(Capculator, [{
    key: "addOperand",
    value: function addOperand(number) {
      // Guards for:
      // Prevent add float point if there is no an operand
      // Prevent add several float points
      // Prevent add several zeros if there is no and operand but permits add it
      // after a float point
      if (number === '.' && this.currentOperand === '') return;
      if (number === '.' && this.currentOperand.includes('.')) return;
      if (number === '0' && this.currentOperand.startsWith('0') && !this.currentOperand.includes('.')) return; // If exists a previous operation and the user starts to digit again
      // clear previous operation to starts a new one

      if (this.currentOperator == '=') {
        this.clearAll();
      }

      this.bufferOperands.push(number);
      this.currentOperand = this.currentOperand + number;
    }
  }, {
    key: "addOperator",
    value: function addOperator(operator) {
      // Returns if there is no at least an operand to perform an operation
      if (this.currentOperand === '') return;
      this.emptyBufferOperands();

      if (operator === '=') {
        this.calculateResult();
        this.prevOperand = '';
      } else {
        this.stackOperations.push(operator); // Performs the operations if exists all the needed variables

        if (this.prevOperand !== '' && this.currentOperator !== '' && this.currentOperand !== '') {
          this.calculateResult();
          this.stackOperations.push(this.currentOperator);
          this.updateDisplay();
        }

        this.prevOperand = this.currentOperand;
        this.currentOperand = '';
      }

      this.currentOperator = operator;
    }
  }, {
    key: "calculateResult",
    value: function calculateResult() {
      if (this.prevOperand === '' || this.currentOperator === '' || this.currentOperand === '') return;
      this.currentOperand = this.calculate();
      this.stackOperations = [];
      this.bufferOperands.push(this.currentOperand);
      this.emptyBufferOperands();
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var result;

      switch (this.currentOperator) {
        case "+":
          result = parseFloat(this.stackOperations[0]) + parseFloat(this.stackOperations[2]);
          break;

        case "-":
          result = parseFloat(this.stackOperations[0]) - parseFloat(this.stackOperations[2]);
          break;

        case "*":
          result = parseFloat(this.stackOperations[0]) * parseFloat(this.stackOperations[2]);
          break;

        case "/":
          result = parseFloat(this.stackOperations[0]) / parseFloat(this.stackOperations[2]);
          break;
      }

      return result;
    }
  }, {
    key: "emptyBufferOperands",
    value: function emptyBufferOperands() {
      if (this.bufferOperands.length != 0) {
        this.stackOperations.push(this.bufferOperands.join(''));
        this.bufferOperands = [];
      }
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      this.buffer.innerHTML = "Buffer " + this.bufferOperands;
      this.stack.innerHTML = "Stack " + this.stackOperations;
      this.divCurrentOperand.innerHTML = "divCurrentOperand " + this.currentOperand;
      this.divPrevOperand.innerHTML = "divPrevOperand " + this.prevOperand;
      this.divCurrentOperator.innerHTML = "divCurrentOperator " + this.currentOperator;
      this.display.innerHTML = this.currentOperand;
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.prevOperand = '';
      this.currentOperand = '';
      this.prevOperator = '';
      this.currentOperator = '';
      this.bufferOperands = [];
      this.stackOperations = [];
    }
  }, {
    key: "clear",
    value: function clear() {
      this.currentOperand = '';
      this.bufferOperands = [];
    }
  }]);

  return Capculator;
}();