/**
 * saySomething
 *
 * import { saySomething } from './utils'
 */

export function saySomething (speech = 'Hello 😊') {
  return speech
}

/**
 * deepExtend
 *
 * import { deepExtend } from './utils'
 */

export const deepExtend = function (out) {
  out = out || {}

  for (let i = 1; i < arguments.length; i++) {
    let obj = arguments[i]

    if (!obj) continue

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key])) {
          out[key] = obj[key]
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          out[key] = deepExtend(out[key], obj[key])
        } else {
          out[key] = obj[key]
        }
      }
    }
  }

  return out
}
