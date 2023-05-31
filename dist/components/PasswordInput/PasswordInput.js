"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PasswordInput;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _PasswordInputModule = _interopRequireDefault(require("./PasswordInput.module.scss"));
var _PasswordValidator = _interopRequireDefault(require("../PasswordValidator/PasswordValidator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function PasswordInput(_ref) {
  let {
    config,
    setPasswords,
    setUserLogin,
    setPasswordValidHandler,
    handleRegister
  } = _ref;
  const [passwordShown, setPasswordShown] = (0, _react.useState)(false);
  const [email, setEmail] = (0, _react.useState)("");
  const [password, setPassword] = (0, _react.useState)("");
  const [isPasswordValid, setIsPasswordValid] = (0, _react.useState)(false);
  const tooglePassword = e => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
  const handleRandom = e => {
    e.preventDefault();
    let min = config.length;
    let max = 14;
    let passRandom = "";
    let randomValue = Math.floor(Math.random() * (max - min) + min);
    for (let i = 0; i < randomValue; i++) {
      let randomNumber = Math.floor(Math.random() * (123 - 33) + 33);
      let letterAsci = String.fromCharCode(randomNumber);
      passRandom = passRandom + letterAsci;
    }
    setPassword(passRandom);
  };
  const registerUser = e => {
    e.preventDefault();
    if (isPasswordValid) {
      const newUserValue = {
        email: email,
        password: password
      };
      handleRegister(newUserValue);
    }
  };
  (0, _react.useEffect)(() => {
    setPasswords(password);
  }, [password]);
  (0, _react.useEffect)(() => {
    setUserLogin(email);
  }, [email]);
  (0, _react.useEffect)(() => {
    setPasswordValidHandler(isPasswordValid);
  }, [isPasswordValid]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _PasswordInputModule.default.passwordInputContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _PasswordInputModule.default.passwordInputWrapper
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: _PasswordInputModule.default.passwordInputTitle
  }, "Register"), /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _PasswordInputModule.default.passwordInputLogin
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: _PasswordInputModule.default.passwordInputLabel
  }, "Email"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: e => setEmail(e.target.value),
    type: "email",
    className: _PasswordInputModule.default.passwordInput,
    placeholder: "Email"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _PasswordInputModule.default.passwordInputLogin
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: _PasswordInputModule.default.passwordInputLabel
  }, "Password"), /*#__PURE__*/_react.default.createElement("div", {
    className: _PasswordInputModule.default.passwordInputPassword
  }, /*#__PURE__*/_react.default.createElement("input", {
    value: password,
    onChange: e => setPassword(e.target.value),
    type: passwordShown ? "text" : "password",
    className: _PasswordInputModule.default.passwordInput,
    placeholder: "Password"
  }), /*#__PURE__*/_react.default.createElement("img", {
    onClick: e => tooglePassword(e),
    className: _PasswordInputModule.default.passwordInputHideIcon,
    src: "/img/invisible.png",
    alt: "hideIcon"
  }))), /*#__PURE__*/_react.default.createElement(_PasswordValidator.default, {
    config: config,
    email: email,
    password: password,
    setIsPasswordValid: setIsPasswordValid
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _PasswordInputModule.default.passwordInputBtnWrapper
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: _PasswordInputModule.default.passwordInputLoginBtn,
    onClick: e => registerUser(e)
  }, "Register"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: e => handleRandom(e),
    className: _PasswordInputModule.default.passwordInputLoginRandom
  }, "Random")))));
}