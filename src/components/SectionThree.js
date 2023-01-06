import React from 'react'
import NewProduct from './NewProduct'
import Product from './Product'
import StarProduct from './StarProduct'

const SectionThree = ( { sectionName } ) => {
  return (
    <div>
    <div className='section setion_offer' >

<h1 className="section_headline"> {sectionName} </h1>

<div className="grid_offer mt-3">

<NewProduct price={"122"} image={"/images/products/breakfast/product-1.jpg"} headline={" بولونيا 3"} />
<StarProduct price={"60"} image={"/images/products/breakfast/product-2.jpg"} headline={" بولونيا 1"} />

<Product price={"80"} image={"/images/products/breakfast/product-3.jpg"} headline={" بولونيا 2"} />

<StarProduct price={"74"} image={"/images/products/breakfast/product-4.jpg"} headline={"فطور تركي"} />

<Product price={"39"} image={"/images/products/breakfast/product-5.jpg"} headline={"فطور فرنسي"} />

</div>

</div>

</div>
  )
}

export default SectionThree