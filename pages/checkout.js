import React from 'react'
import Header from '@/component/Header'
import Image from 'next/image'
const Checkout = () => {
  return (
    <div >
        <Header/>
        <main className="max-w-screen-lg mx-auto md:flex bg-gray-100">

            <div className='flex-grow m-5 shadow-sm'>
                <Image src="https://links.papareact.com/ikj"
                 alt="checkout pic" height={250} width={1020}
                 object-fit="contain"/>
                 <div className='flex flex-col space-x-10 text-3xl border-b pb-4 bg-white p-5'>
                    Shopping Basket
                    </div>
            </div>





            <div ><h2>Subtotal</h2></div>
  
        </main>
    
    </div>
  )
}

export default Checkout
