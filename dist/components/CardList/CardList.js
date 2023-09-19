"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardList = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Card = require("../Card/Card");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CardList = function CardList(_ref) {
  var title = _ref.title,
    events = _ref.events,
    listDirection = _ref.listDirection,
    cardDirection = _ref.cardDirection,
    style = _ref.style;
  return /*#__PURE__*/_react.default.createElement("section", {
    className: _stylesModule.default.section
  }, title && /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.titleContainer
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: _stylesModule.default.title
  }, title)), /*#__PURE__*/_react.default.createElement("ul", {
    className: "".concat(_stylesModule.default.list, " ").concat(listDirection === "row" ? _stylesModule.default.row : _stylesModule.default.column),
    style: style
  }, events === null || events === void 0 ? void 0 : events.map(function (event) {
    return /*#__PURE__*/_react.default.createElement(_Card.Card, {
      key: event.id,
      event: event,
      cardDirection: cardDirection
    });
  })));
};
exports.CardList = CardList;
CardList.propTypes = {
  title: _propTypes.default.string,
  events: _propTypes.default.array,
  listDirection: _propTypes.default.string,
  cardDirection: _propTypes.default.string,
  style: _propTypes.default.object
};