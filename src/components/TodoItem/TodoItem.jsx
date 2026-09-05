import { FaCheck, FaUndo } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <p>{todo.id}</p>
      <p>{todo.text}</p>

      <div className="button-group">
        <button className="complete-button">
          {todo.completed ? <FaUndo size="1.5em" /> : <FaCheck size="1.5em" />}
        </button>
        <button className="delete-button">
          <FiXCircle size="1.5em" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
