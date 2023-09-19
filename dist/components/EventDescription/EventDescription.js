"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventDescription = void 0;
var _react = require("react");
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _UIKit = require("../../UI-kit");
var _DescriptionTabs = require("../DescriptionTabs/DescriptionTabs");
var _calendar = require("../../images/EventInfo/calendar.svg");
var _time = require("../../images/EventInfo/time.svg");
var _place = require("../../images/EventInfo/place.svg");
var _likeButton = require("../../images/like-button.svg");
var _likeButton_active = require("../../images/like-button_active.svg");
var _share = require("../../images/Actions/share.svg");
var _helperFunctions = require("../../utils/helperFunctions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EventDescription = function EventDescription(_ref) {
  var selectedEvent = _ref.selectedEvent,
    onLikeClick = _ref.onLikeClick,
    favoriteEvents = _ref.favoriteEvents;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showNotification = _useState2[0],
    setShowNotification = _useState2[1];
  var handleButtonClick = function handleButtonClick() {
    var link = "".concat(window.location.origin, "/events/").concat(selectedEvent.id);
    console.log("Ссылка скопирована в EventPage", link);
    (0, _helperFunctions.handleCopyLink)(link, setShowNotification);
  };
  var handleLikeClick = function handleLikeClick() {
    onLikeClick(selectedEvent);
  };
  var isLiked = favoriteEvents.find(function (event) {
    return event.id === selectedEvent.id;
  });
  var eventStartDate = (0, _helperFunctions.formatDate)(selectedEvent.date_start);
  var eventEndDate = (0, _helperFunctions.formatDate)(selectedEvent.date_end);
  var eventDate = eventStartDate === eventEndDate ? eventStartDate : "".concat(eventStartDate, " - ").concat(eventEndDate);
  return /*#__PURE__*/React.createElement("section", {
    className: _stylesModule.default.eventDescription
  }, /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.eventHeader
  }, showNotification && /*#__PURE__*/React.createElement(_UIKit.PopupLink, {
    top: "55px",
    right: "0"
  }), /*#__PURE__*/React.createElement("h1", {
    className: _stylesModule.default.eventName
  }, selectedEvent.title), /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.eventFigures
  }, /*#__PURE__*/React.createElement("figure", {
    className: _stylesModule.default.eventFigure,
    onClick: handleLikeClick
  }, isLiked ? /*#__PURE__*/React.createElement(_likeButton_active.ReactComponent, null) : /*#__PURE__*/React.createElement(_likeButton.ReactComponent, null)), /*#__PURE__*/React.createElement("figure", {
    className: _stylesModule.default.eventFigure,
    onClick: handleButtonClick
  }, /*#__PURE__*/React.createElement(_share.ReactComponent, null)))), /*#__PURE__*/React.createElement("ul", {
    className: _stylesModule.default.eventDates
  }, /*#__PURE__*/React.createElement("li", {
    className: _stylesModule.default.eventDate
  }, /*#__PURE__*/React.createElement(_calendar.ReactComponent, null), eventDate), /*#__PURE__*/React.createElement("li", {
    className: _stylesModule.default.eventDate
  }, /*#__PURE__*/React.createElement(_time.ReactComponent, null), (0, _helperFunctions.formatTimeRange)(selectedEvent.date_start, selectedEvent.date_end)), /*#__PURE__*/React.createElement("li", {
    className: _stylesModule.default.eventDate
  }, /*#__PURE__*/React.createElement(_place.ReactComponent, null), (selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.address) === " " || (selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.address) === "" ? "Online" : selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.address), /*#__PURE__*/React.createElement("li", {
    className: _stylesModule.default.eventPrice
  }, (0, _helperFunctions.formatPrice)(selectedEvent.price))), /*#__PURE__*/React.createElement(_UIKit.PrimaryButton, {
    variant: "link",
    target: "_blank",
    title: "\u0421\u0430\u0439\u0442 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",
    to: selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.url
  }), /*#__PURE__*/React.createElement(_DescriptionTabs.DescriptionTabs, {
    selectedEvent: selectedEvent
  }));
};
exports.EventDescription = EventDescription;