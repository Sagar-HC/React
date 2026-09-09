import { useState } from "react";
//faaaaaaaah

import Ticket from './ticket'
import App from "../src/App";
import { genTicket, sum } from "./helper"

export default function Lottery({n=3,winningSum=15}){
    let [ticket,setTicket] = useState(genTicket(n));

    let buyTicket = () =>{
        setTicket(genTicket(n));
    }

    let isLottery = sum(ticket) === winningSum;
    return(
        <div>
            <h1>lottery number</h1>
            <div className="ticket">
            <Ticket ticket={ticket}/>
            </div>        
            <h4>{isLottery && "congrats u won "}</h4>
            <button onClick={buyTicket}>new ticket</button>
        </div>
    )
};