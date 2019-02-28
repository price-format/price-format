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
    this.formatedAmount = `${this.options.prefix}${this.getThousandsAmountFormatted()}${this.options.centsSeparator}${this.amount.afterCentsSeparator}${this.options.suffix}`
  }

  setOptions (options = {}) {
    this.options = Object.assign({}, API.Defaults, options)
  }

  getThousandsAmountFormatted () {
    return this.amount.beforeCentsSeparator
      .split('')
      .reverse()
      .join('')
      .match(/.{1,3}/g)
      .reverse()
      .map((num) => num.split('').reverse().join(''))
      .join(this.options.thousandsSeparator)
  }

  format (amount) {
    const centsPad = '00'
    const integerPad = '0'
    this.options.amount = '' + (amount || this.options.amount)

    const beforeCents = this.options.amount.substring(0, this.options.amount.length - 2)
    const afterCents = this.options.amount.substring(this.options.amount.length - 2)

    this.amount = {
      beforeCentsSeparator: integerPad.substring(0, integerPad.length - beforeCents.length) + beforeCents,
      afterCentsSeparator: centsPad.substring(0, centsPad.length - afterCents.length) + afterCents
    }
    this.currencyFormatter()

    return this.formatedAmount
  }
}
