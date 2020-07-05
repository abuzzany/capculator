const display = document.getElementById('')

let prevOperand = ''
let currentOperand = ''
let operator = ''
let bufferOperands = []
let stackOperations = []

function onClickOperand(event){
    value = event.target.value
    prevOperand = prevOperand + value
    currentOperand = value

    bufferOperands.push(value)
    this.display.innerHTML = prevOperand
}

function onClickOperator(event){
    value = event.target.value

    if(bufferOperands.length != 0){
        stackOperations.push(bufferOperands.join(''))
        stackOperations.push(value)
        bufferOperands = []
        prevOperand = ''
        operator = value
    }
}

function onClickEqual(event){
    value = event.target.value

    if(bufferOperands.length != 0){
        stackOperations.push(bufferOperands.join(''))

        result = ''

        switch(operator){
            case "+":
                result = parseFloat(stackOperations[0]) + parseFloat(stackOperations[2])
                break
            case "-":
                result = parseFloat(stackOperations[0]) - parseFloat(stackOperations[2])
                break
            case "*":
                result = parseFloat(stackOperations[0]) * parseFloat(stackOperations[2])
                break
            case "/":
                result = parseFloat(stackOperations[0]) / parseFloat(stackOperations[2])
                break
        }

        bufferOperands = []
        stackOperations = []
        operator = ''
        prevOperand = ''

        this.display.innerHTML = result
    }
}

function onClickPoint(event){
    value = event.target.value
    this.display.innerHTML = value
}

function onClickClear(event){
    value = event.target.value
    this.display.innerHTML = value
}
