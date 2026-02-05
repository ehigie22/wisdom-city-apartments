import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = ({ apartment, onBook }) => {
  return (
    <Link
      to={'/apartments/' + apartment.id}
      onClick={() => window.scrollTo(0, 0)}
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white
      text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
    >
      <img src={apartment.images[0]} alt={apartment.name} />

      <div className="p-4 pt-5">
        <p className="font-playfair text-xl font-medium text-gray-800">
          {apartment.name}
        </p>

        <div className="mt-5">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onBook(apartment)
            }}
            className="px-6 py-2 text-sm font-medium border border-gray-300
            rounded bg-[#FF6700]/80 text-white cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard

