import React from "react";
import PasswordWidget from "./components/PasswordWidget/PasswordWidget";

let config = {
  smallLetter: true,
  capitalLetter: true,
  specialDigit: true,
  number: true,
  length: 8,
  // customHander: {
  //   description: "not Contains 'kuba'",
  //   checkFunction: (e) => {
  //     return !e.includes("kuba");
  //   },
  // },
};

function App() {
  return <PasswordWidget config={config} />;
}

export default App;
