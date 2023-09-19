"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Grid = exports.Column = void 0;
var _CardList = require("./CardList");
var _Card = require("../Card/Card.stories");
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _storyData = require("./storyData");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = {
  title: "Components/CardList",
  component: _CardList.CardList,
  parameters: {
    layout: "centered",
    componentSubtitle: "Components > CardList"
  },
  argTypes: {
    listDirection: {
      options: ["row", "column"],
      control: "radio",
      defaultValue: "row",
      description: "Flex Direction inline style"
    },
    cardDirection: {
      options: ["row", "column"],
      control: "radio",
      defaultValue: "row",
      description: "Flex Direction inline style"
    }
  },
  args: {
    title: "Заголовок",
    events: _storyData.events,
    listDirection: "column",
    cardDirection: "row"
  }
};
/** Применяемость: Pages */
exports.default = _default;
var Column = function Column(props) {
  return /*#__PURE__*/React.createElement(_CardList.CardList, props);
};
exports.Column = Column;
var Grid = function Grid(props) {
  return /*#__PURE__*/React.createElement(_CardList.CardList, _extends({}, props, {
    listDirection: "row",
    cardDirection: "column"
  }));
};
exports.Grid = Grid;