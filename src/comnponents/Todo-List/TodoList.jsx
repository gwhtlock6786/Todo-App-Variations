import TodoItem from "../Todo-Item/TodoItem.jsx";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <div class="todo-container">
      <h1>Todo List</h1>
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          numberId={todoItem.id}
          title={todoItem.title}
          completed={todoItem.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
