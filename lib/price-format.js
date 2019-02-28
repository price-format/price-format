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
		define("PriceFormat", [], factory);
	else if(typeof exports === 'object')
		exports["PriceFormat"] = factory();
	else
		root["PriceFormat"] = factory();
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
  amount: 0,
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__(/*! ./api */ "./src/api.js");

var API = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class PriceFormat
 *
 * @class
 */
var PriceFormat = function () {
  function PriceFormat() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, PriceFormat);

    this.formatedAmount = null;
    this.setOptions(options);
  }

  _createClass(PriceFormat, [{
    key: 'currencyFormatter',
    value: function currencyFormatter() {
      this.formatedAmount = '' + this.options.prefix + this.getThousandsAmountFormatted() + this.options.centsSeparator + this.amount.afterCentsSeparator + this.options.suffix;
    }
  }, {
    key: 'setOptions',
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.options = Object.assign({}, API.Defaults, options);
    }
  }, {
    key: 'getThousandsAmountFormatted',
    value: function getThousandsAmountFormatted() {
      return this.amount.beforeCentsSeparator.split('').reverse().join('').match(/.{1,3}/g).reverse().map(function (num) {
        return num.split('').reverse().join('');
      }).join(this.options.thousandsSeparator);
    }
  }, {
    key: 'format',
    value: function format(amount) {
      var centsPad = '00';
      var integerPad = '0';
      this.options.amount = '' + (amount || this.options.amount);

      var beforeCents = this.options.amount.substring(0, this.options.amount.length - 2);
      var afterCents = this.options.amount.substring(this.options.amount.length - 2);

      this.amount = {
        beforeCentsSeparator: integerPad.substring(0, integerPad.length - beforeCents.length) + beforeCents,
        afterCentsSeparator: centsPad.substring(0, centsPad.length - afterCents.length) + afterCents
      };
      this.currencyFormatter();

      return this.formatedAmount;
    }
  }]);

  return PriceFormat;
}();

exports.default = PriceFormat;
module.exports = exports.default;

/***/ })

/******/ });
});
//# sourceMappingURL=price-format.js.map