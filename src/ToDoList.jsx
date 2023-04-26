import React from 'react';



const ToDoList=(props)=>{

    // const deleteItems=()=>{
    //     console.log('deleted');
    // }
    return ( <>
        <div className='todo_style'>
        <button onClick={()=>{props.onSelect(props.id)}} >Delete</button>
        <i className="fa fa-times" aria-hidden="true" 
        onClick={()=>{props.onSelect(props.id)} 

    }
        />
        
        <li> {props.text} </li> 
        </div>
   
    </>
    );
};




export default ToDoList;