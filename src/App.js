import "./App.css";
import { Input } from "./Input.js";
import { useState } from "react";

function App() {
  const [todos, settodos] = useState(["Task 1", "Task 2", "Task 3"]);
  const [inputValue, setinputValue] = useState("");

  const addtodo = (e) => {
    settodos(todos.concat([inputValue]));
    setinputValue("");
  };

  return (
    <div className="Container">
      <div className="enterText">
        <input
          className="inputArea"
          placeholder="Enter Your Task"
          type="text"
          value={inputValue}
          onInput={(e) => {
            setinputValue(e.target.value);
          }}
        />
        <button type="submit" onClick={addtodo} onKeyDown={addtodo}>
          &#x2b;
        </button>
      </div>

      <div className="taskArea">
        {todos.map((todo, index) => {
          return (
            <div key={index} className="taskBox">
              <p>{todo}</p>
              <div className="buttonwrapper">
                <button
                  className="butt"
                  onClick={() => {
                    settodos(todos.filter((item) => item !== todo));
                  }}
                >
                  &#128465;
                </button>
                <button
                  className="butt"
                  onClick={() => {
                    setinputValue(todo);
                    settodos(todos.filter((item) => item !== todo));
                  }}
                >
                  &#9998;
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
