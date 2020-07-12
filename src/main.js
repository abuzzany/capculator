import Capculator from './capculator'

const operandButtons= document.querySelectorAll('[data-operand]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const clearButton = document.querySelector('[data-clear]')
const clearAllButton = document.querySelector('[data-clear-all]')

const buffer = document.getElementById('buffer')
const stack = document.getElementById('stack')
const divCurrentOperand = document.getElementById('divCurrentOperand')
const divPrevOperand = document.getElementById('divPrevOperand')
const divCurrentOperator = document.getElementById('divCurrentOperator')
const display = document.getElementById('display')

const capculator = new Capculator(display, buffer, stack, selOperand, divCurrentOperand, divPrevOperand, divCurrentOperator)

operandButtons.forEach(button => {
    button.addEventListener('click', () => {
      capculator.addOperand(button.innerText)
      capculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      capculator.addOperator(button.innerText)
      if(button.innerText === '=') capculator.updateDisplay()
    })
})

clearButton.addEventListener('click', () => {
    capculator.clear()
    capculator.updateDisplay()
})

clearAllButton.addEventListener('click', () => {
    capculator.clearAll()
    capculator.updateDisplay()
})
