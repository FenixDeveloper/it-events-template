"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormWithValidation = useFormWithValidation;
var _react = require("react");
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
function useFormWithValidation() {
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isValid = _useState6[0],
    setIsValid = _useState6[1];

  // Регулярные выражения для валидации
  //const emailRegex = /^(?=[^-._])[a-zA-Z0-9_.-]+@[a-zA-Z0-9-.]+\.(?![.])(?:[a-zA-Z]{2,})$/;
  //const emailRegex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
  //const emailRegex = /^(?=[^-._])[a-zA-Z0-9_.-]+@[a-zA-Z0-9-.]+\.[a-zA-Zа-яА-Я]{2,}$/;
  //const emailRegex = /^(?=[^-._])[a-zA-Z0-9_.-]+@(?=[^-._])[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Zа-яА-ЯёЁ]+)?$/;
  ///^(?=[^-._])[a-zA-Z0-9_.-]+@(?=[^-._])[a-zA-Z0-9-._]+(?![._-])[a-zA-Zа-яА-ЯёЁ]+\.[a-zA-Zа-яА-ЯёЁ]{2,}$/
  var emailRegex = /^[a-zA-Z0-9]+((\.|_|-)+[a-zA-Z0-9]{1,})*@[a-zA-ZА-Яа-я0-9]+((\.|-)+[a-zA-ZА-Яа-я0-9]{1,})*\.[a-zA-ZА-Яа-я]{2,63}$/;
  var passwordRegex = /^(?=(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*[A-Za-z\u0410-\u044F])(?=(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*[0-9])[!-_a-\}\u0410-\u044F]{6,25}$/;
  var urlRegex = /^(https?:\/\/)?([^\s.]+\.\S{2}|localhost)(\/[^\s]*)?$/;
  var nameRegex = /^(?!.*--)(?=[^-])(?!.*-$)[a-zA-Zа-яА-ЯёЁ\s]*[a-zA-Zа-яА-ЯёЁ-][a-zA-Zа-яА-ЯёЁ\s-]{0,48}[a-zA-Zа-яА-ЯёЁ]$/;
  // const organizationRegex =
  //   /^(?=[^-.])(?=[a-zA-Zа-яА-ЯёЁ0-9№~\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?-]{2,100}$)(?!.*[- ]$)[a-zA-Zа-яА-ЯёЁ0-9№~\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?№~]+(?:[-][a-zA-Zа-яА-ЯёЁ0-9№~\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?№~`]+)*$/;
  var organizationRegex = /^[^-.\s][a-zA-Zа-яА-ЯёЁ0-9№~\s!@#$%^&*()_+=[\]{};':"\\|,.<>/?№~`-]{1,100}(?<!\s)$/;
  var priceRegex = /^\d{0,8}$/;
  var partnersRegex = /^.{0,1000}$/;
  var emojiRegex = /(?:[\xA9\xAE\u200D\u20E3\u2122\u23F0\u23F3\u24C2\u2600-\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\uFE0F]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|\uD83E[\uDD00-\uDDFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDFFF]|[\uDB41-\uDB43][\uDC00-\uDFFF])/g;
  var doubleSpaceRegex = /\s{2,}/g;

  // Функция для очистки значения поля от эмодзи и двойных пробелов
  var sanitizeFieldValue = function sanitizeFieldValue(value) {
    // Удалить пробел в начале строки
    if (value.startsWith(" ")) {
      value = value.trimStart();
    }
    // Удалить двойные пробелы подряд
    value = value.replace(doubleSpaceRegex, " ");
    // Удалить эмодзи
    value = value.replace(emojiRegex, "");
    return value;
  };

  // Функция запрещающая вставку в поля
  var preventInvalidPaste = function preventInvalidPaste(event) {
    var clipboardData = event.clipboardData || window.clipboardData;
    if (!clipboardData) {
      // Если clipboardData не существует, то вставка не может быть проверена, разрешаем вставку
      return false;
    }
    var pastedText = clipboardData.getData("text/plain");
    // Регулярное выражение для проверки допустимых символов
    var validCharactersRegex = /^[a-zA-Zа-яА-Я0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\S]+$/;
    if (!validCharactersRegex.test(pastedText)) {
      event.preventDefault();
      return true; // Возвращаем true, чтобы обозначить, что вставка была предотвращена
    }

    return false; // Возвращаем false, если вставка была успешной
  };

  var updateFieldValue = function updateFieldValue(name, value, validationRegex, errorMessage) {
    var sanitizedValue = sanitizeFieldValue(value);
    setValues(function (prevValues) {
      var updatedValues = _objectSpread(_objectSpread({}, prevValues), {}, _defineProperty({}, name, sanitizedValue));
      // Проверяем, нужно ли применять валидацию
      if (validationRegex) {
        // Проверяем значение по регулярному выражению
        if (!validationRegex.test(sanitizedValue)) {
          setErrors(function (prevErrors) {
            return _objectSpread(_objectSpread({}, prevErrors), {}, _defineProperty({}, name, errorMessage));
          });
        } else {
          setErrors(function (prevErrors) {
            return _objectSpread(_objectSpread({}, prevErrors), {}, _defineProperty({}, name, ""));
          });
        }
      } else {
        // Если validationRegex не предоставлен, считаем поле валидным, чтобы не учитывать его в проверке наличия ошибок
        setErrors(function (prevErrors) {
          return _objectSpread(_objectSpread({}, prevErrors), {}, _defineProperty({}, name, ""));
        });
      }
      return updatedValues;
    });
  };

  // Обработчик для email
  var handleEmailChange = function handleEmailChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    updateFieldValue(name, value, emailRegex, "Пожалуйста, введите корректный email-адрес (вы ввели данные в неправильном формате)");
  };
  var handleChange = function handleChange(event) {
    var target = event.target;
    var name = target.name,
      value = target.value;

    // Вызов функции для очистки входных данных
    var sanitizedValue = sanitizeFieldValue(value);

    // Обновить значение поля после очистки
    setValues(function (prevValues) {
      return _objectSpread(_objectSpread({}, prevValues), {}, _defineProperty({}, name, sanitizedValue));
    });
    setErrors(function (prevErrors) {
      return _objectSpread(_objectSpread({}, prevErrors), {}, _defineProperty({}, name, target.validationMessage));
    });
    setIsValid(target.closest("form").checkValidity());
  };

  // Обработчик для пароля
  var handlePasswordChange = function handlePasswordChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    updateFieldValue(name, value, passwordRegex, event.target.validationMessage);
  };
  var handlePriceChange = function handlePriceChange(event) {
    var _event$target3 = event.target,
      name = _event$target3.name,
      value = _event$target3.value;
    updateFieldValue(name, value, priceRegex, "Введите корректное значение");
  };
  var handleUrlChange = function handleUrlChange(event) {
    var _event$target4 = event.target,
      name = _event$target4.name,
      value = _event$target4.value;
    updateFieldValue(name, value, urlRegex, "Введите корректный URL с полным доменом");
  };
  var handlePartnersChange = function handlePartnersChange(event) {
    var _event$target5 = event.target,
      name = _event$target5.name,
      value = _event$target5.value;
    updateFieldValue(name, value, null, "");
  };

  // Обработчик для организации
  var handleOrganizationChange = function handleOrganizationChange(event) {
    var _event$target6 = event.target,
      name = _event$target6.name,
      value = _event$target6.value;
    updateFieldValue(name, value, organizationRegex, "Введите корректные данные. Допустимая длина поля от 2 до 100 символов.");
  };

  // Обработчик для имени
  var handleNameChange = function handleNameChange(event) {
    var _event$target7 = event.target,
      name = _event$target7.name,
      value = _event$target7.value;
    updateFieldValue(name, value, nameRegex, "Введите корректные данные. Допустимая длина поля от 2 до 50 символов.");
  };
  var handleDateChange = function handleDateChange(date, name) {
    var error = "";
    if (name === "date_start" || name === "date_end") {
      var startDate = name === "date_start" ? date : new Date(values.date_start);
      var endDate = name === "date_end" ? date : new Date(values.date_end);
      var currentDate = new Date();
      if (startDate && endDate && startDate > endDate) {
        error = "Дата окончания должна быть позже даты начала";
      }
      if (startDate && startDate < currentDate.setHours(0, 0, 0, 0)) {
        error = "Выберите дату начала, которая больше или равна текущей дате";
      }
    }
    setValues(function (prevValues) {
      return _objectSpread(_objectSpread({}, prevValues), {}, _defineProperty({}, name, date));
    });
    setErrors(function (prevErrors) {
      return _objectSpread(_objectSpread({}, prevErrors), {}, _defineProperty({}, name, error));
    });
    setIsValid(true);
  };
  var validatePasswordMatch = (0, _react.useCallback)(function () {
    if (values.password !== values.confirmPassword) {
      setErrors(function (prevErrors) {
        return _objectSpread(_objectSpread({}, prevErrors), {}, {
          confirmPassword: "Пароли не совпадают"
        });
      });
    } else {
      setErrors(function (prevErrors) {
        return _objectSpread(_objectSpread({}, prevErrors), {}, {
          confirmPassword: ""
        });
      });
    }
  }, [values.password, values.confirmPassword]);
  var resetForm = (0, _react.useCallback)(function () {
    setValues({});
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid]);
  return {
    values: values,
    setValues: setValues,
    handleChange: handleChange,
    handleNameChange: handleNameChange,
    handleOrganizationChange: handleOrganizationChange,
    handleEmailChange: handleEmailChange,
    handlePasswordChange: handlePasswordChange,
    handleUrlChange: handleUrlChange,
    handleDateChange: handleDateChange,
    handlePriceChange: handlePriceChange,
    handlePartnersChange: handlePartnersChange,
    preventInvalidPaste: preventInvalidPaste,
    validatePasswordMatch: validatePasswordMatch,
    errors: errors,
    isValid: isValid,
    resetForm: resetForm
  };
}