"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PopupLink = function PopupLink(_ref) {
  var top = _ref.top,
    right = _ref.right;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.linkPopup,
    style: {
      top: top,
      right: right
    }
  }, "\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430");
};
PopupLink.propTypes = {
  top: _propTypes.default.string,
  right: _propTypes.default.string
};
var _default = PopupLink;
exports.default = _default;