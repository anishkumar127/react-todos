import React from "react";

const DisplayTodo = (props) => {
  const handleDelete = () => {
    props.deleteItem(props.index);
  };
  return (
    <>
      <ul>
        <li>{props.item}</li>
      </ul>

      <button onClick={handleDelete}>Remove</button>
    </>
  );
};

export default DisplayTodo;
