"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _reactLoaderSpinner = require("react-loader-spinner");
var _Overlay = _interopRequireDefault(require("./Overlay/Overlay"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Loader = function Loader() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Overlay.default, null), /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.loaderContainer
  }, /*#__PURE__*/React.createElement(_reactLoaderSpinner.Circles, {
    height: "80",
    width: "80",
    color: "#674EAE",
    ariaLabel: "circles-loading",
    visible: true
  })));
};
var _default = Loader;
exports.default = _default;