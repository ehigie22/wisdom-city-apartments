import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllApartments from './pages/AllApartments'
import RoomDetails from './pages/RoomDetails'
import About from './pages/About'

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
      </Routes>
      </div> 
      <Footer /> 
    </div>
  )
}

export default App
