import React, { useEffect, useState } from "react";
import SearchComponent from "./components/SearchComponent";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState([]);
  const [debVal, setDebValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setFilter(data);
      });
  }, []);

  useEffect(() => {
    if (debVal) {
      const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(debVal.toLowerCase())
      );
      setFilter(filteredTodos);
    } else {
      setFilter(todos); 
    }
  }, [debVal, todos]);

  return (
    <div className="container mx-auto">
      <h1>App</h1>
      <SearchComponent debValue={{ debVal, setDebValue }} />
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Todos text</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {filter.length > 0 ? (
            filter.map((todo, index) => (
              <tr className="border-b-2" key={index}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Hech narsa topilmadi</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
