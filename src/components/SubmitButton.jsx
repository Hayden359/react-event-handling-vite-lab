import { useState } from "react";

function SubmitButton({ hover, onMouseEnter, onMouseLeave }) {
  return (
    <button
      type="submit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
