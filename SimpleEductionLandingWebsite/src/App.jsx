import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/layout'
import HeroSection from './HeroSection/layout'

function App() {

  return (
    <div className="flex flex-col">
   <Navbar/>
   <div className='h-[4.5rem]'></div>
   <HeroSection/>
    </div>
  )
}

export default App
