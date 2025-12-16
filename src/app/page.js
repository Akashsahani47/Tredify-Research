import About from '@/components/hompage/aboutsection/about'
import Hero from '@/components/hompage/herosection/hero'
import Insights from '@/components/hompage/Insights/Insights'
import Services from '@/components/hompage/servicesection/services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Insights/>
      <Services/>
    </div>
  )
}

export default page
