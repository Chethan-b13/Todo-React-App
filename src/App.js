import "./App.css";
import { Input } from "./Input.js";
import { useState } from "react";

function App() {
  const [todos, settodos] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const addtodo = () => {
    settodos(todos.concat([inputValue]));
  };

  return (
    <div className="App">
      <div className="enterText">
        <input
          type="text"
          onInput={(e) => {
            setinputValue(e.target.value);
          }}
        />
        <button onClick={addtodo}>Add</button>
      </div>

      <ul>
      {todos.map((todo, index) => {
        return (
          <li className="list">
            <a key={index}>{todo}</a>
            <button className="butt" onClick={(index)=>{settodos(todos.filter(item => item !== todo));}}>Delete</button>
            <button className="butt">Modify</button>
          </li>
        );
      })}
      </ul>
      
    </div>
  );
}

export default App;
