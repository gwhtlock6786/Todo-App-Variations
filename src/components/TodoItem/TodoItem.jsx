import { FaCheck, FaUndo } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

const TodoItem = ({ todo }) => {
  return (
    <div>
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
