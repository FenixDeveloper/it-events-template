"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SearchFilterContext = require("../../utils/context/SearchFilterContext");
var _EventsContext = require("../../utils/context/EventsContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_EventsContext.EventsProvider, null, /*#__PURE__*/_react.default.createElement(_SearchFilterContext.FiltersProvider, null, children));
}
var _default = App;
exports.default = _default;