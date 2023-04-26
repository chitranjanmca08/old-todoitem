import React,{useState, useEffect} from "react";
import ToDoList from "./ToDoList";
import './App.css';


const getLocalItems=()=>{
  let list=localStorage.getItem('lists');
  console.log(list);
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}


const App =()=> {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([getLocalItems()]);

const itemEvent=(event) => {
  setInputList(event.target.value);
 
}; 

const listOfItems=()=>{
  setItems((oldItems)=>{
    return[...oldItems,inputList];
  });
  setInputList("");
};

const deleteItems=(id)=>{
       console.log('deleted');

       setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index!==id;
        })
       })
   };

  //  const getlocalitems=()=>{
  //   let list=localStorage.getItem('lists');
  //   console.log(list);
  //   if(list){
  //     return JSON.parse(localStorage.getItem('lists'));
  //   }
  //   else{
  //     return [];
  //   }
  //  }


  //  useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(todos));
  //   console.log('storedTodos',storedTodos)
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items))
  }, [items]);

   

  return (
    <>
  <div class="main_div">
  <div class="center_div"> 
  <br/>
  <h1>ToDo List</h1>
  <br/>
  <input type='text' placeholder="add item" 
  value={inputList}

  onChange={itemEvent}></input>
  
  <button onClick={listOfItems}> + </button>
  
  <ol>
  
  
{
  items.map( (itemval,index) => {
    // return <li> {npm startitemval} </li>
    return (
       <ToDoList 
       key={index}
      id={index}
     text={itemval}
     onSelect={deleteItems}
     
     />
    );
  } )}

  </ol>
  </div>  
  </div>
  </>
  );
};





export default App;