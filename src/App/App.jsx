import { useState } from 'react'

// components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

// ? style
import './App.css'

function App() {
  return (
    <section className='app' >
    <Navbar></Navbar>
    <main className='app__container' >123</main>
    <Footer></Footer>
    </section>
  )
}

export default App
