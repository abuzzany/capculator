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
        this.selectedOperand = this.selectedOperand + number

        // If exists a prevOperation and Its digitin a new nuber
        // clear previous operation to crate a new one operation
        if(this.prevOperator !==  '' && this.currentOperator === ''){
            this.clearPrevOperation()
        }

        this.bufferOperands.push(number)

        // Si ya había algo en el currentOperand entonces 
        // este pasa a ser el prevOperand y currenOpenrand adquiere el nuevo
        // valor.
        if(this.currentOperand !== ''){
            this.prevOperand = this.currentOperand
        }

        // Temp
        this.currentOperand = number
    }

    addOperator(operator){
        // Returns if there is no at leas a variable to perform an operation
        if (this.currentOperand === '') return
        
        // Si ya había algo en el currentOperator entonces 
        // este pasa a ser el prevOperator y currentOperator adquiere el nuevo
        // valor.
        if(this.currentOperator !== ''){
            this.prevOperator = this.currentOperator
        }

        this.currentOperator = operator
    
        this.emptyBufferOperands()
        this.stackOperations.push(operator)
        this.selectedOperand = ''

        // Support for compute opeation there are all necesaries variables
        if(this.prevOperand !== '' && this.prevOperator !== '' && this.currentOperand !== ''){
            this.calculateResult()
            this.currentOperator = operator
            this.emptyBufferOperands()
            this.stackOperations.push(operator)
            this.updateDisplay()
        }
    }

    calculateResult(){
        if (this.prevOperand === '' && this.prevOperator === '' && this.currentOperand === '') return

        this.emptyBufferOperands()

        this.displayResult = this.calculate()
        this.bufferOperands.push(this.displayResult)

        this.stackOperations = []
        this.selectedOperand = ''

        // Tmp
        this.prevOperand = this.displayResult
        this.currentOperand = ''
        this.prevOperator = this.currentOperator
        this.currentOperator = '' 
    }

    calculate(){
        let result = ''
    
        switch(this.prevOperator){
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
   capculator.calculateResult()
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
