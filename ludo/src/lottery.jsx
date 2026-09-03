import { useState } from "react";

import { genTicket, sum } from "./helper"

export default function Lottery(){
    let [ticket,setTicket] = useState(genTicket(3));

    let isLottery = sum(ticket) === 15;
    return(
        <div>
            <h1>lottery number</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>        
            <h4>{isLottery && "congrats u won "}</h4>
        </div>
    )
};