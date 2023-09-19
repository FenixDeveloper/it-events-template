"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiEvents = exports.apiConfig = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var apiConfig = {
  baseUrl: "https://it.acceleratorpracticum.ru/api/v1",
  events: "/events/",
  edit: "/users-events/",
  topics: "/topics/",
  tags: "/tags/",
  sities: "/sities/",
  userEvents: "/users-events/",
  search: "/events/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};
exports.apiConfig = apiConfig;
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
      events = _ref.events,
      edit = _ref.edit,
      topics = _ref.topics,
      tags = _ref.tags,
      sities = _ref.sities,
      userEvents = _ref.userEvents,
      headers = _ref.headers,
      search = _ref.search;
    _classCallCheck(this, Api);
    this._baseUrl = baseUrl;
    this._eventsEndpoint = events;
    this._editEventsEndpoint = edit;
    this._topicsEndpoint = topics;
    this._tagsEndpoint = tags;
    this._sitiesEndpoint = sities;
    this._userEvents = userEvents;
    this._headers = headers;
    this._searchEndpoint = search;
  }
  _createClass(Api, [{
    key: "_makeUrl",
    value: function _makeUrl(endpoint) {
      return "".concat(this._baseUrl).concat(endpoint);
    }
  }, {
    key: "_handleResponse",
    value: function _handleResponse(res) {
      if (!res.ok) {
        throw new Response("", {
          status: res.status,
          statusText: res.statusText
        });
      }
      return res.json();
    }
  }, {
    key: "_getHeaders",
    value: function _getHeaders() {
      var token = localStorage.getItem("jwt");
      return _objectSpread(_objectSpread({}, this._headers), {}, {
        Authorization: "Token ".concat(token)
      });
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      var options = {
        method: "GET",
        headers: this._headers
      };
      return fetch(this._makeUrl(this._eventsEndpoint), options).then(this._handleResponse);
    }
  }, {
    key: "getSelectedEvent",
    value: function getSelectedEvent(id) {
      var options = {
        method: "GET",
        headers: this._headers
      };
      return fetch(this._makeUrl(this._eventsEndpoint) + "".concat(id, "/"), options).then(this._handleResponse);
    }
  }, {
    key: "getTopics",
    value: function getTopics() {
      var options = {
        method: "GET"
      };
      return fetch(this._makeUrl(this._topicsEndpoint), options).then(this._handleResponse);
    }
  }, {
    key: "getTags",
    value: function getTags() {
      var options = {
        method: "GET"
      };
      return fetch(this._makeUrl(this._tagsEndpoint), options).then(this._handleResponse);
    }
  }, {
    key: "getSities",
    value: function getSities() {
      var options = {
        method: "GET"
      };
      return fetch(this._makeUrl(this._sitiesEndpoint), options).then(this._handleResponse);
    }
  }, {
    key: "searchRequest",
    value: function searchRequest(request) {
      var options = {
        method: "GET"
      };
      return fetch(this._makeUrl(this._searchEndpoint) + "".concat(request), options).then(this._handleResponse);
    }
  }]);
  return Api;
}();
var apiEvents = new Api(apiConfig);
exports.apiEvents = apiEvents;