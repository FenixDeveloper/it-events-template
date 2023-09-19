"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaddingWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PaddingWrapper = function PaddingWrapper(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _stylesModule.default.wrapper
    }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props));
  };
};
exports.PaddingWrapper = PaddingWrapper;