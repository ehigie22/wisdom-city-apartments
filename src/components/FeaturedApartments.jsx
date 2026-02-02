import React from 'react'
import { apartmentsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'


const FeaturedApartments = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

        <Title title='Featured Apartments' subTitle='Enjoy the perfect blend of style, comfort, and convenience with our selection of featured apartments, each designed to make your stay truly unforgettable.' />

      <div className='flex flex-wrap items-center justify-center gap-7 mt-18'>
        {apartmentsDummyData.slice(0,4).map((apartment, index) => 
        (
            <HotelCard key={apartment} apartment={apartment} index={index} />
        ))}
      </div>

     <button onClick={() => {navigate('/apartments'); scrollTo(0,0)}}
      className='my-16px px-6 py-2 text-lg font-medium mt-12 border
      border-gray-300 rounded bg-[#FF6700]/80 text-white hover:bg-[#FF6700]/70 transition-all cursor-pointer'>
        View All Apartments
      </button>
    </div>

  )
}

export default FeaturedApartments
