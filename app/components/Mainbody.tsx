import React from 'react'
import Hero from './subcomponents/Hero'
import Projects from './subcomponents/Projects'

function Mainbody() {
  return (
    <div className="flex flex-col w-full max-w-6xl border-[3px] border-dullgreen p-2 rounded-2xl">
      <Hero/>
      <Projects/>
    </div>
  )
}

export default Mainbody