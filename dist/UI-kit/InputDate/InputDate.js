"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("../InputRadio/styles.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var InputDate = function InputDate(_ref) {
  var onChange = _ref.onChange,
    onBlur = _ref.onBlur;
  return /*#__PURE__*/_react.default.createElement("input", {
    onChange: onChange,
    className: _stylesModule.default.pickdate,
    name: "date",
    type: "date",
    onBlur: onBlur,
    min: new Date()
  });
};
var _default = InputDate;
exports.default = _default;