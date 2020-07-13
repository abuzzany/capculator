/** This class works to compute basic arithmetic operation. */
class CapculatorEngine {
  /**
   * Create an instace of CapculatorEngine.
   * @param {Array} stackOperations - The stackOperations value.
   */
  constructor (stackOperations) {
    this.firstOperand = stackOperations[0]
    this.operator = stackOperations[1]
    this.secondOperand = stackOperations[2]
  }

  /**
   * Compute an arithmetic operation.
   * @retutn {Float} result - The result value.
   */
  compute () {
    let result = 0

    switch (this.operator) {
      case '+':
        result = parseFloat(this.firstOperand) + parseFloat(this.secondOperand)
        break
      case '-':
        result = parseFloat(this.firstOperand) - parseFloat(this.secondOperand)
        break
      case '*':
        result = parseFloat(this.firstOperand) * parseFloat(this.secondOperand)
        break
      case '/':
        result = parseFloat(this.firstOperand) / parseFloat(this.secondOperand)
        break
    }

    return result
  }
}

export default CapculatorEngine
