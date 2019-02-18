import * as API from './api'

/**
 * Class PriceFormat
 *
 * @class
 */
export default class PriceFormat {
  constructor (options = {}) {
    this.formatedAmount = null
    this.setOptions(options)
  }

  currencyFormatter () {
    this.formatedAmount = `${this.options.prefix}${this.options.amount}.00${this.options.suffix}`
  }

  setOptions (options = {}) {
    this.options = Object.assign({}, API.Defaults, options)
  }

  format (amount) {
    this.options.amount = amount || this.options.amount
    this.currencyFormatter()

    return this.formatedAmount
  }
}
