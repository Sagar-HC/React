import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos, setTodos] =useState([{task:"sample-task",id: uuidv4(),isdone:false}]);
    let [newTodos , setNewTodos]= useState([""]);


   let styles = {textDecorationLine:"line-through"}


    let addNewTask = ()=>{
        setTodos((prevValue)=>{
            return[...prevValue, {task:newTodos,id:uuidv4(),isdone:false}]});
        //resets the thing to empty.
        setNewTodos([""]);
    }

    let updateNewTodoValue = (event) =>{
        setNewTodos(event.target.value);
    };

    let deleteTodo = (id) =>{
        setTodos((prevTodo) => prevTodo.filter((prevTodo ) => prevTodo.id != id));
    }

    let upperCaseAll = () =>{
        setTodos((prevTodo)=>
            prevTodo.map((todo) => (
                {
                    ...todo,task:todo.task.toUpperCase()

                }
            ))
        )
    }

    let done =(id) =>{
        setTodos((prevTodo) => prevTodo.map((todo) =>{
            if(id == todo.id){
                return{
                    ...todo,isdone:true
                }
            }else{
                return todo;
            }
        }
        
        ))
    }

//     const upperCaseAll = () => {
//     // 3. Return the mapped array so state isn't set to undefined
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) => ({
//         ...todo,
//         task: todo.task.toUpperCase(),
//       }))
//     );
//   };




    return (
    <div>
         <h1>faaaaaaaah</h1>
         
         <input placeholder="enter" value = {newTodos} onChange = {updateNewTodoValue}/> 
         <button onClick={addNewTask}>submit</button>
         <br /> 
         <h1>TodoList</h1> 
         <ul>{
                todos.map((todo) =>(
                   
                        <li key = {todo.id}>
                             <span style={todo.isdone?styles:{}}>{todo.task}</span> 
                        &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                        <button onClick={()=>done(todo.id)}>done</button>
                        </li>
                    ))
            }</ul>
        <button onClick={upperCaseAll}>faaaaah</button>

    </div>
    )
}