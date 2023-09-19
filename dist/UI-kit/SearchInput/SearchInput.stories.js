"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithForm = exports.Basic = void 0;
var _SearchInput = _interopRequireDefault(require("./SearchInput"));
require("./styles.module.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = {
  title: "UI-Kit/Input/SearchInput",
  component: _SearchInput.default,
  parameters: {
    componentSubtitle: "Применимость: Components / LeftFilterBar",
    layout: "centered"
  },
  args: {
    name: "",
    value: "Saint-Petersburg",
    placeholder: "Find...",
    withForm: false
  },
  argTypes: {
    withForm: {
      description: "Boolean value for Submit by Enter"
    },
    onSubmit: {
      description: "Optional Submit handler / Works with withForm prop"
    }
  }
};
/** This is how it looks */
exports.default = _default;
var Basic = function Basic(args) {
  return /*#__PURE__*/React.createElement(_SearchInput.default, args);
};
exports.Basic = Basic;
var WithForm = function WithForm(args) {
  return /*#__PURE__*/React.createElement(Basic, _extends({}, args, {
    withForm: true
  }));
};
exports.WithForm = WithForm;