"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _helperFunctions = require("../../utils/helperFunctions");
var _useEventsList2 = _interopRequireDefault(require("./useEventsList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useFavorites = function useFavorites() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    favorites = _useState2[0],
    setFavorites = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedEvent = _useState4[0],
    setSelectedEvent = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    recommendedEvents = _useState6[0],
    setRecommendedEvents = _useState6[1];
  var _useEventsList = (0, _useEventsList2.default)(),
    eventsFromApi = _useEventsList.eventsFromApi;
  var recommendedList = (0, _react.useMemo)(function () {
    if (!selectedEvent || !selectedEvent.tags) {
      return [];
    }
    var recommended = eventsFromApi.filter(function (event) {
      return (
        // Исключаем попадание выбранной карточки в список рекомендаций
        event.id !== selectedEvent.id && event.tags.some(function (tag) {
          var tagName = tag.name.toLowerCase().trim();
          return selectedEvent.tags.some(function (selectedTag) {
            return selectedTag.name.toLowerCase().trim() === tagName;
          });
        })
      );
    });
    if (recommended.length === 0) {
      var randomEvents = (0, _helperFunctions.getRandomEvents)(eventsFromApi, 4);
      setRecommendedEvents(randomEvents);
      return randomEvents; // Добавлен возврат значения
    } else {
      setRecommendedEvents(recommended.slice(0, 4));
      return recommended.slice(0, 4); // Добавлен возврат значения
    }
  }, [selectedEvent, eventsFromApi]);

  // Загрузка текущего события в локальное хранилище
  (0, _react.useEffect)(function () {
    var savedSelectedEvent = JSON.parse(localStorage.getItem("selectedEvent"));
    if (savedSelectedEvent) {
      setSelectedEvent(savedSelectedEvent);
    }
  }, []);

  // Cохранение текущего события в локальное хранилище чтобы не терять контекст
  (0, _react.useEffect)(function () {
    localStorage.setItem("selectedEvent", JSON.stringify(selectedEvent));
  }, [selectedEvent]);
  var handleCardClick = function handleCardClick(event) {
    setSelectedEvent(event);
    navigate("events/".concat(event.id));
  };

  // Загрузка избранных событий из локального хранилища
  (0, _react.useEffect)(function () {
    var savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  // Сохранение избранных событий в локальное хранилище
  (0, _react.useEffect)(function () {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Функция обновления массива избранных событий
  var updateFavorites = function updateFavorites(event) {
    setFavorites(function (prevFavorites) {
      var isEventInFavorites = prevFavorites.some(function (item) {
        return item.id === event.id;
      });
      if (!isEventInFavorites) {
        return [].concat(_toConsumableArray(prevFavorites), [_objectSpread(_objectSpread({}, event), {}, {
          isLiked: true
        })]);
      } else {
        return prevFavorites.filter(function (item) {
          return item.id !== event.id;
        });
      }
    });
  };
  var toggleFavorite = function toggleFavorite(event) {
    updateFavorites(event);
    // Обновление isLiked у selectedEvent
    var updatedSelectedEvent = _objectSpread({}, selectedEvent);
    if (selectedEvent && selectedEvent.id === event.id) {
      updatedSelectedEvent.isLiked = !updatedSelectedEvent.isLiked;
    }
    setSelectedEvent(updatedSelectedEvent);
  };
  return {
    favorites: favorites,
    handleCardClick: handleCardClick,
    toggleFavorite: toggleFavorite,
    setSelectedEvent: setSelectedEvent,
    recommendedEvents: recommendedEvents,
    setRecommendedEvents: setRecommendedEvents,
    selectedEvent: selectedEvent
  };
};
var _default = useFavorites;
exports.default = _default;