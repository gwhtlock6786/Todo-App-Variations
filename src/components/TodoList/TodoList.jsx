import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2> Todo List</h2>
      <hr />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
