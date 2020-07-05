const display = document.getElementById('')

let prevOperand = ''
let currentOperand = ''
let operator = ''
let bufferOperands = []

function onClickOperand(event){
    value = event.target.value
    prevOperand = prevOperand + value
    currentOperand = value

    bufferOperands.push(prevOperand)
    this.display.innerHTML = prevOperand
}

function onClickOperator(event){
    value = event.target.value
    

}

function onClickEqual(event){
    value = event.target.value
    this.display.innerHTML = value
}

function onClickPoint(event){
    value = event.target.value
    this.display.innerHTML = value
}

function onClickClear(event){
    value = event.target.value
    this.display.innerHTML = value
}
