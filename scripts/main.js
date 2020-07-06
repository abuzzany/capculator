class Capculator{
    constructor(display, buffer, stack, divCurrentOperand, divPrevOperand, divCurrentOperator){
        this.display = display
        this.buffer = buffer
        this.stack = stack
        this.divCurrentOperand = divCurrentOperand
        this.divPrevOperand = divPrevOperand
        this.divCurrentOperator = divCurrentOperator

        this.prevOperand = ''
        this.currentOperand = ''
        this.prevOperator = ''
        this.currentOperator = ''

        this.displayResult = ''
        this.bufferOperands = []
        this.stackOperations = []
    }

    addOperand(number){
        // Guards for:
        // Prevent add float point if there is no an operand
        // Prevent add several float points
        // Prevent add several zeros if there is no and operand but permits add it
        // after a float point
        if (number === '.' && this.currentOperand === '') return
        if (number === '.' && this.currentOperand.includes('.')) return
        if (number === '0' && this.currentOperand.startsWith('0') && !this.currentOperand.includes('.')) return

        // If exists a previous operation and the user starts to digit again
        // clear previous operation to starts a new one
        if(this.currentOperator == '='){
            this.clearAll()
        }

        this.bufferOperands.push(number)
        this.currentOperand = this.currentOperand + number
    }

    addOperator(operator){
        // Returns if there is no at least an operand to perform an operation
        if (this.currentOperand === '') return

        this.emptyBufferOperands()

        if(operator === '='){
            this.calculateResult()

            this.prevOperand = ''
        }else{
            this.stackOperations.push(operator)
    
            // Performs the operations if exists all the needed variables
            if(this.prevOperand !== '' && this.currentOperator !== '' && this.currentOperand !== ''){
                this.calculateResult()
                this.stackOperations.push(this.currentOperator)
                this.updateDisplay()
            }
        
            this.prevOperand = this.currentOperand
            this.currentOperand = ''
        }  

        this.currentOperator = operator
    }

    calculateResult(){
        if (this.prevOperand === '' || this.currentOperator === '' || this.currentOperand === '') return

        this.currentOperand = this.calculate()
        this.stackOperations = []
        this.bufferOperands.push(this.currentOperand)
        this.emptyBufferOperands()
    }

    calculate(){
        let result
    
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

    updateDisplay(){
        this.buffer.innerHTML = "Buffer " + this.bufferOperands
        this.stack.innerHTML = "Stack " + this.stackOperations
        this.divCurrentOperand.innerHTML = "divCurrentOperand " + this.currentOperand
        this.divPrevOperand.innerHTML = "divPrevOperand " + this.prevOperand
        this.divCurrentOperator.innerHTML = "divCurrentOperator " + this.currentOperator

        this.display.innerHTML = this.currentOperand
    }

    clearAll(){
        this.prevOperand = ''
        this.currentOperand  = ''
        this.prevOperator = ''
        this.currentOperator = ''
        this.bufferOperands = []
        this.stackOperations = []
    }

    clear(){
        this.currentOperand = ''
        this.bufferOperands = []
    }
}

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
