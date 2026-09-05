import { useState } from "react";
import initialTodos from "./data/todo-data";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos] = useState(initialTodos);

  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
