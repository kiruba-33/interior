import React from 'react'
import HeroSlider from '../components/HeroSlider'
import AboutSection from '../components/AboutSection'
import HeroContentBelow from '../components/HeroContentBelow'
import ServicesSection from '../components/ServicesSection'

function Home() {
  return (
    <div className="w-full">
        <HeroSlider/>
        <HeroContentBelow/>
        <AboutSection/>
        <ServicesSection/>
    </div>
  )
}

export default Home