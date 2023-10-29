import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/layout'
import HeroSection from './HeroSection/layout'
import WelcomeCoachingSection from './WelcomeCoachingSection/layout'
import StartLearningSection from './StartLearningSection/layout'

function App() {

  return (
    <div className="flex flex-col">
   <Navbar/>
   <div className='h-[4.5rem]'></div>
   <HeroSection/>
   <div className='h-[10rem]'></div>
   <WelcomeCoachingSection/>
   <div className='h-[10rem]'></div>
   <StartLearningSection/>
    </div>
  )
}

export default App
