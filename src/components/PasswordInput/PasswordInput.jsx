import React, { useState } from "react";
import styles from "./PasswordInput.module.scss";
import PasswordValidator from "../PasswordValidator/PasswordValidator";

export default function PasswordInput({ config }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const tooglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleRandom = (e) => {
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

  return (
    <div className={styles.passwordInputContainer}>
      <div className={styles.passwordInputWrapper}>
        <p className={styles.passwordInputTitle}>Register</p>
        <form>
          <div className={styles.passwordInputLogin}>
            <label className={styles.passwordInputLabel}>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className={styles.passwordInput}
              placeholder="Email"
            />
          </div>
          <div className={styles.passwordInputLogin}>
            <label className={styles.passwordInputLabel}>Password</label>
            <div className={styles.passwordInputPassword}>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordShown ? "text" : "password"}
                className={styles.passwordInput}
                placeholder="Password"
              />
              <img
                onClick={(e) => tooglePassword(e)}
                className={styles.passwordInputHideIcon}
                src="/img/invisible.png"
                alt="hideIcon"
              />
            </div>
          </div>
          <PasswordValidator
            config={config}
            email={email}
            password={password}
            setIsPasswordValid={setIsPasswordValid}
          />
          <div className={styles.passwordInputBtnWrapper}>
            <button className={styles.passwordInputLoginBtn}>Register</button>
            <button
              onClick={(e) => handleRandom(e)}
              className={styles.passwordInputLoginRandom}
            >
              Random
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
