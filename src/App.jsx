import "./App.css";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";
import { useState } from "react";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [value, setValue] = useState("");
  const debauncedSearch = useDebounce(search, 500);
  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  const onChange = (e) => {
    setValue(e.target.value);
    debauncedSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default App;
