"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchField = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _EventsContext = require("../../utils/context/EventsContext");
var _SearchFilterContext = require("../../utils/context/SearchFilterContext");
var _SearchInput = _interopRequireDefault(require("../SearchInput/SearchInput"));
var _useFilter2 = require("../../utils/hooks/useFilter");
var _menu = require("../../images/menu.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SearchField = function SearchField() {
  // Устанавливаем значение в поисковую строку из пропса
  var _useEventsContext = (0, _EventsContext.useEventsContext)(),
    handleSearch = _useEventsContext.handleSearch;
  var _useFiltersContext = (0, _SearchFilterContext.useFiltersContext)(),
    values = _useFiltersContext.values,
    setValues = _useFiltersContext.setValues,
    getValuesArray = _useFiltersContext.getValuesArray,
    toggleFilters = _useFiltersContext.toggleFilters,
    isFiltersOpen = _useFiltersContext.isFiltersOpen;
  var _useFilter = (0, _useFilter2.useFilter)({
      values: values,
      setValues: setValues
    }),
    handleQueryChange = _useFilter.handleQueryChange;
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var query = getValuesArray();
    handleSearch(query);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.container,
    style: {
      justifyContent: isFiltersOpen && "flex-end"
    }
  }, !isFiltersOpen && /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    withForm: true,
    value: values.query,
    onChange: handleQueryChange,
    name: "query",
    placeholder: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
    onSubmit: handleSubmit
  }), /*#__PURE__*/_react.default.createElement(_menu.ReactComponent, {
    onClick: toggleFilters,
    style: {
      cursor: "pointer"
    }
  }));
};
exports.SearchField = SearchField;