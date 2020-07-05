class Capculator{
    constructor(display){
        this.display = display

        this.selectedOperand = ''
        this.selectedOperator = ''
        this.bufferOperands = []
        this.stackOperations = []
    }

    addOperand(number){
        if(number === '.' && this.bufferOperands.includes(number)) return
        this.selectedOperand = this.selectedOperand + number
        this.bufferOperands.push(number)
    }

    addOperator(operator){
        if (this.selectedOperand === '') return
    
        this.emptyBufferOperands()
        this.selectedOperator = operator
        this.stackOperations.push(operator)
        this.selectedOperand = ''
    }

    calculateResult(){
        if (this.selectedOperand === '' || this.selectedOperator === '') return

        this.emptyBufferOperands()

        this.selectedOperand = this.calculate()
        this.bufferOperands.push(this.selectedOperand)

        this.stackOperations = []
        this.selectedOperator = ''
    }

    calculate(){
        let result = ''
    
        switch(this.selectedOperator){
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
        this.selectedOperator = ''
        this.selectedOperand = ''
        this.stackOperations  = []
        this.bufferOperands = []
    }

    updateDisplay(){
        this.display.innerHTML = this.selectedOperand
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
