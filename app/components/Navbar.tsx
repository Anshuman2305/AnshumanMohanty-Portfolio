import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className="flex flex-row justify-between w-[90vw] lg:w-[70vw] mx-auto">
        <Image src={"/photos/am.svg"} width={100} height={100} alt="Picture of the author"/>
    </div>
  )
}

export default Navbar