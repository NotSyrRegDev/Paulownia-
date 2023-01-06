import React from 'react'
import NewProduct from './NewProduct'

const SectionTwo = ( {sectionName }) => {
  return (
    <div>
    <div className='section setion_offer' >

<h1 className="section_headline"> {sectionName} </h1>

<div className="grid_offer mt-3">

<NewProduct price={"16"} image={"/images/products/hamsat/product-1.jpg"} headline={"مقلقل"} />
<NewProduct price={"19"} image={"/images/products/hamsat/product-2.jpg"} headline={"حمسة جبن الحلومي"} />

<NewProduct price={"18"} image={"/images/products/hamsat/product-3.jpg"} headline={"حمسة جبن الفيتا"} />

<NewProduct price={"24"} image={"/images/products/hamsat/product-4.jpg"} headline={"معصوب"} />


</div>

</div>

</div>
  )
}

export default SectionTwo