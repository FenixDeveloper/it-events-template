"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;
var _PrimaryButton = _interopRequireDefault(require("./PrimaryButton"));
require("./styles.module.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "Ui-kit/PrimaryButton",
  component: _PrimaryButton.default,
  args: {
    title: "Это кнопка"
  }
};
exports.default = _default;
var Basic = function Basic(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "storybook-case-wrapper"
  }, /*#__PURE__*/React.createElement(_PrimaryButton.default, props));
};
exports.Basic = Basic;