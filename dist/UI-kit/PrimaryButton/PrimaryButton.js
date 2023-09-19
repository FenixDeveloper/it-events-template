"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _arrowRight = require("../../images/Arrows/arrow-right.svg");
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PrimaryButton = function PrimaryButton(_ref) {
  var title = _ref.title,
    to = _ref.to,
    variant = _ref.variant,
    disabled = _ref.disabled,
    target = _ref.target,
    onClick = _ref.onClick;
  return variant === "link" ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: variant === "link" ? to : "",
    target: target,
    className: _stylesModule.default.primaryLink
  }, title, /*#__PURE__*/_react.default.createElement(_arrowRight.ReactComponent, null)) : /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    type: "button",
    className: _stylesModule.default.primaryButton,
    disabled: disabled
  }, " ", title);
};
PrimaryButton.propTypes = {
  title: _propTypes.default.string,
  to: _propTypes.default.string,
  variant: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  target: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = PrimaryButton;
exports.default = _default;