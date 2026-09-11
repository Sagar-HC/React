import { useState } from "react"

export default function Comments(){
    let [formData, setformData] = useState({
        username:"",
        remarks:"",
        rating:0,

    });

    let onEventChange = (event)=>{
            setformData((currentData)=>{
                return{ ...currentData, [event.target.name]:event.target.value}
            })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setformData({
        username:"",
        remarks:"",
        rating:0,

    })
    }


    return(<div>
        <h4>give a comment</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your username" value={formData.username} name="username" onChange={onEventChange}/>
            <br /><br />

            <textarea placeholder="give a comment" value={formData.remarks} name="remarks" onChange={onEventChange}></textarea>
            <br /><br />

            <input type="number" min={1} max={5} value={formData.rating} name="rating" onChange={onEventChange}/>
            <button>submit</button>
        </form>
    </div>)
}