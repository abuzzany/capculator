class Capculator{
    constructor(display){
        this.display = display

        this.currentOperand = ''
        this.operator = ''
        this.bufferOperands = []
        this.stackOperations = []
    }

    addOperand(number){
        this.currentOperand = this.currentOperand + number
    
        this.bufferOperands.push(number)

        this.display.innerHTML = this.currentOperand
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
    
        this.stackOperations = []
        this.operator = ''
        this.currentOperand = ''
    
        this.display.innerHTML = result
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
}

const display = document.getElementById('display')

const capculator = new Capculator(display)

function onClickOperand(event){
    value = event.target.value

    capculator.addOperand(value)
}

function onClickOperator(event){
    value = event.target.value

    capculator.addOperator(value)
}

function onClickEqual(event){
   capculator.calculateResult()
}

function onClickPoint(event){
    value = event.target.value
    this.display.innerHTML = value
}

function onClickClear(event){
    capculator.clear()
    this.display.innerHTML = 0
}
