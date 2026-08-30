function Keemat({oldPrice,newPrice}){
    let oldStyles = {
        textDecorationLine:"line-through"
    }
    let newStyles ={
        textWeight:"bold"
    }
    //faaaaaaah
    return(
        <div>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}

export default Keemat