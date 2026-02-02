import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate()
  return (
        <div
      className="relative flex flex-col items-start justify-center
      px-6 md:px-16 lg:px-24 xl:px-32
      text-white h-screen
      bg-[url('/src/assets/heroImage.jpg')]
      bg-no-repeat bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10">
        <p className="bg-[#FF6700]/30 px-3.5 py-1 rounded-full mt-20 inline-block">
          The Ultimate Stay Experience
        </p>

        <h1 className="font-playfair text-2xl md:text-[53px] md:leading-[56px]
        font-bold max-w-xl mt-4">
          Welcome to Wisdom City Homes and Apartments
        </h1>
        <p className="max-w-[520px] mt-4 text-sm md:text-base text-white/90">
            Experience modern living in thoughtfully designed apartments built for comfort, style, and everyday convenience.
        </p>
        <button onClick={() => {navigate('/apartments'); scrollTo(0,0)}}
        className="mt-6 bg-[#FF6700]/80 cursor-pointer text-white px-8 py-2.5 rounded-full transition-all duration-500">
            View Apartments
        </button>
      </div>
    </div>
  )
}

export default Hero
