import React from "react";
import { useState } from "react";
import InputTodo from "./components/InputTodo";
import DisplayTodo from "./components/DisplayTodo";
const App = () => {
  const [todos, setTodos] = useState([]);

  let addTodo = (inputText) => {
    if (inputText !== "") {
      setTodos([...todos, inputText]);
    }
  };
  const deleteItem = (index) => {
    let newTodoItem = [...todos];
    newTodoItem.splice(index, 1);
    setTodos([...newTodoItem]);
  };
  return (
    <div>
      <InputTodo addTodo={addTodo} />
      <h1>TODO LIST</h1>
      <hr />
      {todos.map((item, index) => {
        return (
          <DisplayTodo
            key={index}
            item={item}
            index={index}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
};

export default App;
