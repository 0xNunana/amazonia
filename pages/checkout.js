import React from 'react'
import Header from '@/component/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '@/slices/basketSlice'
import CheckOutProduct from '@/component/CheckOutProduct'
import { useSession } from 'next-auth/react'
import Currency from "react-currency-formatter"


const Checkout = () => {
    const Items = useSelector(selectItems)
    const Total = useSelector(selectTotal)
    const {data:session}= useSession()
  return (
    <div >
        <Header/>
        <main className="max-w-screen-lg mx-auto md:flex bg-gray-100">

            <div className='flex-grow m-5 shadow-sm'>
                <Image src="https://links.papareact.com/ikj"
                 alt="checkout pic" height={250} width={1020}
                 object-fit="contain"/>
                 <div className='flex flex-col space-x-10  bg-white p-5'>
                   <h1 className='text-3xl border-b pb-4'>{Items.length ==0 ? "Empty Basket": "Shopping Basket"}</h1> 
                  
                  {Items.map(({id,title,price,description,category,image, rating,hasPrime},i)=>(
                    <CheckOutProduct key={i}
                    id={id} title={title} price={price}
                    description={description} category ={category}
                    image={image} rating={rating} hasPrime={hasPrime} />
                      
                  ))
                    }
                
                  
                  
                    </div>
            </div>

            <div className='flex flex-col bg-white p-10 shadow-md'>
              {Items.length > 0 && (
                <div>
                  <h2 className='whitespace-nowrap'>Subtotal ({Items.length} items):
                  <span className='font-bold'>
                    <Currency quantity={Total} currency="GHS"/></span>
                  </h2>
                  <button disabled={!session}
                  className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}> 
                  {!session ? "Sign in to Checkout":"proceed to checkout"}</button>
                </div>
              )}
              </div>
  
        </main>
    
    </div>  
  )
}

export default Checkout
