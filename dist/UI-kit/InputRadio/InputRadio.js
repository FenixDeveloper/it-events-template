"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** UI component*/
var InputRadio = function InputRadio(_ref) {
  var label = _ref.label,
    value = _ref.value,
    name = _ref.name,
    checked = _ref.checked,
    onChange = _ref.onChange,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: label,
    className: _stylesModule.default.radioButton
  }, /*#__PURE__*/React.createElement("input", {
    onChange: onChange,
    id: label,
    type: "radio",
    value: value,
    name: name,
    checked: checked
  }), /*#__PURE__*/React.createElement("span", {
    className: "".concat(label === "pickdate" && _stylesModule.default.radioText)
  }, value), children);
};
InputRadio.propTypes = {
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  checked: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  children: _propTypes.default.node
};
var _default = InputRadio;
exports.default = _default;