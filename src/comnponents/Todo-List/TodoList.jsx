import TodoItem from "../Todo-Item/TodoItem.jsx";

const TodoList = ({ todos }) => {
  return (
    <div>
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
