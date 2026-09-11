import { useState } from "react"

export default function Input(){
    let [formData,setformData] = useState({
        userName:"",
        fullName:"",
        password:"",
    });

    let changeInputValue = (event)=>{
        setformData((currData)=>{
            return{...currData, [event.target.name]:event.target.value}
        });
    };


    let handleSubmit =(event)=>{
        event.preventDefault();
        console.log(formData);
        setformData({
             userName:"",
             fullName:"",
             password:"",

        });
    }
    return(
       
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.fullName} onChange={changeInputValue} id="fullName" name="fullName" /> 
            <br /><br />
            <input type="text" value={formData.userName} onChange={changeInputValue} id="userName" name="userName"/> 
            <br />
            <input type="password" value={formData.password} onChange={changeInputValue} id="password" name="password"/> 
            <button>submit</button>  
        </form>
        
    )
}