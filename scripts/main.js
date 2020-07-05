const display = document.getElementById('')

let prevOperand = ''
let currentOperand = ''
let operator = ''

function onClickOperand(event){
    value = event.target.value
    prevOperand = prevOperand + value
    currentOperand = value

    this.display.innerHTML = prevOperand
}

function onClickOperator(event){
    value = event.target.value
    this.display.innerHTML = value
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
