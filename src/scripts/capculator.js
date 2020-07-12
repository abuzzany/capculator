export default class Capculator {
  constructor (display) {
    this.display = display
    this.prevOperand = ''
    this.currentOperand = ''
    this.prevOperator = ''
    this.currentOperator = ''
    this.displayResult = ''
    this.bufferOperands = []
    this.stackOperations = []
  }

  addOperand (number) {
    // Guards for:
    // Prevent add several float points
    // Prevent add several zeros if there is no and operand but permits add it
    // after a float point
    if (number === '.' && this.currentOperand.includes('.')) return
    if (number === '0' && this.currentOperand.startsWith('0') && !this.currentOperand.includes('.')) return

    // If exists a previous operation and the user starts to digit again
    // clear previous operation to starts a new one
    if (this.currentOperator === '=') {
      this.clearAll()
    }

    // Add zero if the operand is a float point and there is no a ccurrentOperand
    if (number === '.' && this.currentOperand === '') {
      number = '0.'
    }

    this.bufferOperands.push(number)
    this.currentOperand = this.currentOperand + number
  }

  addOperator (operator) {
    // Returns if there is no at least an operand to perform an operation
    if (this.currentOperand === '') return

    this.emptyBufferOperands()

    if (operator === '=') {
      this.calculateResult()

      this.prevOperand = ''
    } else {
      this.stackOperations.push(operator)

      // Performs the operations if exists all the needed variables
      if (this.prevOperand !== '' && this.currentOperator !== '' && this.currentOperand !== '') {
        this.calculateResult()
        this.stackOperations.push(this.currentOperator)
        this.updateDisplay()
      }

      this.prevOperand = this.currentOperand
      this.currentOperand = ''
    }

    this.currentOperator = operator
  }

  calculateResult () {
    if (this.prevOperand === '' || this.currentOperator === '' || this.currentOperand === '') return

    this.currentOperand = this.calculate()
    this.stackOperations = []
    this.bufferOperands.push(this.currentOperand)
    this.emptyBufferOperands()
  }

  calculate () {
    let result

    switch (this.currentOperator) {
      case '+':
        result = parseFloat(this.stackOperations[0]) + parseFloat(this.stackOperations[2])
        break
      case '-':
        result = parseFloat(this.stackOperations[0]) - parseFloat(this.stackOperations[2])
        break
      case '*':
        result = parseFloat(this.stackOperations[0]) * parseFloat(this.stackOperations[2])
        break
      case '/':
        result = parseFloat(this.stackOperations[0]) / parseFloat(this.stackOperations[2])
        break
    }

    return result
  }

  emptyBufferOperands () {
    if (this.bufferOperands.length !== 0) {
      this.stackOperations.push(this.bufferOperands.join(''))
      this.bufferOperands = []
    }
  }

  updateDisplay () {
    this.log()
    this.display.innerText = this.currentOperand.toString()
  }

  clearAll () {
    this.prevOperand = ''
    this.currentOperand = ''
    this.prevOperator = ''
    this.currentOperator = ''
    this.bufferOperands = []
    this.stackOperations = []
  }

  clear () {
    this.currentOperand = ''
    this.bufferOperands = []
  }

  log () {
    console.log('Stack: ' + this.stackOperations)
    console.log('Buffer: ' + this.bufferOperands)
    console.log('currentOperand: ' + this.currentOperand)
    console.log('prevOperand: ' + this.prevOperand)
    console.log('currentOperator: ' + this.currentOperator)
    console.log('prevOperator: ' + this.prevOperator)
    console.log('------------------------------')
  }
}
