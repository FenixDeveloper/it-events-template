"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _reactRouterDom = require("react-router-dom");
var _Header = require("../components/Header/Header");
var _Footer = require("../components/Footer/Footer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Layout = function Layout() {
  return /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.app
  }, /*#__PURE__*/React.createElement(_Header.Header, null), /*#__PURE__*/React.createElement("main", {
    className: _stylesModule.default.main
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Outlet, null)), /*#__PURE__*/React.createElement(_Footer.Footer, null));
};
exports.Layout = Layout;