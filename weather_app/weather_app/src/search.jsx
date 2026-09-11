import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"

export default function Search(){
    let [city,setCity] =useState("");
    const url ="http://api.openweathermap.org/data/2.5/weather";
    const api = "99e09b26f83de4261561b64bb2e05fc8";

    let getWeather = async() =>{
        let response = await fetch(`${url}?q=${city}&appid=${api}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    }

    
    let handleChange = (evt) =>{
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeather();
    }
    return(
        <div className='searchBox'>
            <h1>Get your city Weather correct , Search Now</h1>
            <form onSubmit={handleSubmit}>
                 <TextField id="City" label="City" variant="outlined" required value={city} onChange={handleChange}/>
                 <br /><br />
                  <Button variant="outlined" type="submit" >Search</Button>
            </form>
        </div>
    )
}