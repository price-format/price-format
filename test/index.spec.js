const { strict } = require('assert')
const { AlertBox } = require('../src/alert-box')

const { saySomething } = new AlertBox()

describe('Price Format', () => {
  describe('return true', () => {
    it('should return true when the AlertBox.saySomething() value is equal "Hello 😊"', () => {
      strict.equal(saySomething(), 'Hello 😊')
    })
  })

  describe('return true', () => {
    it('should return true when the AlertBox.saySomething(\'Hi\') value is equal "Hi"', () => {
      strict.equal(saySomething('Hi'), 'Hi')
    })
  })
})
