"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DesktopSearch = void 0;
var _SearchField = require("./SearchField");
var _default = {
  title: "Components/SearchFieldGroup",
  parameters: {
    componentSubtitle: "Components > SearchField and MobileSearch"
  }
};
exports.default = _default;
var StoryWrapper = function StoryWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "650px",
      padding: "2em"
    }
  }, children);
};

/** Применимость: Pages > DesktopResolution */
var DesktopSearch = function DesktopSearch() {
  return /*#__PURE__*/React.createElement(StoryWrapper, null, /*#__PURE__*/React.createElement(_SearchField.SearchField, null));
};
exports.DesktopSearch = DesktopSearch;