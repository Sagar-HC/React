import { useState,useEffect } from "react";

export default function Joker(){
    let [joker,setJoker] = useState({});
    let url = "https://official-joke-api.appspot.com/random_joke";

    let joke = async() => {
        let response =await fetch(url);
        let jsonResponse = await response.json();
        setJoker({setup:jsonResponse.setup, punchline:jsonResponse.punchline});
    };

    useEffect(()=>{async function getFirstJoke(){
        let response =await fetch(url);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoker({setup:jsonResponse.setup, punchline:jsonResponse.punchline});
    }
    getFirstJoke();  
    },[]);

    
    return(
        <div>
            <h1>joker!</h1>
            <h2>{joker.setup}</h2>
            <h2>{joker.punchline}</h2>
            <button onClick={joke}>get new joke</button>
        </div>
    )
}