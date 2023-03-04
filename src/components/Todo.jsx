import React, { useState } from "react";

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [store, setStore] = useState([]);

  const addActivity = () => {
    // setStore([...store, activity]); // asynchronous issue dual render. because of async state in react.
    if (activity !== "") {
      setStore((data) => {
        // this is synchronous
        const updatedData = [...data, activity];
        setActivity("");
        return updatedData;
      });
    }
  };

  const handleKeyPress = (e) => {
    if (activity !== "") {
      if (e.keyCode == 13) {
        setStore((data) => {
          const updatedData = [...data, activity];
          setActivity("");
          return updatedData;
        });
      }
    }
  };
  const removeActivity = (e, index) => {
    const updatedListData = store.filter((element, id) => id != index);
    setStore(updatedListData);
  };
  const removeAllActivity = () => {
    setStore([]);
  };
  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="enter todo..."
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={addActivity}>Add</button>
        <p>here is your list :{")"}</p>

        {store != []
          ? store.map((item, index) => {
              return (
                <div key={index}>
                  <div>{item}</div>
                  <button onClick={(e) => removeActivity(e, index)}>
                    Remove(-)
                  </button>
                </div>
              );
            })
          : ""}

        {store.length > 0 ? (
          <button onClick={removeAllActivity}>Remove All</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Todo;
