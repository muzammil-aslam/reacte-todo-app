import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inpValue, setInpvalue] = useState("");
  const [todo, setTodo] = useState([]);

  const itemEvent = (event) => {
    setInpvalue(event.target.value);
  };

  const handel = () => {
    var newTodo = [...todo];
    newTodo.push(inpValue);
    setTodo(newTodo);
    setInpvalue("");
  };

  const deleteFunction = (index) => {
    var newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const reefresh = () => {
    setTodo([]);
  };

  return (
    <div className="App">
      <div className="child">
        <div className="newChwild">
          <input
            value={inpValue}
            onChange={itemEvent}
            placeholder="enter your name"
          />
          <button onClick={handel}>+</button>
          <button onClick={reefresh}>All Delete</button>

          {todo.map((itemval, index) => {
            return (
              <div key={index}>
                <span>{itemval}</span>
                <button
                  onClick={() => {
                    deleteFunction(index);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
