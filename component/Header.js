import React from 'react'
import Image from 'next/image'
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
            <div>
                <input type="text"/>
            </div>
            
        
      </div>
      <div>
        secon part
      </div>
    </header>
  )
}

export default Header
