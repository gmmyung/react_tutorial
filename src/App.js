import { useState, useEffect } from "react"

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((prevTodos) => [todo, ...prevTodos]);
    setTodo("");

  };
  return (
    <div>
      <h1>My To-dos ({todos.length})</h1>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="Write your to do..."
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
      {todos.map(
        (todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => {
                setTodos(prevTodos => {
                  return prevTodos.filter((_, i) => i !== index);
                });
              }}
            >x</button>
          </li>
        )
      )}
    </div>
  );
}

export default App;
