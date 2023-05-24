import React from "react";
import PasswordInput from "../PasswordInput/PasswordInput";

export default function PasswordWidget({ config }) {
  return (
    <div>
      <PasswordInput config={config} />
    </div>
  );
}
