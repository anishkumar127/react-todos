import React from "react";
import { useState } from "react";

const InputTodo = (props) => {
  const [todoInputText, setTodoInputText] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setTodoInputText(value);
  };

  const handleAdd = (addTodo) => {
    props.addTodo(todoInputText);
    setTodoInputText("");
  };
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addTodo(todoInputText);
      setTodoInputText("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter todo..."
        value={todoInputText}
        onChange={handleChange}
        onKeyDown={handleEnterPress}
      />
      <button onClick={handleAdd}>add</button>
      <hr />
    </div>
  );
};

export default InputTodo;
