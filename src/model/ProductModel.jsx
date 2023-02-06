 
const ProductModel = ({props}) => {
   
    return (
      <div className="productContainer">
        <h1 className="heading">{props?.title}</h1>
        <img src={props?.image} alt="product" />
        <p className="description" > {props?.description}</p>
        <h3 className="price" >Price: {props?.price}</h3>
        <button>Buy It Now</button>
      </div>
    );
  };


  export default ProductModel;