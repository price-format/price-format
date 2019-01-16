import * as API from './api'
import * as Utils from './utils'

// alert(saySomething('Hello World')) // eslint-disable-line

export default class PriceFormat {
  /**
   * @param {object} options
   * @return {PriceFormat}
   */

  constructor (options = {}) {
    this.options = Utils.deepExtend({}, API.Defaults, options)

    console.log(this)

    return this
  }
}

new PriceFormat({ // eslint-disable-line
  allowNegative: true
})
