import CapculatorEngine from '../src/scripts/capculatorEngine'
import { iteratee, result } from 'lodash'

describe('The CapculatorEngine instance', () => {
  it('should perform an addition correctly', () => {
    const stackOperations = ['5', '+', '5']
    const capEngine = new CapculatorEngine(stackOperations)
    const result = capEngine.compute()
    expect(result).toBe(10)
  })

  it('should perform a substraction correctly', () => {
    const stackOperations = ['5', '-', '5']
    const capEngine = new CapculatorEngine(stackOperations)
    const result = capEngine.compute()
    expect(result).toBe(0)
  })

  it('should perform a multiplication correctly', () => {
    const stackOperations = ['5', '*', '5']
    const capEngine = new CapculatorEngine(stackOperations)
    const result = capEngine.compute()
    expect(result).toBe(25)
  })

  it('should perform a division correctly', () => {
    const stackOperations = ['5', '/', '2']
    const capEngine = new CapculatorEngine(stackOperations)
    const result = capEngine.compute()
    expect(result).toBe(2.5)
  })
})
