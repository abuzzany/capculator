class Capculator{
    constructor(display){
        this.display = display

        this.currentOperand = ''
        this.operator = ''
        this.bufferOperands = []
        this.stackOperations = []
    }

    addOperand(number){
        if(number === '.' && this.bufferOperands.includes(number)) return
        this.currentOperand = this.currentOperand + number
        this.bufferOperands.push(number)
    }

    addOperator(operator){
        if (this.currentOperand === '') return
    
        this.emptyBufferOperands()
        this.operator = operator
        this.stackOperations.push(operator)
        this.currentOperand = ''
    }

    calculateResult(){
        if (this.currentOperand === '' || this.operator === '') return

        this.emptyBufferOperands()

        this.currentOperand = this.calculate()
    
        this.stackOperations = []
        this.operator = ''
    }

    calculate(){
        let result = ''
    
        switch(this.operator){
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
        this.operator = ''
        this.currentOperand = ''
        this.stackOperations  = []
        this.bufferOperands = []
    }

    updateDisplay(){
        this.display.innerHTML = this.currentOperand
    }
}

const display = document.getElementById('display')

const capculator = new Capculator(display)

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
