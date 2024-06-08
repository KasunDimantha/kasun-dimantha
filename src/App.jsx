import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
      </div>
    </>
  )
}

export default App
