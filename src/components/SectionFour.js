import React from 'react'
import NewProduct from './NewProduct'
import Product from './Product'
import StarProduct from './StarProduct'

const SectionFour = ( {sectionName} ) => {
  return (
    <div>
    <div className='section setion_offer' >

<h1 className="section_headline"> {sectionName} </h1>

<div className="grid_offer mt-3">

<NewProduct price={"3"} image={"/images/products/adds/product-1.jpg"} headline={"عسل"} />
<Product price={"3"} image={"/images/products/adds/product-2.jpg"} headline={"قشطة طازجة"} />

<Product price={"3"} image={"/images/products/adds/product-3.jpg"} headline={"جبن بيضاء"} />

<Product price={"3"} image={"/images/products/adds/product-44.jpg"} headline={"حلاوة طحينية"} />

<Product price={"3"} image={"/images/products/adds/product-4.jpg"} headline={"زيتون"} />

<Product price={"3"} image={"/images/products/adds/product-5.jpg"} headline={"لبنة"} />

<Product price={"3"} image={"/images/products/adds/product-6.jpg"} headline={"خيار وطماطم"} />

<Product price={"3"} image={"/images/products/adds/product-7.jpg"} headline={"زعتر مع زيت الزيتون"} />

<Product price={"3"} image={"/images/products/adds/product-8.jpg"} headline={"جبنة فيتا بالطماطم"} />

<Product price={"3"} image={"/images/products/adds/product-9.jpg"} headline={"بيض مسلوق"} />

<Product price={"3"} image={"/images/products/adds/product-10.jpg"} headline={"مخلل البذنجان"} />

<Product price={"3"} image={"/images/products/adds/product-11.jpg"} headline={"مخلل الطماطم"} />

<Product price={"9"} image={"/images/products/adds/product-12.jpg"} headline={"سلة طعمية"} />

<Product price={"5"} image={"/images/products/adds/product-13.jpg"} headline={"سلة خبز"} />

<Product price={"10"} image={"/images/products/adds/product-14.jpg"} headline={"سلة بطاطس"} />

<Product price={"10"} image={"/images/products/adds/product-15.jpg"} headline={"براد شاي"} />

<Product price={"15"} image={"/images/products/adds/product-16.jpg"} headline={"براد كرك"} />

<Product price={"5"} image={"/images/products/adds/product-17.jpg"} headline={"كوب كرك"} />

<Product price={"3"} image={"/images/products/adds/product-18.jpg"} headline={"كوب شاي"} />


</div>

</div>

</div>
  )
}

export default SectionFour