"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PasswordWidget;
var _react = _interopRequireDefault(require("react"));
var _PasswordInput = _interopRequireDefault(require("../PasswordInput/PasswordInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function PasswordWidget(_ref) {
  let {
    config,
    setPassword,
    setLogin,
    setPasswordValidHandler,
    handleRegister
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_PasswordInput.default, {
    setPasswords: setPassword,
    setUserLogin: setLogin,
    config: config,
    setPasswordValidHandler: setPasswordValidHandler,
    handleRegister: handleRegister
  }));
}