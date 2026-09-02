const AddTodo = ({ addTodo }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements["new-todo"].value;
    addTodo(newTodo);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h3>Add Todo</h3>
        <label htmlFor="new-todo">Enter Todo item: </label>
        <input type="text" name="new-todo" id="new-todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
