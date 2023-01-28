import React from 'react'
import Image from 'next/image'
import {Bars3Icon,ShoppingCartIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import {signIn, signOut, useSession } from "next-auth/react"

function Header() {
  return (
    <header>
      < div className="  flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image src="https://links.papareact.com/f90"
            height={40}
            width={150}
            object-fit="contain"
            className='cursor-pointer'
            />
            </div>
            <div className='hidden sm:flex items-center h-10 cursor-pointer 
            flex-grow rounded-md bg-yellow-400 hover:bg-yellow-500'>
                <input className="focus:outline-none p-2 h-full w-6 flex-grow rounded-l-md flex-shrink" type="text"/>
                <MagnifyingGlassIcon className="h-12 p-4"/>
            </div>
            <div className='text-white flex text-center text-xs space-x-4 mx-2 whitespace-nowrap'>
                <div onClick={signIn} className='link'>
                    <p>Hello Yao</p>
                    <p className='font-extrabold md:text-sm '>Accounts & Lists</p>
                </div>
                <div className='link'>
                    <p>Returns </p>
                    <p>& orders</p>
                </div>
                <div className='relative link flex items-center'>
                    <span className='bg-yellow-400 text-center rounded-full font-semibold h-4 w-4 text-black absolute top-0 right-0 md:right-8'>0</span>
                    <ShoppingCartIcon className='h-7 '/>
                    <p className='hidden md:inline mt-2'>basket</p>
                </div>
            </div>
        
      </div>
      <div className='flex text-white items-center space-x-3 p-2 pl-6 bg-amazon_blue-light'>
        <p className='link flex items-center'>
        <Bars3Icon className='h-6 mr-1'/>
        All
        </p>
        <p className='link '>Prime Video</p>
        <p className='link '>Amazon Business</p>
        <p className='link '>Today's Deals</p>
        <p className='link hidden lg:inline-flex '>Electronics</p>
        <p className='link hidden lg:inline-flex '>Food & Grocery</p>
        <p className='link hidden lg:inline-flex '>Prime</p>
        <p className='link hidden lg:inline-flex '>Buy Again</p>
        <p className='link hidden lg:inline-flex '>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex '>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
