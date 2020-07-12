class CapculatorEngine {
  constructor (stackOperations, currentOperator) {
    this.stackOperations = stackOperations
    this.currentOperator = currentOperator
  }

  compute () {
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
}

export default CapculatorEngine
