import React from "react";
import PasswordWidget from "./components/PasswordWidget/PasswordWidget";

let config = {
  smallLetter: true,
  capitalLetter: false,
  specialDigit: true,
  number: false,
  length: 10,
  customHander: {
    description: "not Contains 'kuba'",
    checkFunction: (e) => {
      return !e.includes("kuba");
    },
  },
};

function App() {
  return <PasswordWidget config={config} />;
}

export default App;
