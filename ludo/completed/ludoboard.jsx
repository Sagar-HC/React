import { useState } from "react"

let styles = {
    textAlign:"center"
    
}

export default function Lboard(){
    let [moves, setMoves] = useState({blue:0,red:0,green:0,yellow:0});
    

    let updateYellow = ()=>{
      setMoves((prevMoves)=>{
          return{...prevMoves,yellow:prevMoves.yellow+1};
      })
    }
     let updateBlue = ()=>{
      setMoves((prevMoves)=>{
          return{...prevMoves,blue:prevMoves.blue+1};
      })
    }
     let updateRed = ()=>{
      setMoves((prevMoves)=>{
          return{...prevMoves,red:prevMoves.red+1};
      })
    }
     let updateGreen = ()=>{
      setMoves((prevMoves)=>{
          return{...prevMoves,green:prevMoves.green+1};
      })
    }
    

   return(
        <div className="faaaah" style={styles}>
        <h1>Hello ji welcome to board games</h1>
        <p>Yellow ={moves.yellow}</p>
        <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
        &nbsp;

         <p>Red ={moves.red}</p>
         <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
        &nbsp;

         <p>Blue ={moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
        &nbsp;

         <p>Green ={moves.green}</p>
        <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        
        </div>
    )
    }
   
