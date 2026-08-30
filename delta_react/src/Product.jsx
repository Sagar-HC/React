import "./Product.css"
import Keemat from "./price";
function Product({title,idx}){
  let oldPrices = ["20","200","2000","20000"];
  let newPrices = ["10","100","1000","10000"];
  let description =["dpi 100","emi katto","waste mouse","nangu gottila"];
    return(
        <div className="Product" >  
          <p>{title}</p>
          <p>{description[idx]}</p>
          <Keemat oldPrice={oldPrices[idx]} newPrice ={newPrices[idx]}/>
            </div>
    )
}

export default Product