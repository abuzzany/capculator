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
    if (prevOperand === '') return
    
    value = event.target.value
    emptyBufferOperands()
    operator = value
    stackOperations.push(operator)
    prevOperand = ''
}

function onClickEqual(event){
    if (prevOperand === '' || operator === '') return

    emptyBufferOperands()

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

    stackOperations = []
    operator = ''
    prevOperand = ''

    this.display.innerHTML = result
}

function onClickPoint(event){
    value = event.target.value
    this.display.innerHTML = value
}

function onClickClear(event){
    clear()
    this.display.innerHTML = 0
}

function emptyBufferOperands(){
    if(bufferOperands.length != 0){
        stackOperations.push(bufferOperands.join(''))
        bufferOperands = []
    }
}

function clear(){
    this.operator = ''
    this.prevOperand = ''
    this.stackOperations  = []
    this.bufferOperands = []
}
