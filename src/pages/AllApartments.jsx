import React, { useState } from 'react'
import { apartmentsDummyData, assets, facilityIcons } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Booking from '../components/Booking'

const AllApartments = () => {
  const navigate = useNavigate()

  const [showBooking, setShowBooking] = useState(false)
  const [selectedApartment, setSelectedApartment] = useState(null)

  return (
    <>
      {/* Booking */}
      {showBooking && selectedApartment && (
        <Booking
          apartment={selectedApartment}
          onClose={() => setShowBooking(false)}
        />
      )}

      <div className='flex flex-col-reverse lg:flex-row items-start justify-between
        pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>

        <div>
          <h1 className='font-playfair text-4xl md:text-[40px]'>
            Available Apartments
          </h1>

          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>
            Take advantage of our limited-time offers and special packages
            to enhance your stay and create unforgettable memories.
          </p>

          {apartmentsDummyData.map((apartment) => (
            <div
              key={apartment.id}
              className='flex flex-col md:flex-row items-start py-10 gap-6 border-b
              border-gray-300 last:border-0'
            >
              {/* Image */}
              <img
                onClick={() => {
                  navigate(`/apartments/${apartment.id}`)
                  window.scrollTo(0, 0)
                }}
                src={apartment.images[0]}
                alt={apartment.name}
                className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
              />

              {/* Details */}
              <div className='md:w-1/2 flex flex-col gap-2'>
                <p
                  onClick={() => navigate(`/apartments/${apartment.id}`)}
                  className='text-gray-800 text-3xl font-playfair cursor-pointer'
                >
                  {apartment.name}
                </p>

                <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{apartment.address}</span>
                </div>

                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                  {apartment.amenities.map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'
                    >
                      <img className='w-5 h-5' src={facilityIcons[item]} alt={item} />
                      <p className='text-xs'>{item}</p>
                    </div>
                  ))}
                </div>

                <p className='text-xl font-medium text-gray-700'>
                  ₦{apartment.pricePerNight.toLocaleString()} / night
                </p>

                {/* Book Button */}
                <div className='mt-4'>
                  <button
                    onClick={() => {
                      setSelectedApartment(apartment)
                      setShowBooking(true)
                    }}
                    className='px-6 py-2 text-sm border
                    border-gray-300 rounded bg-[#FF6700]/80 text-white'
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AllApartments
