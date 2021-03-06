import Capculator from '../src/scripts/capculator'

beforeAll(() => {
  document.body.innerHTML = "<div id='display' >0</div>"
})

beforeEach(() => {
  display.innerText = '0'
})

describe('The Capculator instance', () => {
  describe('when has not have received any opeand or opeator', () => {
    it('should not permit add a float point if the previous operand contains one', () => {
      const capculator = new Capculator(display)

      capculator.addOperand('5')
      capculator.addOperand('.')
      capculator.addOperand('5')
      capculator.addOperand('.')
      capculator.updateDisplay()
      expect(display.innerText).toBe('5.5')
    })
    it('should not permit add more than one zero', () => {
      const capculator = new Capculator(display)

      capculator.addOperand('0')
      capculator.addOperand('0')
      capculator.addOperand('0')
      capculator.updateDisplay()
      expect(display.innerText).toBe('0')
    })
    it('should not perform any operation if an operator was setted', () => {
      const capculator = new Capculator(display)

      capculator.addOperator('+')
      expect(display.innerText).toBe('0')
    })
    it('should display a zero with float point if not exists a previous operand', () => {
      const capculator = new Capculator(display)

      capculator.addOperand('.')
      capculator.updateDisplay()
      expect(display.innerText).toBe('0.')
    })
    it('should display the operand that was setted', () => {
      const capculator = new Capculator(display)

      capculator.addOperand('5')
      capculator.updateDisplay()
      expect(display.innerText).toBe('5')
    })
  })

  describe('when has been setted two operands and one operator', () => {
    it('should compute an addition correctly', () => {
      const capculator = new Capculator(display)
      capculator.addOperand('5')
      capculator.addOperator('+')
      capculator.addOperand('5')
      capculator.addOperator('=')
      capculator.updateDisplay()
      expect(display.innerText).toBe('10')
    })
    it('should compute a substraction correctly', () => {
      const capculator = new Capculator(display)
      capculator.addOperand('5')
      capculator.addOperator('-')
      capculator.addOperand('5')
      capculator.addOperator('=')
      capculator.updateDisplay()
      expect(display.innerText).toBe('0')
    })
    it('should compute a multiplication correctly', () => {
      const capculator = new Capculator(display)
      capculator.addOperand('5')
      capculator.addOperator('*')
      capculator.addOperand('5')
      capculator.addOperator('=')
      capculator.updateDisplay()
      expect(display.innerText).toBe('25')
    })
    it('should compute a division correctly', () => {
      const capculator = new Capculator(display)
      capculator.addOperand('5')
      capculator.addOperator('/')
      capculator.addOperand('2')
      capculator.addOperator('=')
      capculator.updateDisplay()
      expect(display.innerText).toBe('2.5')
    })

    describe('and the next operator is not equal operator', () => {
      it('should compute an addition correctly', () => {
        const capculator = new Capculator(display)
        capculator.addOperand('5')
        capculator.addOperator('+')
        capculator.addOperand('5')
        capculator.addOperator('+')
        expect(display.innerText).toBe('10')
      })
      it('should compute a substraction correctly', () => {
        const capculator = new Capculator(display)
        capculator.addOperand('5')
        capculator.addOperator('-')
        capculator.addOperand('5')
        capculator.addOperator('-')
        expect(display.innerText).toBe('0')
      })
      it('should compute a multiplication correctly', () => {
        const capculator = new Capculator(display)
        capculator.addOperand('5')
        capculator.addOperator('*')
        capculator.addOperand('5')
        capculator.addOperator('*')
        expect(display.innerText).toBe('25')
      })
      it('should compute a division correctly', () => {
        const capculator = new Capculator(display)
        capculator.addOperand('5')
        capculator.addOperator('/')
        capculator.addOperand('2')
        capculator.addOperator('/')
        expect(display.innerText).toBe('2.5')
      })
    })

    describe('and the clear function is performed', () => {
      it('should clear the las operand and diplay zero', () => {
        const capculator = new Capculator(display)
        capculator.addOperand('5')
        capculator.addOperator('+')
        capculator.addOperand('10')
        capculator.clear()
        capculator.updateDisplay()
        expect(display.innerText).toBe('0')
      })
    })

    describe('and the clearAll function is performed', () => {
      it('should clear all the memorized operation', () => {
        const capculator = new Capculator(display)
        capculator.addOperand('5')
        capculator.addOperator('+')
        capculator.addOperand('10')
        capculator.clearAll()
        capculator.addOperator('=')
        capculator.updateDisplay()
        expect(display.innerText).toBe('0')
      })
    })

    describe('and the clear function is performed and then setted a new operand', () => {
      it('should compute and display the operation correctly', () => {
        const capculator = new Capculator(display)
        capculator.addOperand('5')
        capculator.addOperator('+')
        capculator.addOperand('10')
        capculator.clear()
        capculator.addOperand('2')
        capculator.addOperator('=')
        capculator.updateDisplay()
        expect(display.innerText).toBe('7')
      })
    })
  })

  describe('when has computed an operation', () => {
    it('should compute an addition correctly with the result of thre preoviuos operation', () => {
      const capculator = new Capculator(display)
      capculator.addOperand('5')
      capculator.addOperator('+')
      capculator.addOperand('5')
      capculator.addOperator('+')
      capculator.addOperand('2')
      capculator.addOperator('=')
      capculator.updateDisplay()
      expect(display.innerText).toBe('12')
    })
    it('should compute a substraction correctly with the result of thre preoviuos operation', () => {
      const capculator = new Capculator(display)
      capculator.addOperand('10')
      capculator.addOperator('-')
      capculator.addOperand('5')
      capculator.addOperator('-')
      capculator.addOperand('2')
      capculator.addOperator('=')
      capculator.updateDisplay()
      expect(display.innerText).toBe('3')
    })
    it('should compute an addition correctly with the result of thre preoviuos operation', () => {
      const capculator = new Capculator(display)
      capculator.addOperand('5')
      capculator.addOperator('*')
      capculator.addOperand('5')
      capculator.addOperator('*')
      capculator.addOperand('2')
      capculator.addOperator('=')
      capculator.updateDisplay()
      expect(display.innerText).toBe('50')
    })
    it('should compute an addition correctly with the result of thre preoviuos operation', () => {
      const capculator = new Capculator(display)
      capculator.addOperand('10')
      capculator.addOperator('/')
      capculator.addOperand('2')
      capculator.addOperator('/')
      capculator.addOperand('2')
      capculator.addOperator('=')
      capculator.updateDisplay()
      expect(display.innerText).toBe('2.5')
    })
    it('should compute the last operation when is setted equal operator', () => {
      const capculator = new Capculator(display)
      capculator.addOperand('5')
      capculator.addOperator('+')
      capculator.addOperand('10')
      capculator.addOperator('=')
      capculator.addOperator('=')
      capculator.updateDisplay('25')
    })
  })
})
