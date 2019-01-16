import { strict } from 'assert'
import { saySomething } from '../src/utils'

describe('Price Format', () => {
  describe('return true', () => {
    it('should return true when the saySomething() value is equal "Hello 😊"', () => {
      strict.equal(saySomething(), 'Hello 😊')
    })
  })

  describe('return true', () => {
    it('should return true when the saySomething(\'Hi\') value is equal "Hi"', () => {
      strict.equal(saySomething('Hi'), 'Hi')
    })
  })
})
