"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _Logo = _interopRequireDefault(require("../../UI-kit/Logo/Logo"));
var _socialIcons = require("../../images/SocialIcons/socialIcons");
var _useScrollToTop2 = _interopRequireDefault(require("../../utils/hooks/useScrollToTop"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var footerMenu = [{
  text: "О нас"
}, {
  text: "Политика конфиденциональности"
}, {
  text: "Cookies"
}];
var footerIcons = [{
  src: _socialIcons.SocialIcons.GitHub,
  alt: "GitHub"
}, {
  src: _socialIcons.SocialIcons.Messenger,
  alt: "Messenger"
}, {
  src: _socialIcons.SocialIcons.VK,
  alt: "VK"
}];
var Footer = function Footer() {
  var date = new Date().getFullYear();
  var _useScrollToTop = (0, _useScrollToTop2.default)(),
    scrollToTop = _useScrollToTop.scrollToTop;
  return /*#__PURE__*/React.createElement("footer", {
    className: _stylesModule.default.footer
  }, /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.container
  }, /*#__PURE__*/React.createElement(_Logo.default, {
    fontSize: "20px",
    color: "#F1F0EB",
    onClick: scrollToTop
  }), /*#__PURE__*/React.createElement("ul", {
    className: _stylesModule.default.list
  }, footerMenu.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: _stylesModule.default.item,
      key: index
    }, /*#__PURE__*/React.createElement("span", null, item.text));
  })), /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.contacts
  }, /*#__PURE__*/React.createElement("p", {
    className: _stylesModule.default.email
  }, "it-connect-event@yandex.ru"), /*#__PURE__*/React.createElement("ul", {
    className: _stylesModule.default.images
  }, footerIcons.map(function (icon) {
    return /*#__PURE__*/React.createElement("li", {
      key: icon.alt
    }, /*#__PURE__*/React.createElement("img", {
      src: icon.src,
      alt: icon.alt
    }));
  })))), /*#__PURE__*/React.createElement("span", {
    className: _stylesModule.default.year
  }, "\xA9 ", date, " IT-events"));
};
exports.Footer = Footer;