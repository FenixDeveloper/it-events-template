"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;
var _PopupLink = _interopRequireDefault(require("./PopupLink"));
require("./styles.module.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "UI-kit/PopupLink",
  component: _PopupLink.default,
  argTypes: {
    top: {
      description: "Top position"
    },
    right: {
      description: "Right position"
    }
  }
};
exports.default = _default;
var Basic = {
  args: {
    top: "0",
    right: ""
  }
};
exports.Basic = Basic;