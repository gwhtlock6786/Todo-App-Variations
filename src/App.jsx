import { useState } from "react";
import todos from "./data/todo-data";
import "./App.css";
import TodoList from "./comnponents/Todo-List/TodoList.jsx";

function App() {
  const [initialTodos] = useState(todos);

  return (
    <>
      <TodoList todos={initialTodos} />
    </>
  );
}

export default App;
