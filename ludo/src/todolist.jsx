import { useState } from "react";

export default function TodoList(){
    let [todos, setTodos] =useState(["simple task"]);
    let [newTodos , setNewTodos]= useState([""]);

    let addNewTask = ()=>{
        setTodos([...todos, newTodos]);
        //resets the thing to empty.
        setNewTodos([""]);
    }

    let updateTodoValue = (event) =>{
        setNewTodos(event.target.value);
    }
    return (
    <div>
         <h1>faaaaaaaah</h1>
         
         <input placeholder="enter" value = {newTodos} onChange = {updateTodoValue}/> 
         <button onClick={addNewTask}>submit</button>
         <br /> 
         <h1>TodoList</h1> 
         <ul>{
                todos.map((todo) =>(
                        <li>{todo}</li>
                    ))
            }</ul>

    </div>
       
        

        
    )
}