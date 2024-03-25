import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className="navbar flex flex-row justify-between w-[100vw] lg:w-[70vw] mx-auto py-2 px-1">
        <Image className='h-[70px]' src={"/photos/am.svg"} width={100} height={100} alt="Picture of the author"/>
    </div>
  )
}

export default Navbar