"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePrice = exports.parseMonth = exports.parseEventDate = exports.parseDate = exports.handleCopyLink = exports.getRandomEvents = exports.getPastEvents = exports.getCurrentEvents = exports.formatTimeRange = exports.formatPrice = exports.formatDate = void 0;
var parsePrice = function parsePrice(priceString) {
  var price = priceString.replace(/\D/g, "");
  return parseInt(price);
};
exports.parsePrice = parsePrice;
var formatPrice = function formatPrice(price) {
  if (price === "0.00") {
    return "Бесплатно";
  } else {
    var formattedPrice = parseFloat(price).toFixed(2);
    var parts = formattedPrice.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return "".concat(parts[0], " \u20BD");
  }
};
exports.formatPrice = formatPrice;
var parseDate = function parseDate(dateString) {
  var parts = dateString.split(" ");
  var day = parseInt(parts[0]);
  var month = parseMonth(parts[1]);
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  return new Date(year, month, day);
};
exports.parseDate = parseDate;
var parseMonth = function parseMonth(monthString) {
  var monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  return monthNames.indexOf(monthString);
};
exports.parseMonth = parseMonth;
var parseEventDate = function parseEventDate(dateString) {
  var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  var date = new Date(dateString);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var month = months[monthIndex];
  return "".concat(day, " ").concat(month);
};
exports.parseEventDate = parseEventDate;
var formatDate = function formatDate(dateString) {
  var options = {
    weekday: "short",
    day: "numeric",
    month: "long"
  };
  var date = new Date(dateString);
  var formattedDay = date.toLocaleDateString("ru-RU", options).slice(0, 2);
  var capitalizedDay = formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1);
  var formattedDate = date.toLocaleDateString("ru-RU", options).replace(formattedDay, capitalizedDay);
  return formattedDate;
};

// Функция для получения случайных элементов из массива
exports.formatDate = formatDate;
var getRandomEvents = function getRandomEvents(array) {
  var shuffled = array.sort(function () {
    return 0.5 - Math.random();
  });
  return shuffled;
};
exports.getRandomEvents = getRandomEvents;
var handleCopyLink = function handleCopyLink(link, setShowNotification) {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(link).then(function () {
      setShowNotification(true);
      setTimeout(function () {
        setShowNotification(false);
      }, 1500);
    }).catch(function (error) {
      console.error("Не удалось скопировать ссылку:", error);
    });
  } else {
    var textArea = document.createElement("textarea");
    textArea.value = link;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setShowNotification(true);
      setTimeout(function () {
        setShowNotification(false);
      }, 1500);
    } catch (error) {
      console.error("Не удалось скопировать ссылку:", error);
    }
    document.body.removeChild(textArea);
  }
};
exports.handleCopyLink = handleCopyLink;
var formatTime = function formatTime(dateString) {
  var date = new Date(dateString);
  var hours = date.getUTCHours().toString().padStart(2, "0");
  var minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return "".concat(hours, ":").concat(minutes);
};
var formatTimeRange = function formatTimeRange(start, end) {
  var startTime = formatTime(start);
  var endTime = formatTime(end);
  return "".concat(startTime, " - ").concat(endTime);
};

// ---------- ТЕКУЩИЕ СОБЫТИЯ ------------- //
exports.formatTimeRange = formatTimeRange;
var getCurrentEvents = function getCurrentEvents(events) {
  var currentDate = new Date();
  return events.filter(function (event) {
    return new Date(event.date_start) >= currentDate;
  }).sort(function (a, b) {
    return new Date(a.date_start) - new Date(b.date_start);
  });
};
// ------------ ПРОШЕДШИЕ СОБЫТИЯ ----------- //
exports.getCurrentEvents = getCurrentEvents;
var getPastEvents = function getPastEvents(events) {
  var currentDate = new Date();
  return events.filter(function (event) {
    return new Date(event.date_start) < currentDate;
  }).sort(function (a, b) {
    return new Date(b.date_start) - new Date(a.date_start);
  });
};
exports.getPastEvents = getPastEvents;