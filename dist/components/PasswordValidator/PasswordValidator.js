"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PasswordValidator;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _PasswordValidatorModule = _interopRequireDefault(require("./PasswordValidator.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function PasswordValidator(_ref) {
  let {
    password,
    email,
    setIsPasswordValid,
    config
  } = _ref;
  const [passLength, setPassLength] = (0, _react.useState)(false);
  const [passNumber, setPassNumber] = (0, _react.useState)(false);
  const [passLower, setPassLower] = (0, _react.useState)(false);
  const [passUpper, setPassUpper] = (0, _react.useState)(false);
  const [passSpecialDigit, setPassSpecialDigit] = (0, _react.useState)(false);
  const [isCustomHander, setIsCustomHander] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    checkPassword(password);
  }, [password]);
  (0, _react.useEffect)(() => {
    if (passLength && passNumber && passLower && passUpper && passSpecialDigit && isCustomHander) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }, [passLength, passNumber, passLower, passUpper, passSpecialDigit, isCustomHander]);
  const checkPassword = password => {
    setPassNumber(false);
    setPassLower(false);
    setPassUpper(false);
    setPassSpecialDigit(false);
    setIsCustomHander(false);
    if (password.length < config.length) {
      setPassLength(false);
    } else {
      setPassLength(true);
    }
    let passwordOneLetter = password.split("");
    passwordOneLetter.forEach(i => {
      let speccialLetter = ["~", "!", "@", "#", "$", "%", "&", "*", "-", "(", ",", "`"];
      if (!isNaN(i) || !config.number) {
        setPassNumber(true);
      }
      if (i === i.toLowerCase() && isNaN(i) || !config.smallLetter) {
        setPassLower(true);
      }
      if (i === i.toUpperCase() && isNaN(i) || !config.capitalLetter) {
        setPassUpper(true);
      }
      if (speccialLetter.includes(i) || !config.specialDigit) {
        setPassSpecialDigit(true);
      }
    });
    if (config.customHander) {
      if (config.customHander.checkFunction(password)) {
        setIsCustomHander(true);
      } else {
        setIsCustomHander(false);
      }
    } else {
      setIsCustomHander(true);
    }
  };
  if (password.length > 0) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _PasswordValidatorModule.default.passwordValidatorContainer
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _PasswordValidatorModule.default.passwordValidatorWrapper
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _PasswordValidatorModule.default.passwordValidator
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: _PasswordValidatorModule.default.validatorIcon,
      src: passLength ? "/img/verified.png" : "/img/error.png",
      alt: "error"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: passLength ? _PasswordValidatorModule.default.passwordValidatorTextPass : _PasswordValidatorModule.default.passwordValidatorTextError
    }, "Must be a minimum of ".concat(config.length, " characters"))), config.capitalLetter ? /*#__PURE__*/_react.default.createElement("div", {
      className: _PasswordValidatorModule.default.passwordValidator
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: _PasswordValidatorModule.default.validatorIcon,
      src: passUpper ? "/img/verified.png" : "/img/error.png",
      alt: "error"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: passUpper ? _PasswordValidatorModule.default.passwordValidatorTextPass : _PasswordValidatorModule.default.passwordValidatorTextError
    }, "Must contain at least 1 uppercase letter")) : null, config.smallLetter ? /*#__PURE__*/_react.default.createElement("div", {
      className: _PasswordValidatorModule.default.passwordValidator
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: _PasswordValidatorModule.default.validatorIcon,
      src: passLower ? "/img/verified.png" : "/img/error.png",
      alt: "error"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: passLower ? _PasswordValidatorModule.default.passwordValidatorTextPass : _PasswordValidatorModule.default.passwordValidatorTextError
    }, "Must contain at least 1 lowercase letter")) : null, config.number ? /*#__PURE__*/_react.default.createElement("div", {
      className: _PasswordValidatorModule.default.passwordValidator
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: _PasswordValidatorModule.default.validatorIcon,
      src: passNumber ? "/img/verified.png" : "/img/error.png",
      alt: "error"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: passNumber ? _PasswordValidatorModule.default.passwordValidatorTextPass : _PasswordValidatorModule.default.passwordValidatorTextError
    }, "Must contain at least 1 digit")) : null, config.specialDigit ? /*#__PURE__*/_react.default.createElement("div", {
      className: _PasswordValidatorModule.default.passwordValidator
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: _PasswordValidatorModule.default.validatorIcon,
      src: passSpecialDigit ? "/img/verified.png" : "/img/error.png",
      alt: "error"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: passSpecialDigit ? _PasswordValidatorModule.default.passwordValidatorTextPass : _PasswordValidatorModule.default.passwordValidatorTextError
    }, "Must contain at least 1 of the following special characters ~!@#$%&*")) : null, config.customHander ? /*#__PURE__*/_react.default.createElement("div", {
      className: _PasswordValidatorModule.default.passwordValidator
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: _PasswordValidatorModule.default.validatorIcon,
      src: isCustomHander ? "/img/verified.png" : "/img/error.png",
      alt: "error"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: isCustomHander ? _PasswordValidatorModule.default.passwordValidatorTextPass : _PasswordValidatorModule.default.passwordValidatorTextError
    }, "".concat(config.customHander.description))) : null));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
}