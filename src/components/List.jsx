import React, { useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;
  const parentRef = useRef();
  const childRef = useRef();
  const intersected = useScroll(parentRef, childRef, () =>
    fetchTodos(page, limit)
  );

  function fetchTodos() {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos((prev) => [...prev, ...json]);
        setPage((prev) => prev + 1);
      });
  }

  return (
    <div ref={parentRef} style={{ height: "80vh", overflow: "auto" }}>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{
              marginBottom: "5px",
              padding: "30px",
              border: "2px solid black",
            }}
          >
            {todo.id}. {todo.title}
          </div>
        );
      })}
      <div ref={childRef} style={{ height: "20px", background: "green" }}></div>
    </div>
  );
};

export default List;
