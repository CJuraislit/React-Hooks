import { useState } from "react";
import "./App.css";
import useInput from "./hooks/useInput";

function App() {
  const userName = useInput("");
  const password = useInput("");
  return (
    <>
      <input {...userName} type="text" placeholder="Username" />
      <input {...password} type="passeord" placeholder="Password" />

      <button onClick={() => console.log(userName.value, password.value)}>
        Click
      </button>
    </>
  );
}

export default App;
