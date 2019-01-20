import * as API from './api'
import * as Utils from './utils'

/**
 * Class PriceFormat
 *
 * @class
 */
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
