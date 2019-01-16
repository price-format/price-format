/**
 * A collection of static utility functions.
 * @const
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
          if (Array.isArray(obj[key])) {
            out[key] = obj[key]
          } else if (typeof obj[key] === 'object' && obj[key] !== null) {
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
   * @static
   * @return string
   */
  static typeOf (value) {
    return this.rawType(value).replace(/^\[object (\w+)]$/, '$1').toLowerCase()
  }

  /**
   * isString
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
   * @return
   */
  static hasValue (params) {
    return params.length === 2
  }

  /**
   * rawType
   *
   * @static
   * @return
   */
  static rawType (value) {
    return Object.prototype.toString.call(value)
  }

  /**
   * is
   *
   * @static
   * @return boolean
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
