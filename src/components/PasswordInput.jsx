import { useState } from "react";

function PasswordInput({ password, onChange }) {
  return (
    <input
      type="password"
      value={password}
      onChange={onChange}
    />
  );
}

export default PasswordInput;
