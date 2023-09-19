"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var initialValues = {
  query: "",
  status: [],
  city: null,
  date: null,
  specialities: [],
  price: null,
  findTags: null,
  tags: []
};
var useFilters = function useFilters() {
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    findValues = _useState2[0],
    setFindValues = _useState2[1];
  var _useState3 = (0, _react.useState)(initialValues),
    _useState4 = _slicedToArray(_useState3, 2),
    values = _useState4[0],
    setValues = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    filters = _useState6[0],
    setFilters = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isFiltersOpen = _useState8[0],
    setIsFiltersOpen = _useState8[1];
  var isEmptyValue = function isEmptyValue(v) {
    return v === null || v === "" || v === undefined;
  };
  var getFilterValues = function getFilterValues() {
    return Object.keys(filters).filter(function (k) {
      return !isEmptyValue(filters[k]);
    }).reduce(function (acc, cur) {
      return Object.assign(acc, _defineProperty({}, cur, filters[cur]));
    }, {});
  };
  var toggleFilters = function toggleFilters() {
    setIsFiltersOpen(!isFiltersOpen);
  };
  var closeFilters = function closeFilters() {
    setIsFiltersOpen(false);
  };
  var resetValues = function resetValues() {
    setValues(initialValues);
  };
  var resetFilters = function resetFilters() {
    setFilters({});
  };
  var getValuesArray = function getValuesArray() {
    return Object.values(values).reduce(function (acc, value) {
      if (typeof value === "string") {
        acc.push(value);
      } else if (Array.isArray(value)) {
        var stringItems = value.filter(function (item) {
          return typeof item === "string";
        });
        acc = acc.concat(stringItems);
      }
      return acc;
    }, []);
  };
  return {
    findValues: findValues,
    setFindValues: setFindValues,
    values: values,
    setValues: setValues,
    getFilterValues: getFilterValues,
    filters: filters,
    setFilters: setFilters,
    resetFilters: resetFilters,
    resetValues: resetValues,
    isFiltersOpen: isFiltersOpen,
    toggleFilters: toggleFilters,
    closeFilters: closeFilters,
    getValuesArray: getValuesArray
  };
};
var _default = useFilters;
exports.default = _default;