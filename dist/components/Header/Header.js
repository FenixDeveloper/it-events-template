"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _reactRouterDom = require("react-router-dom");
var _Logo = _interopRequireDefault(require("../../UI-kit/Logo/Logo"));
var _favoritesHeaderIcon = require("../../images/favorites-header-icon.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Header = function Header() {
  return /*#__PURE__*/_react.default.createElement("header", {
    className: _stylesModule.default.header
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: _stylesModule.default.link,
    to: "/favorites"
  }, /*#__PURE__*/_react.default.createElement(_favoritesHeaderIcon.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")));
};
exports.Header = Header;