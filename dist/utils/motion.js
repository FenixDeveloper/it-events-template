"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtersVariants = void 0;
var filtersVariants = {
  hidden: {
    x: -100,
    opacity: 0
  },
  // начальное состояние - смещение влево на 100 пикселей
  visible: {
    x: 0,
    opacity: 1,
    // конечное состояние - без смещения
    transition: {
      duration: 0.7
    }
  } // длительность анимации
};
exports.filtersVariants = filtersVariants;