"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFilter = useFilter;
var _react = require("react");
var _debounce = _interopRequireDefault(require("../debounce"));
var _useInitialFilter2 = require("./useInitialFilter");
var _EventsContext = require("../context/EventsContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useFilter(_ref) {
  var values = _ref.values,
    setValues = _ref.setValues,
    setFindValues = _ref.setFindValues;
  var _useInitialFilter = (0, _useInitialFilter2.useInitialFilter)(),
    dataLists = _useInitialFilter.dataLists;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    date = _useState2[0],
    setDate = _useState2[1];
  var _useEventsContext = (0, _EventsContext.useEventsContext)(),
    setSearchQuery = _useEventsContext.setSearchQuery;
  var handleFilter = function handleFilter(_ref2) {
    var _dataLists$name;
    var name = _ref2.name,
      value = _ref2.value;
    var searchList = (_dataLists$name = dataLists[name]) === null || _dataLists$name === void 0 ? void 0 : _dataLists$name.map(function (item) {
      return item === null || item === void 0 ? void 0 : item.toLowerCase();
    });
    var debouncedSetFindValues = (0, _debounce.default)(function (data) {
      return setFindValues(data);
    }, 500);
    if (searchList && value !== "") {
      var findValue = searchList.filter(function (el) {
        return el.search(value.toLowerCase()) === 0;
      });
      if (findValue.length > 0) {
        debouncedSetFindValues(_defineProperty({}, name, findValue));
      } else debouncedSetFindValues(null);
    } else debouncedSetFindValues(null);
  };
  var handleQueryChange = function handleQueryChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
    setSearchQuery(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var input = event.currentTarget;
    var name = input.name;
    var value = input.value;
    if (name === "specialities" || name === "status") {
      var includes = values[name].includes(value);
      if (includes) {
        setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, values[name].filter(function (el) {
          return el !== value;
        }))));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, [].concat(_toConsumableArray(values[name]), [value]))));
      }
    } else if (date && value === "Выбрать дату") {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        date: date
      }));
    } else {
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
      handleFilter({
        name: name,
        value: value
      });
    }
  };
  var handleDateChange = function handleDateChange(event) {
    var input = event.currentTarget;
    var name = input.name;
    var value = input.value;
    if (value !== "") {
      setDate(value);
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
    } else {
      setDate(null);
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, null)));
    }
  };
  var handleButtonChange = function handleButtonChange(tag) {
    return function (isEnabled) {
      if (!isEnabled) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          tags: values.tags.filter(function (el) {
            return el !== tag;
          })
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          tags: [].concat(_toConsumableArray(values.tags), [tag])
        }));
      }
    };
  };
  var setItemOnClick = function setItemOnClick(item) {
    setValues(_objectSpread(_objectSpread({}, values), item));
    setFindValues(null);
  };
  var deleteValue = function deleteValue(item) {
    if (item === "status" || item === "tags" || item === "specialities") {
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, item, [])));
    } else setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, item, null)));
  };
  var handleDateBlur = function handleDateBlur() {
    var currentDate = new Date().toISOString().split("T")[0];
    var selectedDate = values.date;

    // Проверяем, выбрана ли дата до конца
    if (selectedDate === "") {
      // Дата не выбрана
      // Устанавливаем open в true, чтобы календарь не закрывался
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        date: "",
        open: true
      }));
    } else if (selectedDate > currentDate) {
      // Выбранная дата позже текущей даты
      // Выполняем соответствующие действия
      //console.log("Выбранная дата позже текущей даты:", selectedDate);
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        open: false
      }));
    } else {
      // Выбранная дата до или равна текущей дате
      // Выполняем соответствующие действия
      //console.log("Выбранная дата до или равна текущей дате:", selectedDate);
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        open: false
      }));
    }
  };
  return {
    handleQueryChange: handleQueryChange,
    handleInputChange: handleInputChange,
    handleButtonChange: handleButtonChange,
    setItemOnClick: setItemOnClick,
    deleteValue: deleteValue,
    handleDateChange: handleDateChange,
    handleDateBlur: handleDateBlur
  };
}