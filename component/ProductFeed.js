import React from 'react'
import Product from './Product'
import Image from 'next/image'
const ProductFeed = ({products}) => {
  return (
    <div className='relative grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-40 mx-auto'>

    {products?.slice(0,4).map(({id,title,price,description,category,image})=>(
       <Product key={id} image={image} category={category} title={title} price={price} description={description}/>

    ))} 
    <Image className="md:col-span-full" src="https://links.papareact.com/dyz" width={1080} height={100} object-fill  alt="stretch"/>
    
    <div className='md:col-span-2'>{products?.slice(4,5).map(({id,title,price,description,category,image})=>(
       <Product key={id} image={image} category={category} title={title} price={price} description={description}/>

    ))} </div>
    
    {products?.slice(5,9).map(({id,title,price,description,category,image})=>(
       <Product key={id} image={image} category={category} title={title} price={price} description={description}/>
    
    ))}
    
     {products?.slice(9,products.length).map(({id,title,price,description,category,image})=>(
       <Product key={id} image={image} category={category} title={title} price={price} description={description}/>
       

       //check
    ))}
    </div>
  )
}

export default ProductFeed
