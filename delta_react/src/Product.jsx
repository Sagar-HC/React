import "./Product.css"
function Product({title="default",price=2,arrs}){
  let isDiscount = price>=3000?<p>discount:5%</p>:""
    return(
        <div className="Product">         
          <h1>{title}</h1>
          <h2>Price:{price/2}</h2>  
          <p>{isDiscount}</p>
            </div>
    )
}

export default Product