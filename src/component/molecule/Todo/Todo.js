import React, { useState } from 'react'
import './Todo.css';
function Todo() {
    const[todoTask,setTodoTask]=useState("")
    const[tasklist,setTasklist]=useState([]);
    const handlechange= (e) =>{
        setTodoTask(e.target.value);
    };
    const addtask=() => {
       if(todoTask!==""){
        const taskdetail={
            id:Math.floor(Math.random()*1000),
            value:todoTask,
            iscompleted:false,

        }
        setTasklist([...tasklist,taskdetail]);
       }
    };
 const deletetask=(e,id)=> {
    e.preventDefault();
    setTasklist(tasklist.filter((t)=> t.id !=id));
 }
 const taskcompleted=(e,id)=>{
    e.preventDefault();
    //let's find the index of element
    const element=tasklist.findIndex(elem=> elem.id == id)
    //copy array into new variable
    const newTasklist=[...tasklist];
    //edit our element
    newTasklist[element] = {
        ...newTasklist[element],
        iscompleted:true,
    }
    setTasklist(newTasklist)
 } 
  return (
  <div className='todolist'>
    <input type='text'
     name='text'
      id='text' 
      onChange={(e)=>handlechange(e)}
       placeholder='Add task here ...'/>
    <button className='btn' onClick={addtask}>
        Add 
        </button>
        <br/>
        {tasklist !==[] ? (
        <ul>
            {tasklist.map((t)=> (
            <li className={t.iscompleted ? "crossText" : "listitem"}>
                {t.value}
              
            <button className='complete' onClick={e=>taskcompleted(e,t.id)}>Completed</button>
            <button className='delete' onClick={e =>deletetask(e,t.id)}>Delete</button>
           
            </li>
                ))}
        </ul>
        ) : null }
        
  </div>
  );
}

export default Todo;
