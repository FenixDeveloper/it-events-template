"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;
var _Overlay = _interopRequireDefault(require("./Overlay"));
require("./styles.module.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "UI-kit/Overlay",
  component: _Overlay.default,
  argTypes: {
    onClose: {
      type: "function",
      description: "Close handler"
    }
  }
};
exports.default = _default;
var Basic = {
  args: {
    onClose: function onClose() {}
  }
};
exports.Basic = Basic;