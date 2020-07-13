import CapculatorEngine from './capculatorEngine'

/** This class works as a interface to handle UI calculator. */
class Capculator {
  /**
   * Create an instace of Capculator.
   * @param {HTMLDivElement} display - The display value.
   */
  constructor (display) {
    this.display = display
    this.prevOperand = ''
    this.currentOperand = ''
    this.currentOperator = ''
    this.displayResult = ''
    this.bufferOperands = []
    this.stackOperations = []
    this.lastStackOperations = []
  }

  /**
   * Add an operand to the operation stack.
   * @param {string} operation - The operation value.
   * @return {void}
   */
  addOperand (number) {
    if (this._operandIsFloatPoint(number) && this._currentOperandContainsFloatPoint()) return
    if (this._operandIsZero(number) && this._currentOperandStartsWithZero() && !this._currentOperandContainsFloatPoint()) return
    // If exists a previous operation and the user starts to digit again,
    // clear previous operation in order to starts a new one
    if (this._wasComputedAnOperation()) this.clearAll()
    if (this._operandIsFloatPoint(number) && this._currentOperandIsEmpty()) number = '0.'

    this.bufferOperands.push(number)
    this.currentOperand = this.currentOperand + number
  }

  /**
   * Add an operand to the operation stack and compute the operation
   * if the operation stack is completed.
   * @param {string} operator - The operator value.
   * @return {void}
   */
  addOperator (operator) {
    if (this._currentOperandIsEmpty()) return

    this._emptyBufferOperands()

    if (operator === '=') {
      // Performs the last operation
      if (this._wasComputedAnOperation()) this._assignLastOperation()
      this._computeOperation()

      this.prevOperand = ''
      return
    } else {
      if (this._isReadyToComputeOperation()) {
        this._computeOperation()
        this.updateDisplay()
      }

      this.prevOperand = this.currentOperand
      this.currentOperand = ''
      this.lastStackOperations = []
    }

    this.stackOperations.push(operator)
    this.currentOperator = operator
  }

  /**
   * Update an HTMLDivElement that works as an UI display.
   * @return {void}
   */
  updateDisplay () {
    if (this._currentOperandIsEmpty()) {
      this.display.innerText = '0'
      return
    }
    this.display.innerText = this.currentOperand.toString()
  }

  /**
   * Clear an HTMLDivElement  that works as an UI display and also
   * clear the stack operations.
   * @return {void}
   */
  clearAll () {
    this.prevOperand = ''
    this.currentOperand = ''
    this.currentOperator = ''
    this.bufferOperands = []
    this.stackOperations = []
    this.lastStackOperations = []
  }

  /**
   * Clear an HTMLDivElement and that works as an UI display and also
   * clear the las operand setted.
   * @return {void}
   */
  clear () {
    this.currentOperand = ''
    this.bufferOperands = []
  }

  /**
   * Empty the bufferOperands into the operation stack.
   * @return {void}
   */
  _emptyBufferOperands () {
    if (this.bufferOperands.length !== 0) {
      this.stackOperations.push(this.bufferOperands.join(''))
      this.bufferOperands = []
    }
  }

  /**
   * Create an instance of CapculatorEngine and compute the stack operations.
   * @return {void}
   */
  _computeOperation () {
    if (!this._isReadyToComputeOperation()) return

    const capEnginge = new CapculatorEngine(this.stackOperations)
    this.currentOperand = capEnginge.compute().toString()

    this.lastStackOperations = this.stackOperations
    this.stackOperations = []
    this.stackOperations.push(this.currentOperand)
  }

  /**
   * Assing the las operation stack to compute it again.
   * @return {void}
   */
  _assignLastOperation () {
    this.stackOperations[1] = this.lastStackOperations[1]
    this.stackOperations[2] = this.lastStackOperations[2]

    this.prevOperand = this.currentOperand
    this.currentOperand = this.lastStackOperations[2]
    this.currentOperator = this.lastStackOperations[1]
  }

  /**
   * Guard to check if the operand is a float point.
   * @param {string} number - The number value.
   * @return {boolean}
   */
  _operandIsFloatPoint (number) {
    return (number === '.')
  }

  /**
   * Guard to check if the current operand contains a float point.
   * @return {boolean}
   */
  _currentOperandContainsFloatPoint () {
    return this.currentOperand.includes('.')
  }

  /**
   * Guard to check if the operand is zero.
   * @param {string} number - The number value.
   * @return {boolean}
   */
  _operandIsZero (number) {
    return (number === '0')
  }

  /**
   * Guard to check if the current operand starts with zero.
   * @return {boolean}
   */
  _currentOperandStartsWithZero () {
    return (this.currentOperand.startsWith('0'))
  }

  /**
   * Guard to check if the current operand is empty.
   * @return {boolean}
   */
  _currentOperandIsEmpty () {
    return (this.currentOperand === '')
  }

  /**
   * Guard to check if the stack operarion is completed to compute an operation.
   * @return {boolean}
   */
  _isReadyToComputeOperation () {
    return (
      this.prevOperand !== '' && this.currentOperator !== '' && this.currentOperand !== ''
    )
  }

  /**
   * Guard to check if the there was computed an operation.
   * @return {boolean}
   */
  _wasComputedAnOperation () {
    return (this.lastStackOperations.length > 0)
  }
}

export default Capculator
