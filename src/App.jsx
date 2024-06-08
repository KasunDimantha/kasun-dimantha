import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/slikks/Skills'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
        <Footer/>
      </div>
    </>
  )
}

export default App
