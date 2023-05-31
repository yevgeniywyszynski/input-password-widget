import React from "react";
import PasswordInput from "../PasswordInput/PasswordInput";

export default function PasswordWidget({
  config,
  setPassword,
  setLogin,
  setPasswordValidHandler,
  handleRegister,
}) {
  return (
    <div>
      <PasswordInput
        setPasswords={setPassword}
        setUserLogin={setLogin}
        config={config}
        setPasswordValidHandler={setPasswordValidHandler}
        handleRegister={handleRegister}
      />
    </div>
  );
}
