import React from "react";
import { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");
  // handle input
  // const handleInput = (e) => {
  //   const value = e.target.value;
  //   setInputText(value);
  // };

  // handle submit on click

  const handleSubmit = (addList) => {
    props.addList(inputText);
    setInputText("");
  };
  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          className="input-box-todo"
          placeholder="enter your todo..."
          // onChange={handleInput}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          value={inputText}
        />
        <button
          className="add-btn"
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
          // onClick={handleSubmit}
        >
          +
        </button>
      </div>
      {/* <div>{inputText}</div> */}
    </div>
  );
};

export default TodoInput;
