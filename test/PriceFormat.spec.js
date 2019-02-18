import { expect } from 'chai'
import PriceFormat from '../src/index'

describe('PriceFormat', () => {
  it('Price is an object', () => {
    let Price = new PriceFormat()
    expect(Price).to.be.an('object')
  })

  describe('Price.format()', () => {
    it('Price.format is should be a function', () => {
      let Price = new PriceFormat()
      expect(Price.format).to.be.a('function')
    })

    it('Price.format(3) value is a string', () => {
      let Price = new PriceFormat()
      expect(Price.format(3)).to.be.a('string')
    })

    it('Price.format() value is deep equal US$ 0.00', () => {
      let Price = new PriceFormat()
      expect(Price.format()).to.deep.equal('US$ 0.00')
    })

    it('Price.format(3) value is deep equal US$ 3.00', () => {
      let Price = new PriceFormat()
      expect(Price.format(3)).to.deep.equal('US$ 3.00')
    })

    it('Price.format(3) value is deep equal R$ 3.00', () => {
      let Price = new PriceFormat({ prefix: 'R$ ' })
      expect(Price.format(3)).to.deep.equal('R$ 3.00')
    })

    it('Price.format(3) value is deep equal 3.00 €', () => {
      let Price = new PriceFormat({ prefix: '', suffix: ' €' })
      expect(Price.format(3)).to.deep.equal('3.00 €')
    })
  })

  describe('Price.setOptions()', () => {
    it('when use Price.setOptions({ amount: 3 }) the Price.format() value is deep equal US$ 3.00', () => {
      let Price = new PriceFormat()
      Price.setOptions({ amount: 3 })
      expect(Price.format()).to.deep.equal('US$ 3.00')
    })

    it('when use Price.setOptions({ prefix: \'\', suffix: \' €\' }) the Price.format() value is deep equal 6.00 €', () => {
      let Price = new PriceFormat()
      Price.setOptions({ prefix: '', suffix: ' €' })
      expect(Price.format(6)).to.deep.equal('6.00 €')
    })
  })
})
