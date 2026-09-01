const TodoItem = ({ numberId, title, completed }) => {
  const todoClass = completed ? "done" : "undone";

  return (
    <div>
      <p>{numberId}</p>
      <p className={todoClass}>{title}</p>
    </div>
  );
};

export default TodoItem;
