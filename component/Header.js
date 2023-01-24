import React from 'react'
import Image from 'next/image'
import {Bars3Icon,ShoppingCartIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline"
function Header() {
  return (
    <header>
      < div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
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
            
        
      </div>
      <div>
        second part
      </div>
    </header>
  )
}

export default Header
