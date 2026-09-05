import TodoItem from "../Todo-Item/TodoItem.jsx";
import "./TodoList.css";

const TodoList = ({
  todos,
  deleteTodo,
  completeTodo,
  filterTodos,
  filterStatus,
}) => {
  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="filter-button-group">
        <button
          className={`filter-btn ${filterStatus === "all" ? "active-filter" : ""}`}
          onClick={() => filterTodos("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filterStatus === "completed" ? "active-filter" : ""}`}
          onClick={() => filterTodos("completed")}
        >
          Completed
        </button>
        <button
          className={`filter-btn ${filterStatus === "incomplete" ? "active-filter" : ""}`}
          onClick={() => filterTodos("incomplete")}
        >
          Incomplete
        </button>
      </div>
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          numberId={todoItem.id}
          title={todoItem.title}
          completed={todoItem.completed}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
