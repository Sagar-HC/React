function Keemat({oldPrice,newPrice}){
    let oldStyles = {
        textDecorationLine:"line-through"
    }
    let newStyles ={
        textWeight:"bold"
    }
    let styles = {
        backgroundColor:"yellow",

        height :"1rem",
        marginBottom:"5px"
    }
    //faaaaaaah
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}

export default Keemat