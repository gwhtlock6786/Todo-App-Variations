import "./TodoItem.css";

const TodoItem = ({ numberId, title, completed, deleteTodo }) => {
  const todoClass = completed ? "done" : "undone";

  const handleDelete = () => {
    deleteTodo(numberId);
  };

  return (
    <div className="todo-item">
      <p>{numberId}</p>
      <p className={todoClass}>{title}</p>
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
