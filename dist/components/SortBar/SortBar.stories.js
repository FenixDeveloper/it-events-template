"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;
var _SortBar = require("./SortBar");
var _default = {
  title: "Components/SortBar",
  component: _SortBar.SortBar,
  parameters: {
    componentSubtitle: "Components > SortBar",
    layout: "centered"
  },
  args: {
    onSort: function onSort() {}
  },
  argTypes: {
    onSort: {
      description: "Handler function"
    }
  }
};
/** Применимость: Pages > FavoritesPage */
exports.default = _default;
var Basic = {};
exports.Basic = Basic;