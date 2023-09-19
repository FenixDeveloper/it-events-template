"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;
var _Header = require("./Header");
var _default = {
  title: "Components/Header",
  component: _Header.Header,
  parameters: {
    componentSubtitle: "Components > Header"
  }
};
/** Применимость: Layout */
exports.default = _default;
var Basic = function Basic() {
  return /*#__PURE__*/React.createElement(_Header.Header, null);
};
exports.Basic = Basic;