import { useState } from "react";
import "../App.css";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

function App() {
  const [password, setPassword] = useState("");
  const [hover, setHover] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
    console.log("Password being changed:", newValue);
  };

  const handleMouseEnter = () => {
    setHover(true);
    console.log("Mouse entered the submit button area.");
  };

  const handleMouseLeave = () => {
    setHover(false);
    console.log("Mouse left the submit button area.");
  };

  return (
    <div>
      <p>Password state: {password}</p>
      <p>Submit button hover: {hover ? "Hovering" : "Not hovering"}</p>

      <PasswordInput password={password} onChange={handleChange} />
      <SubmitButton
        hover={hover}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default App;
