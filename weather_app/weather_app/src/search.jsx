import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"

export default function Search({updateInfo}){
    let [city,setCity] =useState("");
    let [error,setError] =useState(false);
    const url ="http://api.openweathermap.org/data/2.5/weather";
    const api = "99e09b26f83de4261561b64bb2e05fc8";

    let getWeather = async() =>{
        try{ let response = await fetch(`${url}?q=${city}&appid=${api}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result ={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.feels_like,
            feelsLike:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(err){
            throw err;
        }
       
    };

    
    let handleChange = (evt) =>{
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt) =>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeather();
       updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    }
    return(
        <div className='searchBox'>
            <h1>Get your city Weather correct , Search Now</h1>
            <form onSubmit={handleSubmit}>
                 <TextField id="City" label="City" variant="outlined" required value={city} onChange={handleChange}/>
                 <br /><br />
                  <Button variant="outlined" type="submit" >Search</Button>
                  {error && <p style={{color:"red"}}> "no such place exists"</p>}
            </form>
        </div>
    )
}