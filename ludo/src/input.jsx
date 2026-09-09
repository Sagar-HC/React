import { useState } from "react"

export default function Input(){
    let [formData,setformData] = useState({
        userName:"",
        fullName:""
    });

    let changeInputValue = (event)=>{
        setformData((currData)=>{
            return{...currData, [event.target.name]:event.target.value}
        });
    };


    let handleSubmit =(event)=>{
        event.preventDefault();

        setformData({
             userName:"",
             fullName:"",

        });
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={FormData.username} onChange={changeInputValue} id="fullName" name="fullName" /> 
            <button >submit</button>  
            <br /><br />
            <input type="text" value={FormData.fullname} onChange={changeInputValue} id="userName" name="userName"/> 
            <button>submit</button>  
        </form>
        </div>
        
    )
}