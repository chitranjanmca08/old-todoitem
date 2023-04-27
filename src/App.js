import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import './App.css';


const getLocalItems = () => {
  return JSON.parse(localStorage.getItem('lists'));
}


const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState(getLocalItems() ?? []);

  const itemEvent = (event) => {
    setInputList(event.target.value);

  };

  const syncToLocal = (items) => {
    localStorage.setItem('lists', JSON.stringify(items));
  }

  const addToTodo = () => {
    const newList = [...items, inputList];
    setItems(newList);
    setInputList("");
    syncToLocal(newList);
  };

  const deleteItems = (idx) => {
    const newList = [...items];
    newList.splice(idx, 1);
    setItems(newList);
    syncToLocal(newList);
  };

  

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text' placeholder="add item"
            value={inputList}
            onChange={itemEvent}></input>

          <button onClick={addToTodo}> + </button>

          <ol>


            {
              items.map((itemval, index) => {
                return (
                  <ToDoList
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteItems}
                  />
                );
              })}

          </ol>
        </div>
      </div>
    </>
  );
};





export default App;