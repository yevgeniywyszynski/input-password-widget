import React, { useEffect, useState } from "react";
import styles from "./PasswordValidator.module.scss";

export default function PasswordValidator({
  password,
  email,
  setIsPasswordValid,
  config,
}) {
  const [passLength, setPassLength] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passLower, setPassLower] = useState(false);
  const [passUpper, setPassUpper] = useState(false);
  const [passSpecialDigit, setPassSpecialDigit] = useState(false);
  const [isCustomHander, setIsCustomHander] = useState(false);

  useEffect(() => {
    checkPassword(password);
  }, [password]);

  useEffect(() => {
    if (
      passLength &&
      passNumber &&
      passLower &&
      passUpper &&
      passSpecialDigit &&
      isCustomHander
    ) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }, [
    passLength,
    passNumber,
    passLower,
    passUpper,
    passSpecialDigit,
    isCustomHander,
  ]);

  const checkPassword = (password) => {
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

    passwordOneLetter.forEach((i) => {
      let speccialLetter = [
        "~",
        "!",
        "@",
        "#",
        "$",
        "%",
        "&",
        "*",
        "-",
        "(",
        ",",
        "`",
      ];

      if (!isNaN(i) || !config.number) {
        setPassNumber(true);
      }

      if ((i === i.toLowerCase() && isNaN(i)) || !config.smallLetter) {
        setPassLower(true);
      }

      if ((i === i.toUpperCase() && isNaN(i)) || !config.capitalLetter) {
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
    return (
      <div className={styles.passwordValidatorContainer}>
        <div className={styles.passwordValidatorWrapper}>
          <div className={styles.passwordValidator}>
            <img
              className={styles.validatorIcon}
              src={passLength ? "/img/verified.png" : "/img/error.png"}
              alt="error"
            />
            <span
              className={
                passLength
                  ? styles.passwordValidatorTextPass
                  : styles.passwordValidatorTextError
              }
            >
              {`Must be a minimum of ${config.length} characters`}
            </span>
          </div>
          {config.capitalLetter ? (
            <div className={styles.passwordValidator}>
              <img
                className={styles.validatorIcon}
                src={passUpper ? "/img/verified.png" : "/img/error.png"}
                alt="error"
              />
              <span
                className={
                  passUpper
                    ? styles.passwordValidatorTextPass
                    : styles.passwordValidatorTextError
                }
              >
                Must contain at least 1 uppercase letter
              </span>
            </div>
          ) : null}
          {config.smallLetter ? (
            <div className={styles.passwordValidator}>
              <img
                className={styles.validatorIcon}
                src={passLower ? "/img/verified.png" : "/img/error.png"}
                alt="error"
              />
              <span
                className={
                  passLower
                    ? styles.passwordValidatorTextPass
                    : styles.passwordValidatorTextError
                }
              >
                Must contain at least 1 lowercase letter
              </span>
            </div>
          ) : null}
          {config.number ? (
            <div className={styles.passwordValidator}>
              <img
                className={styles.validatorIcon}
                src={passNumber ? "/img/verified.png" : "/img/error.png"}
                alt="error"
              />
              <span
                className={
                  passNumber
                    ? styles.passwordValidatorTextPass
                    : styles.passwordValidatorTextError
                }
              >
                Must contain at least 1 digit
              </span>
            </div>
          ) : null}
          {config.specialDigit ? (
            <div className={styles.passwordValidator}>
              <img
                className={styles.validatorIcon}
                src={passSpecialDigit ? "/img/verified.png" : "/img/error.png"}
                alt="error"
              />
              <span
                className={
                  passSpecialDigit
                    ? styles.passwordValidatorTextPass
                    : styles.passwordValidatorTextError
                }
              >
                Must contain at least 1 of the following special characters
                ~!@#$%&*
              </span>
            </div>
          ) : null}
          {config.customHander ? (
            <div className={styles.passwordValidator}>
              <img
                className={styles.validatorIcon}
                src={isCustomHander ? "/img/verified.png" : "/img/error.png"}
                alt="error"
              />
              <span
                className={
                  isCustomHander
                    ? styles.passwordValidatorTextPass
                    : styles.passwordValidatorTextError
                }
              >
                {`${config.customHander.description}`}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
