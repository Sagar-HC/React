import "./Product.css"
import Keemat from "./price";
function Product({title,idx}){
  let oldPrices = ["20","200","2000","20000"];
  let newPrices = ["10","100","1000","10000"];
  let description =[["dpi 100","faah1"],["emi katto","faah2"],["waste mouse","faah3"],["nangu gottila","faah 4"]];
    return(
        <div className="Product" >  
          <h4>{title}</h4>
          <p>{description[idx][1]}</p>
          <p>{description[idx][0]}</p>
          <Keemat oldPrice={oldPrices[idx]} newPrice ={newPrices[idx]}/>
            </div>
    )
}

export default Product