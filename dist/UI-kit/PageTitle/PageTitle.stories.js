"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;
var _PageTitle = _interopRequireDefault(require("./PageTitle"));
require("./styles.module.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "UI-kit/PageTitle",
  component: _PageTitle.default,
  argTypes: {
    title: {
      description: "Page title"
    },
    subtitle: {
      description: "Page text"
    },
    size: {
      description: "Title font size"
    }
  }
};
exports.default = _default;
var Basic = {
  args: {
    title: "Заголовок",
    subtitle: "Основной текст",
    size: ""
  }
};
exports.Basic = Basic;