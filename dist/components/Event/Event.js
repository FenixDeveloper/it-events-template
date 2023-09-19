"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _CardList = require("../CardList/CardList");
var _EventDescription = require("../EventDescription/EventDescription");
var _EventsContext = require("../../utils/context/EventsContext");
var _useIsMobileResolution = _interopRequireDefault(require("../../utils/hooks/useIsMobileResolution"));
var _defaultImage = _interopRequireDefault(require("../../images/default-image.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Event = function Event(_ref) {
  var selectedEvent = _ref.selectedEvent;
  var _useEventsContext = (0, _EventsContext.useEventsContext)(),
    recommendedEvents = _useEventsContext.recommendedEvents,
    favoriteEvents = _useEventsContext.favoriteEvents,
    toggleFavorite = _useEventsContext.toggleFavorite;
  var isNotMobile = (0, _useIsMobileResolution.default)(1440);
  var recommended = !isNotMobile ? recommendedEvents.slice(0, 6) : recommendedEvents.slice(0, 4);
  var handleImageError = function handleImageError(e) {
    e.target.src = _defaultImage.default;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.eventContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.main
  }, /*#__PURE__*/_react.default.createElement(_EventDescription.EventDescription, {
    selectedEvent: selectedEvent,
    favoriteEvents: favoriteEvents,
    onLikeClick: toggleFavorite
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: _stylesModule.default.eventImage,
    src: selectedEvent.image,
    alt: selectedEvent.title,
    onError: handleImageError
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.listWrapper
  }, /*#__PURE__*/_react.default.createElement(_CardList.CardList, {
    title: "\u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043A\u0436\u0435",
    listDirection: "row",
    cardDirection: "column",
    style: {
      gap: "22px"
    },
    events: recommended
  })));
};
exports.Event = Event;