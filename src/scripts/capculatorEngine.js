class CapculatorEngine {
  constructor (stackOperations) {
    this.firstOperand = stackOperations[0]
    this.operator = stackOperations[1]
    this.secondOperand = stackOperations[2]
  }

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
