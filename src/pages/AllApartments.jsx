import React, { useState } from "react";
import { apartmentsDummyData, facilityIcons } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import Booking from "../components/Booking";

const AllApartments = () => {
  const navigate = useNavigate();

  const [showBooking, setShowBooking] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState(null);

  return (
    <>
      {/* Booking modal */}
      {showBooking && selectedApartment && (
        <Booking
          apartment={selectedApartment}
          onClose={() => setShowBooking(false)}
        />
      )}

      <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
        <h1 className="font-playfair text-4xl md:text-[40px] mb-4">
          Available Apartments
        </h1>

        <p className="text-sm md:text-base text-gray-500/90 mb-8 max-w-174">
          Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
        </p>

        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apartmentsDummyData.map((apartment) => (
            <div
              key={apartment.id}
              className="flex flex-col items-start bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Image with hover overlay */}
              <div
                className="relative w-full cursor-pointer group"
                onClick={() => {
                  navigate(`/apartments/${apartment.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={apartment.images[0]}
                  alt={apartment.name}
                  className="w-full h-60 md:h-64 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                    flex items-center justify-center rounded-t-xl transition-all duration-300">
                  <p className="text-white font-semibold text-lg md:text-xl">
                    View Apartment
                  </p>
                </div>
              </div>

              {/* Details below image */}
              <div className="p-4 w-full flex flex-col gap-3">
                <p
                  onClick={() => {
                    navigate(`/apartments/${apartment.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-800 text-xl md:text-2xl font-playfair cursor-pointer"
                >
                  {apartment.name}
                </p>

                {/* <div className="flex flex-wrap items-center gap-2 mt-2">
                  {apartment.amenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-2 py-1 rounded-lg bg-[#F5F5FF]/70"
                    >
                      <img className="w-4 h-4" src={facilityIcons[item]} alt={item} />
                      <p className="text-xs">{item}</p>
                    </div>
                  ))}
                </div> */}

                {/* Book button */}
                <button
                  onClick={() => {
                    setSelectedApartment(apartment);
                    setShowBooking(true);
                  }}
                  className="mt-3 px-4 py-2 text-sm border border-gray-300 rounded bg-[#FF6700]/80 text-white hover:bg-[#FF6700]/70 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllApartments;
