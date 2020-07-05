class Capculator{
    constructor(display){
        this.display = display

        this.prevOperand = ''
        this.currentOperand = ''
        this.operator = ''
        this.bufferOperands = []
        this.stackOperations = []
    }

    addOperand(number){
        this.prevOperand = this.prevOperand + number
        this.currentOperand = number
    
        this.bufferOperands.push(number)

        this.display.innerHTML = this.prevOperand
    }

    addOperator(operator){
        if (this.prevOperand === '') return
    
        this.emptyBufferOperands()
        this.operator = operator
        this.stackOperations.push(operator)
        this.prevOperand = ''
    }

    calculateResult(){
        if (this.prevOperand === '' || this.operator === '') return

        this.emptyBufferOperands()
    
        let result = ''
    
        switch(operator){
            case "+":
                result = parseFloat(stackOperations[0]) + parseFloat(stackOperations[2])
                break
            case "-":
                result = parseFloat(stackOperations[0]) - parseFloat(stackOperations[2])
                break
            case "*":
                result = parseFloat(stackOperations[0]) * parseFloat(stackOperations[2])
                break
            case "/":
                result = parseFloat(stackOperations[0]) / parseFloat(stackOperations[2])
                break
        }
    
        this.stackOperations = []
        this.operator = ''
        this.prevOperand = ''
    
        this.display.innerHTML = result
    }

    emptyBufferOperands(){
        if(bufferOperands.length != 0){
            stackOperations.push(bufferOperands.join(''))
            bufferOperands = []
        }
    }

    clear(){
        this.operator = ''
        this.prevOperand = ''
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
