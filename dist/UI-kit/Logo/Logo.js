"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Logo = function Logo(_ref) {
  var fontSize = _ref.fontSize,
    color = _ref.color,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.logoLink,
    style: {
      fontSize: fontSize,
      color: color
    },
    onClick: onClick
  }, "Connect", /*#__PURE__*/_react.default.createElement("span", null, " {IT}"));
};
Logo.propTypes = {
  fontSize: _propTypes.default.string,
  color: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Logo;
exports.default = _default;