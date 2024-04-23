import "./App.css";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";
import { useRef } from "react";
import List from "./components/List";

function App() {
  const ref = useRef();
  const isBlackHovering = useHover(ref);

  return (
    <>
      <List />
    </>
  );
}

export default App;
