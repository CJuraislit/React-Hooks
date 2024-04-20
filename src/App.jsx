import "./App.css";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";
import { useRef } from "react";

function App() {
  const ref = useRef();
  const isBlackHovering = useHover(ref);

  return (
    <>
      <Hover />
      <div
        ref={ref}
        style={{
          width: "300px",
          height: "300px",
          background: !isBlackHovering ? "black" : "blue",
        }}
      ></div>
    </>
  );
}

export default App;
