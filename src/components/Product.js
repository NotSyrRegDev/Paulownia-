import React from 'react';
import './Product.css';

const Product = ( {headline  , image ,  price   } ) => {
  return (
    <div>

    <div className="single_new_product">
        <img src={image} alt="" className="product_img" />

        <h1 className="product_headline"> {headline} </h1>
   
        <h6 className="product_price"> SAR {price} </h6>

   
     

    </div>

    </div>
  )
}

export default Product