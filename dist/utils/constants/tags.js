"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tagsPopular = exports.tagsManagement = exports.tagsDs = exports.tagsDev = exports.tagsDesign = exports.tagsBlock = void 0;
var _DS = _interopRequireDefault(require("./../../images/Preferences/DS.svg"));
var _design = _interopRequireDefault(require("./../../images/Preferences/design.svg"));
var _management = _interopRequireDefault(require("./../../images/Preferences/management.svg"));
var _dev = _interopRequireDefault(require("./../../images/Preferences/dev.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Для главной страницы
var tagsPopular = ["Python", "С++", "Java", "Go", "Data Science", "HR", "ML", "UX", "UX/UI", "Scala", "Product Design", "iOS", "Android"];

// Для страницы предпочтений
exports.tagsPopular = tagsPopular;
var tagsBlock = [{
  imageSrc: _DS.default,
  altText: "Tags Icons",
  caption: "Анализ данных",
  tags: ["Машинное обучение", "ML", "ad", "CatBoost", "Data Science"]
}, {
  imageSrc: _design.default,
  altText: "Tags Icons",
  caption: "Дизайн",
  tags: ["Data Science", "Продуктовый дизайн", "Графический дизайн", "3D", "AR/VR", "Game Design"]
}, {
  imageSrc: _management.default,
  altText: "Tags Icons",
  caption: "Менеджмент",
  tags: ["Аналитика", "HR", "Управление веб-проектами и продуктом"]
}, {
  imageSrc: _dev.default,
  altText: "Tags Icons",
  caption: "Разработка",
  tags: ["Backend", "Frontend", "QA", "Python", "Go", "C++", "Java", "DevOps", "SDG", "SpeechKit", "Scala", "iOS", "Android", "Информационная безопасность", "Базы данных", "Мобильная разработка", "Системное администрирование"]
}];

// Если потребуется использовать отдельные массивы тегов
exports.tagsBlock = tagsBlock;
var tagsDs = tagsBlock[0].tags;
exports.tagsDs = tagsDs;
var tagsDesign = tagsBlock[1].tags;
exports.tagsDesign = tagsDesign;
var tagsManagement = tagsBlock[2].tags;
exports.tagsManagement = tagsManagement;
var tagsDev = tagsBlock[3].tags;
exports.tagsDev = tagsDev;