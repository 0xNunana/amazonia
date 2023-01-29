import React from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { StarIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '@/slices/basketSlice'




const CheckOutProduct = ({id,title,price,description,category,image,rating,hasPrime}) => {
    const dispatch = useDispatch();
    const addMore =()=>{
        const product ={
            id,title,price,description,category,image,rating,hasPrime
        }
        dispatch(addToBasket(product))
    }
   const removeItem=()=>{
    //remove item from redux based on its id 
    dispatch(removeFromBasket({id}))
   }
    return (
    
    <div className='grid grid-cols-5 m-2'>
        <Image src={image} alt="product" height={10} width={200} object-fit="contain"/>
       <div className='col-span-3 mx-5 '>
            <p>{title}</p>
            <div className='flex'>
            {Array(rating).fill().map((_,i)=>(
                <StarIcon key={i} className="h-5 text-yellow-500"/>
            ))}
            </div>
            <p className='text-xs mt-2 mb-2 line-clamp-3 '>{description}</p>
            <Currency quantity={price} currency="GHS"/>
            {hasPrime && (
                <div>
                    <Image loading='lazy' className='w-12'src="https://links.papareact.com/fdw"
                     alt="prime" height={20} width={50}/>
                     <p className='text-sm' >Free Next-day Delivery</p>
                </div>
            )}
       </div>
       <div className='flex flex-col space-y-2 my-auto justify-end'>
        <button onClick={addMore} className='button m-2'>Add to Cart</button>
     <button onClick={removeItem}className='button m-2'> Remove from Cart</button>
       </div>
     
    </div>
  )
}

export default CheckOutProduct
