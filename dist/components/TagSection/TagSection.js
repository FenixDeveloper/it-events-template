"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagSection = void 0;
var _react = require("react");
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _UIKit = require("../../UI-kit");
var _SearchFilterContext = require("../../utils/context/SearchFilterContext");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var TagSection = function TagSection(_ref) {
  var handleChange = _ref.handleChange,
    tags = _ref.tags;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showAllTags = _useState2[0],
    setShowAllTags = _useState2[1];
  var _useFiltersContext = (0, _SearchFilterContext.useFiltersContext)(),
    values = _useFiltersContext.values,
    filters = _useFiltersContext.filters,
    setFilters = _useFiltersContext.setFilters;
  TagSection.propTypes = {
    handleChange: _propTypes.default.func,
    tags: _propTypes.default.array
  };
  var tagOptions = tags.map(function (tag) {
    return {
      value: tag.id,
      label: tag.name,
      slug: tag.slug
    };
  });
  var toggleShowAllTags = function toggleShowAllTags() {
    setShowAllTags(!showAllTags);
  };
  return tags && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.tagsList
  }, tagOptions.slice(0, showAllTags ? tags.length : 9).map(function (tag, index) {
    return /*#__PURE__*/React.createElement(_UIKit.TagButton, {
      key: index,
      isEnabled: values.tags.includes(tag.label),
      value: tag.label,
      onChange: handleChange(tag.label)
    });
  })), tags.length > 10 && /*#__PURE__*/React.createElement("button", {
    onClick: toggleShowAllTags,
    className: _stylesModule.default.showMore
  }, showAllTags ? "Свернуть все" : "Показать больше"));
};
exports.TagSection = TagSection;
TagSection.propTypes = {
  handleChange: _propTypes.default.func,
  tags: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.number,
    name: _propTypes.default.string,
    slug: _propTypes.default.string
  }))
};
TagSection.defaultProps = {
  tags: []
};