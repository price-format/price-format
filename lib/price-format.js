/*!
 * @package: price-format
 * @description: Quick and easy to format any numeric value into price values
 * @version: 1.0.0
 * @authors: Fernando Moreira <nandomoreira.me@gmail.com>,Flavio Silveira <flavioaugustosilveira@gmail.com>,Murillo Brendel Freitas <murillobrendelfreitas@gmail.com>
 * @license: Licensed under the MIT licenses: https://raw.githubusercontent.com/price-format/price-format/dev/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("price-format", [], factory);
	else if(typeof exports === 'object')
		exports["price-format"] = factory();
	else
		root["price-format"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Defaults = exports.Defaults = {
  prefix: 'US$ ',
  suffix: '',
  centsSeparator: '.',
  thousandsSeparator: ',',
  limit: false,
  centsLimit: 2,
  clearPrefix: false,
  clearSufix: false,
  allowNegative: false,
  insertPlusSign: false,
  clearOnEmpty: false,
  leadingZero: true
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = __webpack_require__(/*! ./api */ "./src/api.js");

var API = _interopRequireWildcard(_api);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PriceFormat =
/**
 * @param {object} options
 * @return {PriceFormat}
 */

function PriceFormat() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, PriceFormat);

  this.options = Utils.deepExtend({}, API.Defaults, options);

  return this;
};

exports.default = PriceFormat;
module.exports = exports.default;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A collection of static utility functions.
 * @const
 */
var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: 'deepExtend',

    /**
     * deepExtend
     *
     * @static
     */
    value: function deepExtend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];

        if (!obj) continue;

        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (Array.isArray(obj[key])) {
              out[key] = obj[key];
            } else if (_typeof(obj[key]) === 'object' && obj[key] !== null) {
              out[key] = this.deepExtend(out[key], obj[key]);
            } else {
              out[key] = obj[key];
            }
          }
        }
      }

      return out;
    }

    /**
     * typeOf
     *
     * @static
     * @return string
     */

  }, {
    key: 'typeOf',
    value: function typeOf(value) {
      return this.rawType(value).replace(/^\[object (\w+)]$/, '$1').toLowerCase();
    }

    /**
     * isString
     *
     * @static
     * @return boolean
     */

  }, {
    key: 'isString',
    value: function isString(value) {
      return typeof value === 'string';
    }

    /**
     * hasValue
     *
     * @static
     * @return
     */

  }, {
    key: 'hasValue',
    value: function hasValue(params) {
      return params.length === 2;
    }

    /**
     * rawType
     *
     * @static
     * @return
     */

  }, {
    key: 'rawType',
    value: function rawType(value) {
      return Object.prototype.toString.call(value);
    }

    /**
     * is
     *
     * @static
     * @return boolean
     */

  }, {
    key: 'is',
    value: function is() {
      var _this = this;

      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      var typeToTest = params[0],
          value = params[1];


      if (!this.isString(typeToTest)) {
        throw new TypeError('typeToTest must be a string');
      }

      if (!this.hasValue(params)) {
        return function (value) {
          return _this.is(typeToTest, value);
        };
      }

      var type = typeToTest.replace(/^\w/, function (l) {
        return l.toUpperCase();
      });
      return this.rawType(value) === '[object ' + type + ']';
    }
  }]);

  return Utils;
}();

exports.default = Utils;
module.exports = exports.default;

/***/ })

/******/ });
});
//# sourceMappingURL=price-format.js.map