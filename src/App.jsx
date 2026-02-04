import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllApartments from './pages/AllApartments'
import RoomDetails from './pages/RoomDetails'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/apartments' element ={<AllApartments />}/>
        <Route path='/apartments/:id' element ={<RoomDetails />}/>
        <Route path='/about' element ={<About />}/>
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      </div> 
      <Footer /> 
    </div>
  )
}

export default App
