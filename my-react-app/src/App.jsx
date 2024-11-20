import { useState } from "react";
import "./style.css";

export default function App() {
  const [addNewItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (addNewItem.trim() === "") return;
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: addNewItem, completed: false },
    ]);
    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-items">
        <label htmlFor="Item" className="search-bar">
          <input
            value={addNewItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          <button className="button">Add Item</button>
          
        </label>
        <h1 className="header-section">My Todo List</h1>
        <ul className="list">
          {todos.map(todo => (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    setTodos(currentTodos =>
                      currentTodos.map(td =>
                        td.id === todo.id
                          ? { ...td, completed: !td.completed }
                          : td
                      )
                    )
                  }
                />
                {todo.title}
              </label>
              <button
                className="delete-btn"
                onClick={() =>
                  setTodos(currentTodos =>
                    currentTodos.filter(td => td.id !== todo.id)
                  )
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
