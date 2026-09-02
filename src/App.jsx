import { useState } from "react";
import todos from "./data/todo-data";
import "./App.css";
import TodoList from "./comnponents/Todo-List/TodoList.jsx";
import AddTodo from "./comnponents/Add-Todo/AddTodo.jsx";

function App() {
  const [initialTodos, setTodos] = useState(todos);

  const addTodo = (todo) => {
    const newTodo = {
      id: initialTodos.length + 1,
      title: todo,
      completed: false,
    };

    setTodos([...initialTodos, newTodo]);
  };

  return (
    <>
      <TodoList todos={initialTodos} />
      <hr />
      <AddTodo addTodo={addTodo} />
    </>
  );
}

export default App;
