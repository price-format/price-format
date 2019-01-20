/**
 * A collection class of static utility functions.
 */
class Utils {
  /**
   * deepExtend
   *
   * @static
   */
  static deepExtend (out) {
    out = out || {}

    for (let i = 1; i < arguments.length; i++) {
      let obj = arguments[i]

      if (!obj) continue

      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (this.is('array', obj[key])) {
            out[key] = obj[key]
          } else if (this.is('object', obj[key]) && obj[key] !== null) {
            out[key] = this.deepExtend(out[key], obj[key])
          } else {
            out[key] = obj[key]
          }
        }
      }
    }

    return out
  }

  /**
   * typeOf
   *
   * @example
   * // returns string
   * Utils.typeOf('hello');
   * @example
   * // returns number
   * Utils.typeOf(123);
   *
   * @static
   * @return string
   */
  static typeOf (value) {
    return this.rawType(value).replace(/^\[object (\w+)]$/, '$1').toLowerCase()
  }

  /**
   * isString
   *
   * @example
   * // returns true
   * Utils.isString('hello');
   * @example
   * // returns false
   * Utils.isString(123);
   *
   * @static
   * @return boolean
   */
  static isString (value) {
    return typeof value === 'string'
  }

  /**
   * hasValue
   *
   * @static
   * @param {string} params - A string.
   */
  static hasValue (params) {
    return params.length === 2
  }

  /**
   * rawType
   *
   * @static
   */
  static rawType (value) {
    return Object.prototype.toString.call(value)
  }

  /**
   * is
   *
   * @example
   * // returns true
   * Utils.is('object', {});
   * @example
   * // returns false
   * Utils.is('object', []);
   *
   * @static
   * @return {Boolean}
   */
  static is (...params) {
    const [typeToTest, value] = params

    if (!this.isString(typeToTest)) {
      throw new TypeError('typeToTest must be a string')
    }

    if (!this.hasValue(params)) {
      return (value) => this.is(typeToTest, value)
    }

    const type = typeToTest.replace(/^\w/, (l) => l.toUpperCase())
    return this.rawType(value) === `[object ${type}]`
  }
}

export default Utils
