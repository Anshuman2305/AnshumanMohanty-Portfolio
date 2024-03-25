import React from 'react'
import Education from './subcomponents/Education'
import Experience from './subcomponents/Experience'

function sidebar() {
  return (
    <div className="sidebar flex flex-col md:flex-row-reverse lg:flex-col w-full max-w-md md:max-w-full lg:max-w-md md:border-[2px] border-dullgreen sm:pt-8 sm:pb-2 sm:px-2 lg:p-2 rounded-2xl">
      <Experience />
      <Education />
      <div className="flex justify-center items-center"><p className="text-brightgreen py-8 sm:hidden">Anshuman Mohanty</p></div>
    </div>
  )
}

export default sidebar

