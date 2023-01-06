import React from 'react'
import NewProduct from './NewProduct'
import Product from './Product'
import StarProduct from './StarProduct'

const MainDishesSection = ( { sectionName } ) => {
  return (
    <div>
         <div className='section setion_offer' >

<h1 className="section_headline"> {sectionName} </h1>

  <div className="grid_offer mt-3">
  
    <NewProduct price={"26"} image={"/images/products/main_dishes/product-1.jpg"} headline={"مقلقل"} />
    <Product price={"18"} image={"/images/products/main_dishes/product-2.jpg"} headline={"فول"} />

    <StarProduct price={"18"} image={"/images/products/main_dishes/product-3.jpg"} headline={"بازلاء"} />

    <Product price={"26"} image={"/images/products/main_dishes/product-4.jpg"} headline={"كبده"} />

    <NewProduct price={"18"} image={"/images/products/main_dishes/product-5.jpg"} headline={"تونة"} />

  </div>

</div>

    </div>
  )
}

export default MainDishesSection