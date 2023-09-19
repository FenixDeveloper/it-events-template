"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Small = exports.Basic = void 0;
var _Logo = _interopRequireDefault(require("./Logo"));
require("./styles.module.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "UI-kit/Logo",
  component: _Logo.default,
  argTypes: {
    fontSize: {
      description: "Logo font size"
    },
    color: {
      description: "Logo color"
    },
    onClick: {
      description: "Logo click"
    }
  }
};
exports.default = _default;
var Basic = {
  args: {}
};
exports.Basic = Basic;
var Small = {
  args: {
    fontSize: "20px",
    color: "#F1F0EB",
    onClick: function onClick() {}
  }
};
exports.Small = Small;