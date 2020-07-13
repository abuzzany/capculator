class CapculatorEngine {
  constructor (stackOperations) {
    this.stackOperations = stackOperations
  }

  compute () {
    let result = 0

    switch (this.stackOperations[1]) {
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
