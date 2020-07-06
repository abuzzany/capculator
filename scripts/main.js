class Capculator{
    constructor(display, buffer, stack, selOperand, divCurrentOperand, divPrevOperand, divCurrentOperator, divPrevOperator){
        this.display = display
        this.buffer = buffer
        this.stack = stack
        this.selOperand = selOperand
        this.divCurrentOperand = divCurrentOperand
        this.divPrevOperand = divPrevOperand
        this.divCurrentOperator = divCurrentOperator
        this.divPrevOperator = divPrevOperator

        this.prevOperand = ''
        this.currentOperand = ''
        this.prevOperator = ''
        this.currentOperator = ''

        this.selectedOperand = ''
        this.displayResult = ''
        this.bufferOperands = []
        this.stackOperations = []
    }

    addOperand(number){
        // Support for float point operations.
        // Avoid have more than one float point in the bufferOperands.
        if(number === '.' && this.bufferOperands.includes(number)) return
        // If exists a prevOperation and Its digitin a new nuber
        // clear previous operation to crate a new one operation
        if(this.currentOperator == '='){
            this.clearPrevOperation()
        }

        this.selectedOperand = this.selectedOperand + number
        this.bufferOperands.push(number)
        this.currentOperand = this.currentOperand + number
    }

    addOperator(operator){
        // Returns if there is no at least an operand to perform an operation
        if (this.currentOperand === '') return

        this.emptyBufferOperands()

        if(operator == '='){
            this.calculateResult()
            this.currentOperator = operator
            return
        }

        this.currentOperator = operator
        this.stackOperations.push(operator)
        this.selectedOperand = ''

        // Support for compute opeation there are all necesaries variables
        if(this.prevOperand !== '' && this.currentOperator !== '' && this.currentOperand !== ''){
            this.calculateResult()
            this.updateDisplay()
        }

        this.prevOperand = this.currentOperand
        this.currentOperand = ''
    }

    calculateResult(){
        if (this.prevOperand === '' || this.currentOperator === '' || this.currentOperand === '') return

        this.displayResult = this.calculate()
        this.stackOperations = []
        this.bufferOperands.push(this.displayResult)
        this.emptyBufferOperands()
        this.stackOperations.push(this.currentOperator)
        this.selectedOperand = ''

        // Tmp
        this.currentOperand = this.displayResult
    }

    calculate(){
        let result = ''
    
        switch(this.currentOperator){
            case "+":
                result = parseFloat(this.stackOperations[0]) + parseFloat(this.stackOperations[2])
                break
            case "-":
                result = parseFloat(this.stackOperations[0]) - parseFloat(this.stackOperations[2])
                break
            case "*":
                result = parseFloat(this.stackOperations[0]) * parseFloat(this.stackOperations[2])
                break
            case "/":
                result = parseFloat(this.stackOperations[0]) / parseFloat(this.stackOperations[2])
                break
        }

        return result
    }

    emptyBufferOperands(){
        if(this.bufferOperands.length != 0){
            this.stackOperations.push(this.bufferOperands.join(''))
            this.bufferOperands = []
        }
    }

    clear(){
        this.selectedOperand = ''
        this.stackOperations  = []
        this.bufferOperands = []
    }

    updateDisplay(){
        this.buffer.innerHTML = "Buffer " + this.bufferOperands
        this.stack.innerHTML = "Stack " + this.stackOperations
        this.selOperand.innerHTML = "selOperand " + this.selectedOperand
        this.divCurrentOperand.innerHTML = "divCurrentOperand " + this.currentOperand
        this.divPrevOperand.innerHTML = "divPrevOperand " + this.prevOperand
        this.divCurrentOperator.innerHTML = "divCurrentOperator " + this.currentOperator
        this.divPrevOperator.innerHTML = "divPrevOperator " + this.prevOperator

        this.selOperand.innerHTML = "selOperand " + this.selectedOperand
        if(this.selectedOperand !== '')
            this.display.innerHTML = this.selectedOperand
        else
            this.display.innerHTML = this.displayResult
    }

    clearPrevOperation(){
        this.prevOperand = ''
        this.currentOperand  = ''
        this.prevOperator = ''
        this.currentOperator = ''
        this.bufferOperands = []
        this.stackOperations = []
    }
}

const buffer = document.getElementById('buffer')
const stack = document.getElementById('stack')
const selOperand = document.getElementById('selOperand')
const divCurrentOperand = document.getElementById('divCurrentOperand')
const divPrevOperand = document.getElementById('divPrevOperand')
const divCurrentOperator = document.getElementById('divCurrentOperator')
const divPrevOperator = document.getElementById('divPrevOperator')
const display = document.getElementById('display')

const capculator = new Capculator(display, buffer, stack, selOperand, divCurrentOperand, divPrevOperand, divCurrentOperator, divPrevOperator)

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

function onClickClear(event){
    capculator.clear()
    this.display.innerHTML = 0
}
