webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Form/RandomNationId/index.js":
/*!*************************************************!*\
  !*** ./components/Form/RandomNationId/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/snilli/Documents/randomNationId/components/Form/RandomNationId/index.js";

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

// // import { Component } from 'react'
// import { Row, Col, Input } from 'antd'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
// const layout = {
//   xs: { span: 16, offset: 4 },
//   sm: { span: 16, offset: 4 },
//   md: { span: 16, offset: 4 },
//   lg: { span: 16, offset: 4 },
//   xl: { span: 16, offset: 4 },
// }
// const { Search } = Input
// const d = () => (
//   <div>
//     <Row gutter={8}>
//       <Col {...layout}>
//         <Input value="sds" />
//         <Search
//           placeholder="input search text"
//           enterButton="Search"
//           size="large"
//           readOnly
//           value="sds"
//           // onSearch={value => console.log(value)}
//         />
//         <CopyToClipboard text="adfdsfdf">
//           <span>Copy to clipboard with span</span>
//         </CopyToClipboard>
//       </Col>
//     </Row>
//   </div>
// )
// // class RandomNationId extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <Row gutter={8}>
// //           <Col {...layout}>
// //             <Input value="sds" />
// //           </Col>
// //         </Row>
// //       </div>
// //     )
// //   }
// // }
// export default d



var Da =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Da, _React$Component);

  function Da() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Da);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Da)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: '',
      copied: false
    });

    return _this;
  }

  _createClass(Da, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.value,
        onChange: function onChange(_ref) {
          var value = _ref.target.value;
          return _this2.setState({
            value: value,
            copied: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
        text: this.state.value,
        onCopy: function onCopy() {
          return _this2.setState({
            copied: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Copy to clipboard with span")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["CopyToClipboard"], {
        text: this.state.value,
        onCopy: function onCopy() {
          return _this2.setState({
            copied: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Copy to clipboard with button")), this.state.copied ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Copied.") : null);
    }
  }]);

  return Da;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Da);

/***/ })

})
//# sourceMappingURL=index.js.2771b137ab7a1f0e42c3.hot-update.js.map