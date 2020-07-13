import Capculator from './capculator'
import '../css/style.css';

const operandButtons = document.querySelectorAll('[data-operand]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const clearButton = document.querySelector('[data-clear]')
const clearAllButton = document.querySelector('[data-clear-all]')
const display = document.querySelector('[data-display]')

const capculator = new Capculator(display)

operandButtons.forEach(button => {
  button.addEventListener('click', () => {
    capculator.addOperand(button.innerText)
    capculator.updateDisplay()
  })
})

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    capculator.addOperator(button.innerText)
    if (button.innerText === '=') capculator.updateDisplay()
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
