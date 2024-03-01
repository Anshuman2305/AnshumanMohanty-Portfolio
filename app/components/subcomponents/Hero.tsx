import Image from 'next/image'
import React from 'react'


function hero() {
  return (
    <div className="hero-container flex flex-col-reverse md:flex-row flex-nowrap gap-8 lg:justify-between lg:items-center w-full lg:max-w-8xl px-4 lg:px-8 py-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl text-brightgreen font-bold">Anshuman <br/> Mohanty</h1>
          <p className="text-lg text-mediumgreen">Digging for  <span className="bg-brightgreen px-2 text-darkgreen-bg">ore</span> by day, digging into  <span className="bg-brightgreen px-2 text-darkgreen-bg">code</span>  by night.</p>
          <p className="text-lg text-justify text-mediumgreen max-w-lg ">From delving into the depths of the earth to navigating the vast expanses of the digital realm, I am a mining student with a passion for both extracting ore and crafting code.</p>
          <a href="/ref" className="transition ease-in-out duration-300 bg-dullgreen hover:bg-brightgreen hover:text-darkgreen-bg text-brightgreen md:w-1/4 text-center py-2 lg:p-1 rounded-lg">Resume</a>
        </div>
        <Image src={"/photos/photo.jpeg"} width={200} height={200} alt="anshuman mohanty" className="rounded-xl lg:hidden xl:block md:w-64 md:h-80" />
    </div>
  )
}

export default hero