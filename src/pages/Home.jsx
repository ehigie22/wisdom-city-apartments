import React from 'react'
import Hero from '../components/Hero'
import FeaturedApartments from '../components/FeaturedApartments'
import ComplimentaryAccess from '../components/ComplimentaryAccess'
import { Helmet } from "react-helmet-async";
import { assets } from '../assets/assets';

const Home = () => {
  return (
    <div>
      <>
      <Helmet>
          <title>Luxury Apartments in Benin | Wisdom City Homes</title>
          <meta
            name="description"
            content="Find luxury and affordable apartments in Benin City. Book your stay with Wisdom City Homes today."
          />

          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Wisdom City Homes",
                "url": "${window.location.origin}",
                "logo": "${assets.logo}",
                "description": "Wisdom City Homes provides modern, fully furnished luxury short-let apartments in Benin City with comfort, security, and exceptional service.",
                "sameAs": [
                  "https://www.instagram.com/wisdomcityhomesbenin",
                  "https://www.tiktok.com/@wisdomcityhomesbenin"
                ]
              }
            `}
          </script>
        </Helmet>
        <Hero />
      <FeaturedApartments />
      <ComplimentaryAccess />
      </>
    </div>
  )
}

export default Home
