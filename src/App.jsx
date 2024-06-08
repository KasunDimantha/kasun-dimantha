import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/slikks/Skills'

function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
      </div>
    </>
  )
}

export default App
