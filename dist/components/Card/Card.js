"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _react = _interopRequireWildcard(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _helperFunctions = require("../../utils/helperFunctions");
var _EventsContext = require("../../utils/context/EventsContext");
var _defaultImage = _interopRequireDefault(require("../../images/default-image.png"));
var _place = require("../../images/EventInfo/place.svg");
var _calendar = require("../../images/EventInfo/calendar.svg");
var _time = require("../../images/EventInfo/time.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Card = function Card(_ref) {
  var event = _ref.event,
    style = _ref.style,
    cardDirection = _ref.cardDirection;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    imageError = _useState2[0],
    setImageError = _useState2[1];
  var _useEventsContext = (0, _EventsContext.useEventsContext)(),
    handleCardClick = _useEventsContext.handleCardClick,
    toggleFavorite = _useEventsContext.toggleFavorite;
  var handleImageError = function handleImageError() {
    setImageError(true);
  };
  var eventStartDate = (0, _helperFunctions.parseEventDate)(event.date_start);
  var eventEndDate = (0, _helperFunctions.parseEventDate)(event.date_end);
  var eventDate = eventStartDate === eventEndDate ? eventStartDate : "".concat(eventStartDate, " - ").concat(eventEndDate);
  var cardDetails = [{
    icon: /*#__PURE__*/_react.default.createElement(_calendar.ReactComponent, null),
    content: eventDate
  }, {
    icon: /*#__PURE__*/_react.default.createElement(_time.ReactComponent, null),
    content: (0, _helperFunctions.formatTimeRange)(event.date_start, event.date_end)
  }, {
    icon: /*#__PURE__*/_react.default.createElement(_place.ReactComponent, null),
    content: event.city !== "" && event.city !== " " ? event.city : "Online"
  }, {
    content: (0, _helperFunctions.formatPrice)(event.price),
    styles: _stylesModule.default.price
  }];
  return /*#__PURE__*/_react.default.createElement("li", {
    key: event.id,
    className: "".concat(_stylesModule.default.card),
    style: {
      flexDirection: cardDirection === "column" ? "column" : ""
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.imageContainer
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/events/".concat(event.id),
    className: _stylesModule.default.cardLink
  }, imageError ? /*#__PURE__*/_react.default.createElement("img", {
    src: _defaultImage.default,
    alt: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",
    className: _stylesModule.default.image,
    onClick: function onClick() {
      return handleCardClick(event);
    }
  }) : /*#__PURE__*/_react.default.createElement("img", {
    src: event.image_small ? event.image_small : event.image,
    alt: "event_picture",
    className: _stylesModule.default.image,
    onClick: function onClick() {
      return handleCardClick(event);
    },
    onError: handleImageError
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(event.isLiked ? _stylesModule.default.likeButtonActive : _stylesModule.default.likeButton),
    type: "button",
    onClick: function onClick() {
      return toggleFavorite(event);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_stylesModule.default.descriptionContainer)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.titleContainer
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: _stylesModule.default.title,
    style: style
  }, event.title)), /*#__PURE__*/_react.default.createElement("ul", {
    className: _stylesModule.default.rowContainer
  }, cardDetails.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: _stylesModule.default.rowItem
    }, item.icon, /*#__PURE__*/_react.default.createElement("p", {
      className: item.styles
    }, item.content));
  }))));
};
exports.Card = Card;
Card.propTypes = {
  event: _propTypes.default.object,
  style: _propTypes.default.string,
  cardDirection: _propTypes.default.string
};