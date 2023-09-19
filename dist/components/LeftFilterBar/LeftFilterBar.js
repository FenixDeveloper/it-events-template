"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeftFilterBar = void 0;
var _react = require("react");
var dayjs = _interopRequireWildcard(require("dayjs"));
var _weekday = _interopRequireDefault(require("dayjs/plugin/weekday"));
var _framerMotion = require("framer-motion");
var _motion = require("../../utils/motion");
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _TagSection = require("../TagSection/TagSection");
var _useFilter2 = require("../../utils/hooks/useFilter");
var _EventsContext = require("../../utils/context/EventsContext");
var _useInitialFilter2 = require("../../utils/hooks/useInitialFilter");
var _SearchFilterContext = require("../../utils/context/SearchFilterContext");
var _UIKit = require("../../UI-kit");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
dayjs.extend(_weekday.default);
var LeftFilterBar = function LeftFilterBar() {
  var _dataLists$topics2;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showAllDates = _useState2[0],
    setShowAllDates = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showAllTopics = _useState4[0],
    setShowAllTopics = _useState4[1];
  var _useInitialFilter = (0, _useInitialFilter2.useInitialFilter)(),
    dataLists = _useInitialFilter.dataLists;
  var _useEventsContext = (0, _EventsContext.useEventsContext)(),
    handleSearch = _useEventsContext.handleSearch;
  var _useFiltersContext = (0, _SearchFilterContext.useFiltersContext)(),
    values = _useFiltersContext.values,
    setValues = _useFiltersContext.setValues,
    findValues = _useFiltersContext.findValues,
    setFindValues = _useFiltersContext.setFindValues,
    closeFilters = _useFiltersContext.closeFilters,
    getValuesArray = _useFiltersContext.getValuesArray,
    filters = _useFiltersContext.filters,
    setFilters = _useFiltersContext.setFilters,
    getFilterValues = _useFiltersContext.getFilterValues,
    resetValues = _useFiltersContext.resetValues,
    resetFilters = _useFiltersContext.resetFilters;
  var _useFilter = (0, _useFilter2.useFilter)({
      values: values,
      setValues: setValues,
      findValues: findValues,
      setFindValues: setFindValues
    }),
    handleQueryChange = _useFilter.handleQueryChange,
    handleInputChange = _useFilter.handleInputChange,
    handleDateChange = _useFilter.handleDateChange,
    handleDateBlur = _useFilter.handleDateBlur,
    handleButtonChange = _useFilter.handleButtonChange,
    setItemOnClick = _useFilter.setItemOnClick;

  //console.log( values)
  var handleSearchClick = function handleSearchClick() {
    handleSearch(getFilterValues());
    closeFilters();
    resetValues();
    resetFilters();
  };
  var toggleShowAllDates = function toggleShowAllDates() {
    setShowAllDates(!showAllDates);
  };
  var toggleShowAllTopics = function toggleShowAllTopics() {
    setShowAllTopics(!showAllTopics);
  };
  var renderDateOptions = function renderDateOptions() {
    var dateOptions = [{
      id: "today",
      value: "Today",
      label: "Сегодня",
      filterFields: {
        date__gte: dayjs().format("YYYY-MM-DD"),
        date__lte: dayjs().format("YYYY-MM-DD")
      }
    }, {
      id: "tomorrow",
      value: "Tomorrow",
      label: "Завтра",
      filterFields: {
        date__gte: dayjs().add(1, "d").format("YYYY-MM-DD"),
        date__lte: dayjs().add(1, "d").format("YYYY-MM-DD")
      }
    }, {
      id: "thisweekend",
      value: "This weekend",
      label: "В эти выходные",
      filterFields: {
        date__gte: dayjs().weekday(6).format("YYYY-MM-DD"),
        date__lte: dayjs().weekday(7).format("YYYY-MM-DD")
      }
    }, {
      id: "pickdate",
      value: "Pick date",
      label: "Выбрать дату"
    }];
    if (showAllDates) {
      dateOptions.push({
        id: "thisweek",
        value: "This week",
        label: "На этой неделе",
        filterFields: {
          date__gte: dayjs().format("YYYY-MM-DD"),
          date__lte: dayjs().weekday(7).format("YYYY-MM-DD")
        }
      }, {
        id: "thismonth",
        value: "This month",
        label: "В этом месяце",
        filterFields: {
          date__gte: dayjs().format("YYYY-MM-DD"),
          date__lte: dayjs().add(1, "M").date(0).format("YYYY-MM-DD")
        }
      }, {
        id: "nextmonth",
        value: "Next month",
        label: "В следующем месяце",
        filterFields: {
          date__gte: dayjs().add(2, "M").date(1).format("YYYY-MM-DD"),
          date__lte: dayjs().add(2, "M").date(0).format("YYYY-MM-DD")
        }
      });
    }
    return dateOptions.map(function (option) {
      return /*#__PURE__*/React.createElement("div", {
        key: option.id
      }, /*#__PURE__*/React.createElement(_UIKit.InputRadio, {
        label: option.id,
        value: option.label,
        name: "date",
        checked: option.label.includes(values.date) || option.label === "Выбрать дату" && !isNaN(Date.parse(values.date)),
        onChange: function onChange(event) {
          handleInputChange(event);
          setFilters(_objectSpread(_objectSpread({}, filters), option.filterFields));
        }
      }, option.id === "pickdate" && /*#__PURE__*/React.createElement(_UIKit.InputDate, {
        onChange: function onChange(event) {
          handleDateChange(event);
          setFilters(_objectSpread(_objectSpread({}, filters), {}, {
            date__gte: dayjs(event.currentTarget.value).subtract(1, "d").format("YYYY-MM-DD"),
            date__lte: dayjs(event.currentTarget.value).add(1, "d").format("YYYY-MM-DD")
          }));
        },
        onBlur: handleDateBlur
      })));
    });
  };
  var renderSpecialityList = function renderSpecialityList() {
    var _dataLists$topics;
    return dataLists === null || dataLists === void 0 || (_dataLists$topics = dataLists.topics) === null || _dataLists$topics === void 0 ? void 0 : _dataLists$topics.slice(0, showAllTopics ? dataLists.topics.length : 4).map(function (item, index) {
      return /*#__PURE__*/React.createElement(_UIKit.InputCheckbox, {
        key: index,
        label: item.id,
        name: "specialities",
        value: item,
        checked: values.specialities.includes(item),
        onChange: handleInputChange
      });
    });
  };
  var FiltersListItem = (0, _react.useCallback)(function (_ref) {
    var title = _ref.title,
      children = _ref.children;
    return /*#__PURE__*/React.createElement("li", {
      className: _stylesModule.default.listItem
    }, /*#__PURE__*/React.createElement("p", {
      className: _stylesModule.default.itemTitle
    }, title), children);
  }, []);
  return /*#__PURE__*/React.createElement(_framerMotion.motion.section, {
    variants: _motion.filtersVariants,
    initial: "hidden",
    animate: "visible",
    className: _stylesModule.default.filterForm
  }, /*#__PURE__*/React.createElement("h2", {
    className: _stylesModule.default.filterTitle
  }, "\u0424\u0438\u043B\u044C\u0442\u0440\u044B"), /*#__PURE__*/React.createElement("ul", {
    className: _stylesModule.default.filterList
  }, /*#__PURE__*/React.createElement(FiltersListItem, {
    title: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
  }, /*#__PURE__*/React.createElement(_UIKit.SearchInput, {
    placeholder: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
    name: "query",
    value: values.query,
    onChange: function onChange(event) {
      handleQueryChange(event);
      setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        q: event.target.value
      }));
    },
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  })), /*#__PURE__*/React.createElement(FiltersListItem, {
    title: "\u0424\u043E\u0440\u043C\u0430\u0442"
  }, /*#__PURE__*/React.createElement(_UIKit.InputCheckbox, {
    label: "online",
    value: "Online",
    name: "status",
    checked: values.status.includes("Online"),
    onChange: function onChange(event) {
      handleQueryChange(event);
      setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        formats: event.target.value.toLowerCase()
      }));
    }
  }), /*#__PURE__*/React.createElement(_UIKit.InputCheckbox, {
    label: "offline",
    value: "Offline",
    name: "status",
    checked: values.status.includes("Offline"),
    onChange: function onChange(event) {
      handleQueryChange(event);
      setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        formats: event.target.value.toLowerCase()
      }));
    }
  })), /*#__PURE__*/React.createElement(FiltersListItem, {
    title: "\u0413\u043E\u0440\u043E\u0434"
  }, /*#__PURE__*/React.createElement(_UIKit.SearchInput, {
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u0433\u043E\u0440\u043E\u0434\u0430",
    name: "city",
    value: values.city,
    onChange: function onChange(event) {
      handleInputChange(event);
      setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        city__name: event.target.value.toLowerCase()
      }));
    },
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }), findValues && findValues.city && findValues.city !== "" && /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.serchContainer
  }, findValues.city.map(function (item, index) {
    return /*#__PURE__*/React.createElement("button", {
      key: index,
      onClick: function onClick() {
        setItemOnClick({
          city: item
        });
        setFilters(_objectSpread(_objectSpread({}, filters), {}, {
          city__name: item
        }));
      },
      className: _stylesModule.default.findItem
    }, item);
  }))), /*#__PURE__*/React.createElement(FiltersListItem, {
    title: "\u0414\u0430\u0442\u0430"
  }, renderDateOptions(), /*#__PURE__*/React.createElement("button", {
    onClick: toggleShowAllDates,
    className: _stylesModule.default.showMore
  }, showAllDates ? "Показать меньше" : "Показать больше")), /*#__PURE__*/React.createElement(FiltersListItem, {
    title: "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"
  }, renderSpecialityList(), (dataLists === null || dataLists === void 0 || (_dataLists$topics2 = dataLists.topics) === null || _dataLists$topics2 === void 0 ? void 0 : _dataLists$topics2.length) > 3 && /*#__PURE__*/React.createElement("button", {
    onClick: toggleShowAllTopics,
    className: _stylesModule.default.showMore
  }, showAllTopics ? "Показать меньше" : "Показать больше")), /*#__PURE__*/React.createElement(FiltersListItem, {
    title: "\u0426\u0435\u043D\u0430"
  }, /*#__PURE__*/React.createElement(_UIKit.InputRadio, {
    label: "free",
    value: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
    name: "price",
    checked: values.price === "Бесплатно",
    onChange: function onChange(event) {
      handleQueryChange(event);
      setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        price__lte: 0
      }));
    }
  }), /*#__PURE__*/React.createElement(_UIKit.InputRadio, {
    label: "paid",
    value: "\u041F\u043B\u0430\u0442\u043D\u043E",
    name: "price",
    checked: values.price === "Платно",
    onChange: function onChange(event) {
      handleQueryChange(event);
      setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        price__gte: 1
      }));
    }
  })), /*#__PURE__*/React.createElement(FiltersListItem, {
    title: "\u0422\u0435\u0433\u0438"
  }, /*#__PURE__*/React.createElement(_UIKit.SearchInput, {
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u0442\u0435\u0433\u0430",
    name: "findTags",
    value: values.findTags
    //onChange={handleInputChange}
    ,
    onChange: function onChange(event) {
      handleQueryChange(event);
      setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        tag: event.target.value
      }));
    },
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }), findValues && findValues.findTags && findValues.findTags !== "" && /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.serchContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.tagsList
  }, findValues.findTags.map(function (item, index) {
    return /*#__PURE__*/React.createElement(_UIKit.TagButton, {
      key: index,
      value: item
      //isEnabled={values.tags.includes(item.label)}
      //isEnabled={findValues.findTags.includes(item)}
      ,
      onChange: function onChange() {
        handleButtonChange(item);
        setFilters(_objectSpread(_objectSpread({}, filters), {}, {
          tag: item
        }));
      }
    });
  }))), /*#__PURE__*/React.createElement("span", {
    className: _stylesModule.default.popularTags
  }, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u0435\u0433\u0438"))), /*#__PURE__*/React.createElement(_TagSection.TagSection, {
    handleChange: handleButtonChange,
    tags: dataLists.allTags
  }), /*#__PURE__*/React.createElement(_UIKit.PrimaryButton, {
    onClick: handleSearchClick,
    title: "\u041D\u0430\u0439\u0442\u0438"
  }));
};
exports.LeftFilterBar = LeftFilterBar;