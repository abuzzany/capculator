import Capculator from '../src/scripts/capculator'

beforeAll(() => {
  document.body.innerHTML = document.body.innerHTML + "<div id='display' >0</div>"
  document.body.innerHTML = document.body.innerHTML + "<div id='buffer' ></div>"
  document.body.innerHTML = document.body.innerHTML + "<div id='stack' ></div>"
  document.body.innerHTML = document.body.innerHTML + "<div id='divCurrentOperand' ></div>"
  document.body.innerHTML = document.body.innerHTML + "<div id='divPrevOperand' ></div>"
  document.body.innerHTML = document.body.innerHTML + "<div id='divCurrentOperator' ></div>"

  const display = document.querySelector('[data-display]')
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
      console.log()
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

  describe('when has two operands and one operator setted', () => {
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
  })

  describe('when has compute an operation', () => {
    it('should compute an addition correctly wiht the result of thre preoviuos operation', () => {
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
    it('should compute a substraction correctly wiht the result of thre preoviuos operation', () => {
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
    it('should compute an addition correctly wiht the result of thre preoviuos operation', () => {
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
    it('should compute an addition correctly wiht the result of thre preoviuos operation', () => {
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
  })
})
