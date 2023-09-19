"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _clsx2 = _interopRequireDefault(require("clsx"));
var _lodash = _interopRequireDefault(require("lodash"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _close = _interopRequireDefault(require("./../../images/Actions/close.svg"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TagButton = function TagButton(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    isEnabled = _ref.isEnabled;
  return /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange(!isEnabled);
    },
    className: (0, _clsx2.default)(_stylesModule.default.tagElement, _defineProperty({}, _stylesModule.default.clicked, isEnabled))
  }, value, isEnabled && /*#__PURE__*/React.createElement("img", {
    src: _close.default,
    alt: "Cross"
  }));
};
TagButton.propTypes = {
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  isEnabled: _propTypes.default.bool
};
TagButton.defaultProps = {
  isEnabled: false
};
var _default = TagButton;
exports.default = _default;