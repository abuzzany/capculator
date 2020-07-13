import CapculatorEngine from './capculatorEngine'
class Capculator {
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

  updateDisplay () {
    if (this._currentOperandIsEmpty()) {
      this.display.innerText = '0'
      return
    }
    this.display.innerText = this.currentOperand.toString()
  }

  clearAll () {
    this.prevOperand = ''
    this.currentOperand = ''
    this.currentOperator = ''
    this.bufferOperands = []
    this.stackOperations = []
    this.lastStackOperations = []
  }

  clear () {
    this.currentOperand = ''
    this.bufferOperands = []
  }

  _emptyBufferOperands () {
    if (this.bufferOperands.length !== 0) {
      this.stackOperations.push(this.bufferOperands.join(''))
      this.bufferOperands = []
    }
  }

  _computeOperation () {
    if (!this._isReadyToComputeOperation()) return

    const capEnginge = new CapculatorEngine(this.stackOperations)
    this.currentOperand = capEnginge.compute().toString()

    this.lastStackOperations = this.stackOperations
    this.stackOperations = []
    this.stackOperations.push(this.currentOperand)
  }

  _assignLastOperation () {
    this.stackOperations[1] = this.lastStackOperations[1]
    this.stackOperations[2] = this.lastStackOperations[2]

    this.prevOperand = this.currentOperand
    this.currentOperand = this.lastStackOperations[2]
    this.currentOperator = this.lastStackOperations[1]
  }

  _operandIsFloatPoint (number) {
    return (number === '.')
  }

  _currentOperandContainsFloatPoint () {
    return this.currentOperand.includes('.')
  }

  _operandIsZero (number) {
    return (number === '0')
  }

  _currentOperandStartsWithZero () {
    return (this.currentOperand.startsWith('0'))
  }

  _currentOperandIsEmpty () {
    return (this.currentOperand === '')
  }

  _isReadyToComputeOperation () {
    return (this.prevOperand !== '' && this.currentOperator !== '' && this.currentOperand !== '')
  }

  _wasComputedAnOperation () {
    return (this.lastStackOperations.length > 0)
  }
}

export default Capculator
