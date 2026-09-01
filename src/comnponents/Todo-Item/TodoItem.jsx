import "./TodoItem.css";

const TodoItem = ({ numberId, title, completed }) => {
  const todoClass = completed ? "done" : "undone";

  return (
    <div className="todo-item">
      <p>{numberId}</p>
      <p className={todoClass}>{title}</p>
    </div>
  );
};

export default TodoItem;
