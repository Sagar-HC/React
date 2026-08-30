import Product from "./Product"

function ProductStack(){
 let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
 };
    return(

    <div style={styles}>
        
        <Product title="Logitech mx master" idx={0}/>
        <Product title="Iphone faaaaah" idx={1}/>
        <Product title="zeb shit zebroniccs" idx={2}/>
        <Product title="gottillo maara" idx={3}/>
    </div>
    )
}

export default ProductStack;