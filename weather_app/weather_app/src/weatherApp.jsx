import InfoBox from "./infoBox"
import Search from "./search"
import { useState } from "react"

export default function WeatherApp(){
    let [weatherInfo ,setweatherInfo] = useState({
        city:"delhi",
        feelsLike:"scattered clouds",
        humidity: 35.96,
        temp: 28.96,
        tempMax: 29.05,
        tempMin: 28.96
    });

    let updateInfo = (newInfo)=>{
        setweatherInfo(newInfo)
    }
    return(
        <div>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}