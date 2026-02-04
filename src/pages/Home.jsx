import React from 'react'
import Hero from '../components/Hero'
import FeaturedApartments from '../components/FeaturedApartments'
import ComplimentaryAccess from '../components/ComplimentaryAccess'
import PageBackground from '../components/PageBackground'

const Home = () => {
  return (
    <div>
      <>
      <PageBackground>
        <Hero />
      <FeaturedApartments />
      <ComplimentaryAccess />
      </PageBackground>

      </>
    </div>
  )
}

export default Home
