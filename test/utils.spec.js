import { expect } from 'chai'
import Utils from '../src/utils'

describe('Utils', () => {
  describe('Utils.deepExtend()', () => {
    it('Utils.deepExtend() be a object', () => {
      expect(Utils.deepExtend()).to.be.a('object')
    })

    it('Utils.deepExtend() value is equal {}', () => {
      expect(Utils.deepExtend()).to.deep.equal({})
    })

    it('Utils.deepExtend(\'Hello\') be a string', () => {
      expect(Utils.deepExtend('Hello')).to.be.a('string')
    })

    it('Utils.deepExtend(\'hello\') value is equal "hello"', () => {
      expect(Utils.deepExtend('hello')).to.deep.equal('hello')
    })

    it('Utils.deepExtend({ a: 1 }, { b: 2 }) value is equal { a: 1, b: 2 }', () => {
      expect(Utils.deepExtend({ a: 1 }, { b: 2 })).to.deep.equal({ a: 1, b: 2 })
    })

    it('Utils.deepExtend([ { a: 1 } ], [ { b: 2 } ]) value is equal [ { a: 1, b: 2 } ]', () => {
      expect(Utils.deepExtend([ { a: 1 } ], [ { b: 2 } ])).to.deep.equal([ { a: 1, b: 2 } ])
    })

    it('Utils.deepExtend([ { a: [1] } ], [ { b: [2] } ]) value is equal [ { a: [ 1 ], b: [ 2 ] } ]', () => {
      expect(Utils.deepExtend([ { a: [1] } ], [ { b: [2] } ])).to.deep.equal([ { a: [ 1 ], b: [ 2 ] } ])
    })
  })

  describe('Utils.is()', () => {
    it('is should be a function', () => {
      expect(Utils.is).to.be.a('function')
    })

    it('Utils.is("object", {}) should return true', () => {
      expect(Utils.is('object', {})).to.be.equal(true)
    })

    it('Utils.is("object", []) should return false', () => {
      expect(Utils.is('object', [])).to.be.equal(false)
    })

    it('Utils.is("object") should return a function (partial application)', () => {
      expect(Utils.is('object')).to.be.a('function')
    })

    it('Utils.is("number")(10) should return true', () => {
      const isNumber = Utils.is('number')
      expect(isNumber(10)).to.be.equal(true)
    })

    it('Utils.is(10) should throw an TypeError: "typeToTest must be a string"', () => {
      try {
        Utils.is(10)
      } catch (e) {
        expect(e.message).to.be.equal('typeToTest must be a string')
      }
    })

    it('Utils.is("undefined", undefined) should return true', () => {
      expect(Utils.is('undefined', undefined)).to.be.equal(true)
    })

    it('Utils.is("undefined", null) should return false', () => {
      expect(Utils.is('undefined', null)).to.be.equal(false)
    })

    it('Utils.is() should throw an TypeError: "typeToTest must be a string"', () => {
      try {
        Utils.is()
      } catch (e) {
        expect(e.message).to.be.equal('typeToTest must be a string')
      }
    })
  })

  describe('Utils.typeOf()', () => {
    it('Utils.typeOf should be a function', () => {
      expect(Utils.typeOf).to.be.a('function')
    })

    it('Utils.typeOf(123) should return "number"', () => {
      expect(Utils.typeOf(123)).to.be.equal('number')
    })

    it('Utils.typeOf({}) should return "object"', () => {
      expect(Utils.typeOf({})).to.be.equal('object')
    })

    it('Utils.typeOf([]) should return "array"', () => {
      expect(Utils.typeOf([])).to.be.equal('array')
    })

    it('Utils.typeOf(null) should return "null"', () => {
      expect(Utils.typeOf(null)).to.be.equal('null')
    })

    it('Utils.typeOf(undefined) should return "undefined"', () => {
      expect(Utils.typeOf(undefined)).to.be.equal('undefined')
    })

    it('Utils.typeOf(new String("hey")) should return "string"', () => {
      // eslint-disable-next-line no-new-wrappers
      expect(Utils.typeOf(new String('hey'))).to.be.equal('string')
    })
  })
})
