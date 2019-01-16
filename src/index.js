import * as API from './api'
import * as Utils from './utils'

export default class PriceFormat {
  /**
   * @param {object} options
   * @return {PriceFormat}
   */

  constructor (options = {}) {
    this.options = Utils.deepExtend({}, API.Defaults, options)

    return this
  }
}
