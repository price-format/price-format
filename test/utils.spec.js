import { expect } from 'chai'
import * as Utils from '../src/utils'

describe('Utils', () => {
  describe('saySomething()', () => {
    it('Utils.saySomething() be a string', () => {
      expect(Utils.saySomething()).to.be.a('string')
    })
    it('Utils.saySomething() value is equal "Hello 😊"', () => {
      expect(Utils.saySomething()).to.equal('Hello 😊')
    })
    it('Utils.saySomething(\'Hi\') value is equal "Hi"', () => {
      expect(Utils.saySomething('Hi')).to.equal('Hi')
    })
  })

  describe('deepExtend()', () => {
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
})
