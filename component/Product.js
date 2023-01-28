import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/outline'
import Currency from 'react-currency-formatter'


const Product = ({id,title,price,description,category,image}) => {
  const Max = 5
  const Min= 1
  const [rating,setRating]=useState(1)
  const [hasPrime,setHasPrime]=useState(true)  
  
useEffect(()=>{
  setRating(Math.floor(Math.random()*(Max-Min+1))+Min);
  setHasPrime(Math.random()<0.5)
},[])

  return (
    
    <div className='relative items-center flex flex-col  m-5 z-30 bg-white p-10'>
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
     <Image  src={image} height={200} width={200} object-fit="contain"/>
     <h4>{title}</h4> 
        <div className='flex'>
            {Array(rating).fill().map((_,i)=>(<StarIcon className='h-4 text-yellow-500'/>))}
            
        </div>
<p className='text-xs my-2 line-clamp-2'>{description}</p>
<div className="mb-5">
  <Currency quantity={price} currency='GHS' />
  </div>
{hasPrime && (
    <div className='flex items-center space-x-3 -mt-5'>
        <Image className=" w-12"src="https://links.papareact.com/fdw" width={100} height={30} alt="prime "/>
        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
    </div>
)}
<button className='mt-auto button'>Add to Cart</button>
    </div>
  )
}

export default Product
