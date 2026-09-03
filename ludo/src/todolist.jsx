import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos, setTodos] =useState([{task:"sample-task",id: uuidv4()}]);
    let [newTodos , setNewTodos]= useState([""]);

    let addNewTask = ()=>{
        setTodos([...todos, {task:newTodos,id:uuidv4()}]);
        //resets the thing to empty.
        setNewTodos([""]);
    }

    let updateNewTodoValue = (event) =>{
        setNewTodos(event.target.value);
    }
    return (
    <div>
         <h1>faaaaaaaah</h1>
         
         <input placeholder="enter" value = {newTodos} onChange = {updateNewTodoValue}/> 
         <button onClick={addNewTask}>submit</button>
         <br /> 
         <h1>TodoList</h1> 
         <ul>{
                todos.map((todo) =>(
                        <li key = {todo.id}>{todo.task}</li>
                    ))
            }</ul>

    </div>
       
        

        
    )
}