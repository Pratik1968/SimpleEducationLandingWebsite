import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/layout'
import HeroSection from './HeroSection/layout'
import WelcomeCoachingSection from './WelcomeCoachingSection/layout'

function App() {

  return (
    <div className="flex flex-col">
   <Navbar/>
   <div className='h-[4.5rem]'></div>
   <HeroSection/>
   <div className='h-[4.5rem]'></div>
   <WelcomeCoachingSection/>
    </div>
  )
}

export default App
