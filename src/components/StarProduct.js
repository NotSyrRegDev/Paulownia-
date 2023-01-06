import React from 'react';
import './StarProduct.css';


const StarProduct = ( {headline  , image ,  price   } ) => {
  return (
    <div>

    <div className="single_new_product">
        <img src={image} alt="" className="product_img" />

        <div className="body_padding">
        <h1 className="product_headline"> {headline} </h1>
       
        <h6 className="product_price"> SAR {price} </h6>
        </div>
    

      <div className="star_postion">
      <img src="/images/icons/star.png" alt="" className="icon_small" />

      </div>
     

    </div>

    </div>
  )
}

export default StarProduct