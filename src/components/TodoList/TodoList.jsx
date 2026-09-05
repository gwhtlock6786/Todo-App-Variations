import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list-container">
      <h2> Todo List</h2>
      <hr />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
