
import React, { useState } from 'react'
import { apartmentsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import Booking from './Booking'

const FeaturedApartments = () => {
  const navigate = useNavigate()
  const [showBooking, setShowBooking] = useState(false)
  const [selectedApartment, setSelectedApartment] = useState(null)

  return (
    <>
      {/* Booking Modal — GLOBAL */}
      {showBooking && selectedApartment && (
        <Booking
          apartment={selectedApartment}
          onClose={() => setShowBooking(false)}
        />
      )}

      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24
        bg-slate-50 py-20 animate-fadeIn">

        <Title
          title="Featured Apartments"
          subTitle="Enjoy the perfect blend of style, comfort, and convenience with our selection of featured apartments."
        />

        <div className="flex flex-wrap items-center justify-center gap-6 mt-18">
          {apartmentsDummyData.slice(0, 4).map((apartment) => (
            <HotelCard
              key={apartment.id}
              apartment={apartment}
              onBook={(apt) => {
                setSelectedApartment(apt)
                setShowBooking(true)
              }}
            />
          ))}
        </div>

        <button
          onClick={() => {
            navigate('/apartments')
            window.scrollTo(0, 0)
          }}
          className="mt-12 px-6 py-2 text-lg border border-gray-300
          rounded bg-[#FF6700]/80 text-white hover:bg-[#FF6700]/70"
        >
          View All Apartments
        </button>
      </div>
    </>
  )
}

export default FeaturedApartments



