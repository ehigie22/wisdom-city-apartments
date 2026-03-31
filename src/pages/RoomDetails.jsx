import React, { useEffect, useState } from 'react'
import { apartmentsDummyData, assets, facilityIcons, roomCommonData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import Booking from '../components/Booking'
import { Helmet } from "react-helmet-async";


const RoomDetails = () => {

  const { id } = useParams()
  const [apartment, setApartment] = useState(null)
  const [mainImage, setMainImage] = useState(null)
  const [showBooking, setShowBooking] = useState(false)

  useEffect(() => {
    const foundApartment = apartmentsDummyData.find(
      apartment => apartment.id === Number(id)
    )

    if (foundApartment) {
      setApartment(foundApartment)
      setMainImage(foundApartment.images[0])
    }
  }, [id])

  return apartment && (
    <>
    <Helmet>
      <title>{apartment.name} | Luxury Short-let in Benin City | Wisdom City Homes</title>
      <meta
        name="description"
        content={`Book ${apartment.name}, a luxury short-let apartment in Benin City. Fully furnished with 24/7 power, security, and comfort.`}
      />
      
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Apartment",
            "name": "${apartment.name}",
            "image": "${apartment.images[0]}",
            "description": "Luxury short-let apartment in Benin City, fully furnished with comfort and security.",
            "url": "${window.location.origin}/apartments/${apartment.name.toLowerCase().replace(/\\s+/g, '-')}"
          }
        `}
      </script>
    </Helmet>
      {showBooking && (
  <Booking
    apartment={apartment}
    onClose={() => setShowBooking(false)}
  />
)}
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>

      {/* Room Details */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {apartment.name}
        </h1>
      </div>

      {/* Room Images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img
            src={mainImage}
            alt={`${apartment.name} in Benin City`}
            className='w-full rounded-xl shadow-lg object-cover'
          />
        </div>

        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {apartment.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${apartment.name} thumbnail ${index + 1}`}
              onClick={() => setMainImage(image)}
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer
                ${mainImage === image ? 'outline outline-2 outline-orange-500' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Room Highlights */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div>
          <h1 className='text-3xl md:text-4xl font-playfair'>
            Experience Luxury Like Never Before
          </h1>
        </div>

        <div className='mt-6 md:mt-0'>
          <button onClick={() => setShowBooking(true)}
          type='submit' className=' px-8 py-4 text-sm text-3xl border
                border-gray-300 rounded bg-[#FF6700]/80 text-white transition-all cursor-pointer'>
          Book Now</button>
        </div>
      </div>
      
       {/* Common Specifications */}
       <div className='mt-25 space-y-4'>
        {roomCommonData.map((spec, index) => (
          <div key={index} className='flex items-start gap-2'>
            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
            <div>
              <p className='text-base'>{spec.title}</p>
              <p className='text-gray-500'>{spec.description}</p>
            </div>
          </div>
        ))}
       </div>
    </div>
    </>
  )
}

export default RoomDetails
