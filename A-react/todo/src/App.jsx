import { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const handleAddTodo = () => {
    if (todoText.trim() === "") {
      return;
    }

    setTodos([...todos, todoText]);
    setTodoText("");
  };

  // Delete a todo
  const handleDeleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter(
      (_, index) => index !== indexToDelete
    );

    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Todo App</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />

      <button onClick={handleAddTodo}>
        Add Task
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button
              onClick={() => handleDeleteTodo(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;