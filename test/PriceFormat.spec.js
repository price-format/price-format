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

    it('Price.format(0..1e3) value is a string', () => {
      let Price = new PriceFormat()
      for (let i = 0; i < 1e2; i++) {
        expect(Price.format(i)).to.be.a('string')
      }
    })

    it('Price.format() value is deep equal US$ 0.00', () => {
      let Price = new PriceFormat()
      expect(Price.format()).to.deep.equal('US$ 0.00')
    })

    it('Price.format(n between 0..99) value is deep equal US$ 0.0?{n}', () => {
      let Price = new PriceFormat()
      for (let i = 0; i < 9; i++) {
        expect(Price.format(i)).to.deep.equal(`US$ 0.0${i}`)
      }
      for (let i = 10; i < 99; i++) {
        expect(Price.format(i)).to.deep.equal(`US$ 0.${i}`)
      }
    })

    it('Price.format(n between 0..99) using Price.setOptions({ centsSeparator: separator }) has a value deep equal to US$ 0{separator}{n}', () => {
      let Price = new PriceFormat()
      const separators = [',', '.', '!', '@', '#', '$', '%', '' ]
      separators.forEach((separator) => {
        Price.setOptions({ centsSeparator: separator })
        for (let i = 0; i < 9; i++) {
          expect(Price.format(i)).to.deep.equal(`US$ 0${separator}0${i}`)
        }
        for (let i = 10; i < 99; i++) {
          expect(Price.format(i)).to.deep.equal(`US$ 0${separator}${i}`)
        }
      })
    })

    it('Price.format(3) value is deep equal R$ 0.03', () => {
      let Price = new PriceFormat({ prefix: 'R$ ' })
      expect(Price.format(3)).to.deep.equal('R$ 0.03')
    })

    it('Price.format(3) value is deep equal 0.03 €', () => {
      let Price = new PriceFormat({ prefix: '', suffix: ' €' })
      expect(Price.format(3)).to.deep.equal('0.03 €')
    })

    it('Price.format(3) value is deep equal 0,03', () => {
      let Price = new PriceFormat({ prefix: '', sufix: '', centsSeparator: ',' })
      expect(Price.format(3)).to.deep.equal('0,03')
    })

    it('Price.format(3) value is deep equal 0-03', () => {
      let Price = new PriceFormat({ prefix: '', sufix: '', centsSeparator: '-' })
      expect(Price.format(3)).to.deep.equal('0-03')
    })

    it('Price.format(300) value is deep equal 300**00', () => {
      let Price = new PriceFormat({ prefix: '', sufix: '', centsSeparator: '**' })
      expect(Price.format(30000)).to.deep.equal('300**00')
    })

    it('Price.format(3) value is deep equal 0**03', () => {
      let Price = new PriceFormat({ prefix: '', sufix: '', centsSeparator: '**' })
      expect(Price.format(3)).to.deep.equal('0**03')
    })

    it('Price.format(300000) value is deep equal 3/000.00', () => {
      let Price = new PriceFormat({ prefix: '', sufix: '', thousandsSeparator: '/' })
      expect(Price.format(300000)).to.deep.equal('3/000.00')
    })

  })

  describe('Price.setOptions()', () => {
    it('when use Price.setOptions() options should be an object', () => {
      let Price = new PriceFormat()
      Price.setOptions()
      expect(Price.options).to.deep.a('object')
    })

    it('when use Price.setOptions({ amount: 3 }) this.options.amount should be deep equal to 3', () => {
      let Price = new PriceFormat()
      const options = { amount: 3 }
      Price.setOptions(options)
      expect(options.amount).to.deep.equal(Price.options.amount)
    })

    it('when use Price.setOptions({ ... }) this.options should contain the +{ ... }+', () => {
      let Price = new PriceFormat()
      const options = { amount: 3, prefix: '', suffix: ' €' }
      Price.setOptions(options)
      Object.keys(options).forEach((key) => expect(options[key]).to.deep.equal(Price.options[key]))
    })

    it('when use Price.setOptions({ amount: 3 }) the Price.format() value is deep equal US$ 0.03', () => {
      let Price = new PriceFormat()
      Price.setOptions({ amount: 3 })
      expect(Price.format()).to.deep.equal('US$ 0.03')
    })

    it('when use Price.setOptions({ prefix: \'\', suffix: \' €\' }) the Price.format() value is deep equal 0.06 €', () => {
      let Price = new PriceFormat()
      Price.setOptions({ prefix: '', suffix: ' €' })
      expect(Price.format(6)).to.deep.equal('0.06 €')
    })
  })
})
