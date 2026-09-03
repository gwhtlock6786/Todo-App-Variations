import TodoItem from "../Todo-Item/TodoItem.jsx";
import "./TodoList.css";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          numberId={todoItem.id}
          title={todoItem.title}
          completed={todoItem.completed}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
