import React from "react";
import TodoInput from "./components/TodoInput";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
const App = () => {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo(...listTodo, inputText);
  };

  const deleteItemList = (index) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />

        <h1 className="app-heading">TODO</h1>

        {listTodo.map((item, index) => {
          return (
            <TodoList
              key={index}
              item={item}
              index={index}
              deleteItem={deleteItemList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
