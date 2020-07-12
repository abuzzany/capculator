import Capculator from '../src/capculator'

beforeAll(() => {
    document.body.innerHTML=document.body.innerHTML + "<div id='display' >0</div>"
    document.body.innerHTML= document.body.innerHTML +  "<div id='buffer' ></div>"
    document.body.innerHTML= document.body.innerHTML +  "<div id='stack' ></div>"
    document.body.innerHTML=document.body.innerHTML + "<div id='divCurrentOperand' ></div>"
    document.body.innerHTML=document.body.innerHTML +  "<div id='divPrevOperand' ></div>"
    document.body.innerHTML=document.body.innerHTML +  "<div id='divCurrentOperator' ></div>"

    const display = document.getElementById('display')
    const buffer = document.getElementById('buffer')
    const stack = document.getElementById('stack')
    const divCurrentOperand = document.getElementById('divCurrentOperand')
    const divPrevOperand = document.getElementById('divPrevOperand')
    const divCurrentOperator = document.getElementById('divCurrentOperator')
});

beforeEach(() => {
    display.innerHTML = '0'
});

describe('The Capculator instance', () => {
    describe('when has not have received any opeand or opeator', () => {
        it('should not permit add a float point if there is not a previous operand', () => {
            const capculator = new Capculator(display, buffer, stack, divCurrentOperand, divPrevOperand, divCurrentOperator)

            capculator.addOperand('.')
            capculator.updateDisplay()
            expect(display.innerHTML).toBe('')
        });
        it('should not permit add a float point if the previous operand contains one', () => {
            const capculator = new Capculator(display, buffer, stack, divCurrentOperand, divPrevOperand, divCurrentOperator)

            capculator.addOperand('5')
            capculator.addOperand('.')
            capculator.addOperand('5')
            capculator.addOperand('.')
            capculator.updateDisplay()
            expect(display.innerHTML).toBe('5.5')
        });
        it('should not permit add more than one zero', () => {
            const capculator = new Capculator(display, buffer, stack, divCurrentOperand, divPrevOperand, divCurrentOperator)

            capculator.addOperand('0')
            capculator.addOperand('0')
            capculator.addOperand('0')
            capculator.updateDisplay()
            expect(display.innerHTML).toBe('0')
        });
    });
});
