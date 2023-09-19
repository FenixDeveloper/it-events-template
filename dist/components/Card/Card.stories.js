"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IsLiked = exports.DefaultImage = exports.Card = void 0;
var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));
var _defaultImage = _interopRequireDefault(require("../../images/default-image.png"));
var _place = require("../../images/EventInfo/place.svg");
var _calendar = require("../../images/EventInfo/calendar.svg");
var _time = require("../../images/EventInfo/time.svg");
var _Card = require("./Card");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = {
  title: "Components/Card",
  component: _Card.Card,
  parameters: {
    componentSubtitle: "Components > Card"
  },
  args: {
    event: defaultEvent()
  },
  argTypes: {
    event: {
      description: "Object from API"
    },
    cardDirection: {
      options: ["row", "column"],
      control: "radio",
      defaultValue: "row",
      description: "Flex Direction inline style"
    },
    style: {
      description: "Optional inline style"
    }
  }
};
exports.default = _default;
function defaultEvent() {
  return {
    id: 1,
    title: "Событие про Storybook или длинное название",
    city: "Москва",
    date_start: "Ср, 25 сентября",
    isLiked: false,
    price: "15 000 р.",
    url: "string",
    image: "https://it.acceleratorpracticum.ru/media/events/image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-06-10_085724.png"
  };
}
var cardDetails = [{
  icon: /*#__PURE__*/React.createElement(_calendar.ReactComponent, null),
  content: defaultEvent().date_start
}, {
  icon: /*#__PURE__*/React.createElement(_time.ReactComponent, null),
  content: "10:00 - 12:00"
}, {
  icon: /*#__PURE__*/React.createElement(_place.ReactComponent, null),
  content: defaultEvent().city
}, {
  content: defaultEvent().price,
  styles: _stylesModule.default.price
}];

/** Применимость: CardList */
var Card = function Card(_ref) {
  var event = _ref.event,
    cardDirection = _ref.cardDirection;
  return /*#__PURE__*/React.createElement("li", {
    key: event.id,
    className: "".concat(_stylesModule.default.card),
    style: {
      padding: "0",
      margin: "0",
      flexDirection: cardDirection
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.imageContainer
  }, /*#__PURE__*/React.createElement("img", {
    src: event.image,
    alt: "event_picture",
    className: _stylesModule.default.image
  }), /*#__PURE__*/React.createElement("button", {
    className: "".concat(event.isLiked ? _stylesModule.default.likeButtonActive : _stylesModule.default.likeButton),
    type: "button"
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_stylesModule.default.descriptionContainer)
  }, /*#__PURE__*/React.createElement("div", {
    className: _stylesModule.default.titleContainer
  }, /*#__PURE__*/React.createElement("h3", {
    className: _stylesModule.default.title
  }, event.title)), /*#__PURE__*/React.createElement("ul", {
    className: _stylesModule.default.rowContainer,
    style: {
      padding: "0"
    }
  }, cardDetails.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: _stylesModule.default.rowItem,
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, item.icon, /*#__PURE__*/React.createElement("p", {
      className: item.styles,
      style: {
        margin: "0"
      }
    }, item.content));
  }))));
};

//export const Default = (args) => <Card {...args} />;
/** Применимость: CardList */
exports.Card = Card;
var IsLiked = function IsLiked() {
  var isLikedEvent = _objectSpread(_objectSpread({}, defaultEvent()), {}, {
    isLiked: true,
    title: "Card в состоянии isLiked"
  });
  return /*#__PURE__*/React.createElement(Card, {
    event: isLikedEvent
  });
};
/** Применимость: CardList */
exports.IsLiked = IsLiked;
var DefaultImage = function DefaultImage() {
  var newEvent = _objectSpread(_objectSpread({}, defaultEvent()), {}, {
    image: _defaultImage.default,
    title: "Card в состоянии DefaultImage"
  });
  return /*#__PURE__*/React.createElement(Card, {
    event: newEvent
  });
};
exports.DefaultImage = DefaultImage;