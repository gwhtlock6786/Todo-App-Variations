import "./TodoItem.css";

const TodoItem = ({ numberId, title, completed, deleteTodo, completeTodo }) => {
  const todoClass = completed ? "done" : "undone";

  const handleDelete = () => {
    deleteTodo(numberId);
  };

  const handleComplete = () => {
    completeTodo(numberId);
  };

  return (
    <div className="todo-item">
      <p>{numberId}</p>
      <p className={todoClass}>{title}</p>
      <div className="button-group">
        <button className="complete-btn" onClick={handleComplete}>
          {completed ? "Undo" : "Complete"}
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
