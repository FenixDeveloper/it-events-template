"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _reactRouterDom = require("react-router-dom");
var _Header = require("../components/Header/Header");
var _Footer = require("../components/Footer/Footer");
var _react = _interopRequireDefault(require("@types/react"));
var _index = require("../index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Layout = function Layout() {
  return /*#__PURE__*/_react.default.createElement(_index.App, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.app
  }, /*#__PURE__*/_react.default.createElement(_Header.Header, null), /*#__PURE__*/_react.default.createElement("main", {
    className: _stylesModule.default.main
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Outlet, null)), /*#__PURE__*/_react.default.createElement(_Footer.Footer, null)));
};
exports.Layout = Layout;