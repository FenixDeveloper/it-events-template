"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Overlay = function Overlay(_ref) {
  var onClose = _ref.onClose;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.overlay,
    onClick: onClose
  });
};
Overlay.propTypes = {
  onClose: _propTypes.default.func
};
var _default = /*#__PURE__*/_react.default.memo(Overlay);
exports.default = _default;