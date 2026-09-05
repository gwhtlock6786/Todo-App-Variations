import { useState } from "react";
import initialTodos from "./data/todo-data";
import "./App.css";
import TodoList from "./comnponents/Todo-List/TodoList.jsx";
import AddTodo from "./comnponents/Add-Todo/AddTodo.jsx";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filterStatus, setFilterStatus] = useState("all");

  const nextId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

  const addTodo = (todo) => {
    const newTodo = {
      id: nextId,
      title: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const completeTodo = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (todoID) => {
    setTodos(todos.filter((t) => t.id !== todoID));
  };

  const filterTodos = (filter) => {
    switch (filter) {
      case "completed":
        setFilterStatus("completed");
        break;
      case "incomplete":
        setFilterStatus("incomplete");
        break;
      default:
        setFilterStatus("all");
    }
  };

  const displayedTodos = () => {
    switch (filterStatus) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "incomplete":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <>
      <TodoList
        todos={displayedTodos()}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        filterTodos={filterTodos}
        filterStatus={filterStatus}
      />
      <hr />
      <AddTodo addTodo={addTodo} />
    </>
  );
}

export default App;
