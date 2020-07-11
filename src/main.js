const buffer = document.getElementById('buffer')
const stack = document.getElementById('stack')
const divCurrentOperand = document.getElementById('divCurrentOperand')
const divPrevOperand = document.getElementById('divPrevOperand')
const divCurrentOperator = document.getElementById('divCurrentOperator')
const display = document.getElementById('display')

const capculator = new Capculator(display, buffer, stack, selOperand, divCurrentOperand, divPrevOperand, divCurrentOperator)

function onClickOperand(event){
    value = event.target.value

    capculator.addOperand(value)
    capculator.updateDisplay()
}

function onClickOperator(event){
    value = event.target.value

    capculator.addOperator(value)
}

function onClickEqual(event){
   value = event.target.value

   capculator.addOperator(value)
   capculator.updateDisplay()
}

function onClickPoint(event){
    value = event.target.value

    capculator.addOperand(value)
    capculator.updateDisplay()
}

function onClickClearAll(event){
    capculator.clearAll()
    this.display.innerHTML = 0
}

function onClickClear(event){
    capculator.clear()
    this.display.innerHTML = 0
}
