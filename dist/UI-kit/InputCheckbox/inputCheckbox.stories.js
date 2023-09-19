"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;
var _InputCheckbox = _interopRequireDefault(require("./InputCheckbox"));
require("./styles.module.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "UI-Kit/Input/InputCheckbox",
  component: _InputCheckbox.default,
  argTypes: {
    label: {
      description: "label for htmlFor and id"
    },
    name: {
      description: "Input name"
    },
    value: {
      description: "Input value"
    },
    checked: {
      type: "boolean",
      defaultValue: false,
      description: "Checkbox status checked"
    },
    onChange: {
      type: "function",
      description: "Click handler"
    }
  }
};
/** This is how it looks by default */
exports.default = _default;
var Basic = {
  args: {
    label: "",
    name: "",
    value: "Checkbox",
    checked: false,
    onChange: function onChange() {}
  }
};
exports.Basic = Basic;