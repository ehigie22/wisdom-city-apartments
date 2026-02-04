import React from 'react'
import Hero from '../components/Hero'
import FeaturedApartments from '../components/FeaturedApartments'
import ComplimentaryAccess from '../components/ComplimentaryAccess'


const Home = () => {
  return (
    <div>
      <>
        <Hero />
      <FeaturedApartments />
      <ComplimentaryAccess />
      </>
    </div>
  )
}

export default Home
