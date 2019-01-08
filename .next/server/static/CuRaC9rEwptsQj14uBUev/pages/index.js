module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb/style");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip/style");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/breadcrumb/style"
var style_ = __webpack_require__(9);

// EXTERNAL MODULE: external "antd/lib/breadcrumb"
var breadcrumb_ = __webpack_require__(4);
var breadcrumb_default = /*#__PURE__*/__webpack_require__.n(breadcrumb_);

// EXTERNAL MODULE: external "antd/lib/icon/style"
var icon_style_ = __webpack_require__(10);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(3);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/menu/style"
var menu_style_ = __webpack_require__(11);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(1);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/layout/style"
var layout_style_ = __webpack_require__(12);

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(2);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(13);

// CONCATENATED MODULE: ./containers/MainTheme.js









function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Header = layout_default.a.Header,
    Content = layout_default.a.Content,
    Footer = layout_default.a.Footer,
    Sider = layout_default.a.Sider;
var SubMenu = menu_default.a.SubMenu;

var MainTheme_MainTheme =
/*#__PURE__*/
function (_Component) {
  _inherits(MainTheme, _Component);

  function MainTheme() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MainTheme);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainTheme)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      collapsed: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCollapse", function (collapsed) {
      _this.setState({
        collapsed: collapsed
      });
    });

    return _this;
  }

  _createClass(MainTheme, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(layout_default.a, {
        style: {
          minHeight: '100vh'
        }
      }, external_react_default.a.createElement(Sider, {
        collapsible: true,
        collapsed: this.state.collapsed,
        onCollapse: this.onCollapse
      }, external_react_default.a.createElement("div", {
        className: "logo"
      }), external_react_default.a.createElement(menu_default.a, {
        theme: "dark",
        defaultSelectedKeys: ['1'],
        mode: "inline"
      }, external_react_default.a.createElement(menu_default.a.Item, {
        key: "1"
      }, external_react_default.a.createElement(icon_default.a, {
        type: "pie-chart"
      }), external_react_default.a.createElement("span", null, "Option 1")), external_react_default.a.createElement(menu_default.a.Item, {
        key: "2"
      }, external_react_default.a.createElement(icon_default.a, {
        type: "desktop"
      }), external_react_default.a.createElement("span", null, "Option 2")), external_react_default.a.createElement(SubMenu, {
        key: "sub1",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(icon_default.a, {
          type: "user"
        }), external_react_default.a.createElement("span", null, "User"))
      }, external_react_default.a.createElement(menu_default.a.Item, {
        key: "3"
      }, "Tom"), external_react_default.a.createElement(menu_default.a.Item, {
        key: "4"
      }, "Bill"), external_react_default.a.createElement(menu_default.a.Item, {
        key: "5"
      }, "Alex")), external_react_default.a.createElement(SubMenu, {
        key: "sub2",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(icon_default.a, {
          type: "team"
        }), external_react_default.a.createElement("span", null, "Team"))
      }, external_react_default.a.createElement(menu_default.a.Item, {
        key: "6"
      }, "Team 1"), external_react_default.a.createElement(menu_default.a.Item, {
        key: "8"
      }, "Team 2")), external_react_default.a.createElement(menu_default.a.Item, {
        key: "9"
      }, external_react_default.a.createElement(icon_default.a, {
        type: "file"
      }), external_react_default.a.createElement("span", null, "File")))), external_react_default.a.createElement(layout_default.a, null, external_react_default.a.createElement(Header, {
        style: {
          background: '#fff',
          padding: 0
        }
      }), external_react_default.a.createElement(Content, {
        style: {
          margin: '0 16px'
        }
      }, external_react_default.a.createElement(breadcrumb_default.a, {
        style: {
          margin: '16px 0'
        }
      }, external_react_default.a.createElement(breadcrumb_default.a.Item, null)), this.props.children), external_react_default.a.createElement(Footer, {
        style: {
          textAlign: 'center'
        }
      }, "Ant Design \xA92018 Created by Ant UED")));
    }
  }]);

  return MainTheme;
}(external_react_["Component"]);

/* harmony default export */ var containers_MainTheme = (MainTheme_MainTheme);
// EXTERNAL MODULE: external "antd/lib/tooltip/style"
var tooltip_style_ = __webpack_require__(14);

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__(6);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "antd/lib/input/style"
var input_style_ = __webpack_require__(15);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(5);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "react-copy-to-clipboard"
var external_react_copy_to_clipboard_ = __webpack_require__(7);

// CONCATENATED MODULE: ./libraries/randomNationId.js
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var randomNationId = function randomNationId(times) {
  var status = false;
  var badNationid = [];
  var goodNationid = [];

  while (goodNationid.length !== times) {
    var currentGood = '';

    var _loop = function _loop() {
      var currentNationId = getRandomInt(1212121212121, 3999999999999).toString();
      var sameNationId = badNationid.filter(function (item) {
        return item === currentNationId;
      });

      if (sameNationId.length >= 1) {
        return "continue";
      }

      var reducer = function reducer(accumulator, currentValue, currentIndex) {
        return currentIndex < currentNationId.length - 1 ? accumulator + parseFloat(currentValue) * (13 - currentIndex) : accumulator;
      };

      var sum = Array.from(currentNationId).reduce(reducer, 0);
      var ok = (11 - sum % 11) % 10 === parseFloat(currentNationId.charAt(12));

      if (ok) {
        status = true;
        currentGood = currentNationId;
      } else {
        badNationid.push(currentNationId);
      }
    };

    while (status === false) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }

    status = false;
    goodNationid.push(currentGood);
  }

  return {
    id: goodNationid,
    times: badNationid.length
  };
};

/* harmony default export */ var libraries_randomNationId = (randomNationId); // console.log('counter random ', badNationid.length, ' times')
// console.log('You can use \n', goodNationid)
// CONCATENATED MODULE: ./components/Form/RandomNationId/MultiRandom.js






function MultiRandom_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MultiRandom_typeof = function _typeof(obj) { return typeof obj; }; } else { MultiRandom_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MultiRandom_typeof(obj); }

function MultiRandom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MultiRandom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MultiRandom_createClass(Constructor, protoProps, staticProps) { if (protoProps) MultiRandom_defineProperties(Constructor.prototype, protoProps); if (staticProps) MultiRandom_defineProperties(Constructor, staticProps); return Constructor; }

function MultiRandom_possibleConstructorReturn(self, call) { if (call && (MultiRandom_typeof(call) === "object" || typeof call === "function")) { return call; } return MultiRandom_assertThisInitialized(self); }

function MultiRandom_getPrototypeOf(o) { MultiRandom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MultiRandom_getPrototypeOf(o); }

function MultiRandom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MultiRandom_setPrototypeOf(subClass, superClass); }

function MultiRandom_setPrototypeOf(o, p) { MultiRandom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MultiRandom_setPrototypeOf(o, p); }

function MultiRandom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Search = input_default.a.Search;

var MultiRandom_Da =
/*#__PURE__*/
function (_Component) {
  MultiRandom_inherits(Da, _Component);

  function Da(props) {
    var _this;

    MultiRandom_classCallCheck(this, Da);

    _this = MultiRandom_possibleConstructorReturn(this, MultiRandom_getPrototypeOf(Da).call(this, props));
    _this.state = {
      value: '',
      array: [],
      loading: false
    };
    _this.handleOnChange = _this.handleOnChange.bind(MultiRandom_assertThisInitialized(MultiRandom_assertThisInitialized(_this)));
    _this.handleOnSearch = _this.handleOnSearch.bind(MultiRandom_assertThisInitialized(MultiRandom_assertThisInitialized(_this)));
    return _this;
  }

  MultiRandom_createClass(Da, [{
    key: "handleOnSearch",
    value: function handleOnSearch(value) {
      var _randomNationId = libraries_randomNationId(parseInt(value)),
          id = _randomNationId.id;

      this.setState({
        array: id
      });
      console.log(this.state.array);
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(e) {
      var value = e.target.value;
      this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Search, {
        placeholder: "\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E38\u0E21",
        enterButton: "Search",
        value: this.state.value,
        size: "large",
        onSearch: this.handleOnSearch,
        onChange: this.handleOnChange
      }), this.state.array.map(function (item) {
        return external_react_default.a.createElement(tooltip_default.a, {
          trigger: ['focus'],
          title: "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27 !!",
          placement: "topLeft",
          overlayClassName: "numeric-input"
        }, external_react_default.a.createElement(external_react_copy_to_clipboard_["CopyToClipboard"], {
          text: item
        }, external_react_default.a.createElement(input_default.a, {
          key: item,
          value: item,
          readOnly: true,
          size: "large",
          style: {
            marginBottom: '10px'
          }
        })));
      }));
    }
  }]);

  return Da;
}(external_react_["Component"]);

/* harmony default export */ var MultiRandom = (MultiRandom_Da);
// CONCATENATED MODULE: ./pages/index.js
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }





var pages_IndexPage =
/*#__PURE__*/
function (_Component) {
  pages_inherits(IndexPage, _Component);

  function IndexPage() {
    pages_classCallCheck(this, IndexPage);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(IndexPage).apply(this, arguments));
  }

  pages_createClass(IndexPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(containers_MainTheme, null, external_react_default.a.createElement(MultiRandom, null));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      // const isServer = !!req
      // reduxStore.dispatch(serverRenderClock(isServer))
      return {};
    }
  }]);

  return IndexPage;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_IndexPage);

/***/ })
/******/ ]);