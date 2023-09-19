"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** UI component*/
var InputCheckbox = function InputCheckbox(_ref) {
  var label = _ref.label,
    name = _ref.name,
    value = _ref.value,
    checked = _ref.checked,
    onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: label
  }, /*#__PURE__*/React.createElement("input", {
    onChange: onChange,
    id: label,
    name: name,
    value: value,
    type: "checkbox",
    className: _stylesModule.default.checkbox,
    checked: checked
  }), /*#__PURE__*/React.createElement("span", {
    className: _stylesModule.default.checkboxLabel
  }, value));
};
InputCheckbox.propTypes = {
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  checked: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
var _default = InputCheckbox;
exports.default = _default;