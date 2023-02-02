import Header from '@/component/Header'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import {useRouter} from 'next/router'


const success = () => {
    const router= useRouter()
  return (
    <div >
      <Header/>
    <main className='max-w-screen-md mx-auto bg-gray-100 h-screen'>
        <div className="flex flex-col p-10 bg-white">
            <div className='flex items-center space-x-2 mb-5'>
                <CheckCircleIcon className='text-green-400 h-10 text-semibold'/>
                <h1 className='text-3xl'>Thank you, your order has been confirmed !</h1>
            </div>
            <p> Thank you for shopping with us. We'll send a confirmation when the item is shipped. If you'd like to check the status of your order(s) please click the link below</p>
        <button onClick={()=>router.push("/order")}className='button mt-8'>Go to my orders</button>
        </div>

    </main>
    </div>
  )
}

export default success
