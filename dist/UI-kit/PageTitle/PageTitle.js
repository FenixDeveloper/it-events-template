"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PageTitle = function PageTitle(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    size = _ref.size;
  return /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.container
  }, /*#__PURE__*/React.createElement("h1", {
    className: _stylesModule.default.title,
    style: {
      fontSize: size
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: _stylesModule.default.subtitle
  }, subtitle));
};
PageTitle.propTypes = {
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  size: _propTypes.default.string
};
var _default = PageTitle;
exports.default = _default;