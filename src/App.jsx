import "./App.css";
import myLogo from "../public/images/logo.png";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
import ButtonDelete from "./components/ButtonDelete";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addValue = (value) => {
    setInput(input + value)
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
      <div className="my-logo-container">
        {/* <img 
          src={myLogo}
          className="my-logo"
        /> */}
      </div>

      <div className="calculator-container">
        <Screen input={input} />

        <div className="row">
          <ButtonClear clickHandle={() => setInput("")}>
            <i className="fa-solid fa-c" />
          </ButtonClear>
          <ButtonDelete
            clickHandle={() => setInput(input.substr(0, input.length - 1))}
          >
            <i className="fa-solid fa-delete-left" />
          </ButtonDelete>
        </div>
        <div className="row">
          <Button clickHandle={addValue}>7</Button>
          <Button clickHandle={addValue}>8</Button>
          <Button clickHandle={addValue}>9</Button>
          <Button clickHandle={addValue}>/</Button>
        </div>
        <div className="row">
          <Button clickHandle={addValue}>4</Button>
          <Button clickHandle={addValue}>5</Button>
          <Button clickHandle={addValue}>6</Button>
          <Button clickHandle={addValue}>*</Button>
        </div>
        <div className="row">
          <Button clickHandle={addValue}>1</Button>
          <Button clickHandle={addValue}>2</Button>
          <Button clickHandle={addValue}>3</Button>
          <Button clickHandle={addValue}>-</Button>
        </div>
        <div className="row">
          <Button clickHandle={() => result()}>=</Button>
          <Button clickHandle={addValue}>0</Button>
          <Button clickHandle={addValue}>.</Button>
          <Button clickHandle={addValue}>+</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
