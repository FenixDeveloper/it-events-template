"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** UI Component */
var SearchInput = function SearchInput(_ref) {
  var withForm = _ref.withForm,
    name = _ref.name,
    value = _ref.value,
    placeholder = _ref.placeholder,
    onChange = _ref.onChange,
    onSubmit = _ref.onSubmit;
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmit,
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("input", {
    onChange: onChange,
    name: name,
    type: "text",
    value: value || "",
    placeholder: placeholder,
    className: "".concat(withForm ? _stylesModule.default.inputWithForm : _stylesModule.default.input),
    autoComplete: "off"
  }));
};
SearchInput.propTypes = {
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  withForm: _propTypes.default.bool
};
var _default = SearchInput;
exports.default = _default;