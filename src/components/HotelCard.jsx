// import React from 'react'
// import { Link } from 'react-router-dom'

// const HotelCard = ({ apartment, onBook }) => {
//   return (
//     <Link
//       to={'/apartments/' + apartment.id}
//       onClick={() => window.scrollTo(0, 0)}
//       className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white
//       text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
//     >
//       <img src={apartment.images[0]} alt={apartment.name} />

//       <div className="p-4 pt-5">
//         <p className="font-playfair text-xl font-medium text-gray-800">
//           {apartment.name}
//         </p>

//         <div className="mt-5">
//           <button
//             onClick={(e) => {
//               e.preventDefault()
//               e.stopPropagation()
//               onBook(apartment)
//             }}
//             className="px-6 py-2 text-sm font-medium border border-gray-300
//             rounded bg-[#FF6700]/80 text-white cursor-pointer"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default HotelCard


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const HotelCard = ({ apartment, onBook }) => {
  return (
    <motion.div
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="w-full sm:w-[48%] md:w-[23%] mb-6 
                 bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.05)] overflow-hidden"
    >
      <Link
        to={"/apartments/" + apartment.id}
        onClick={() => window.scrollTo(0, 0)}
        className="relative w-full block"
      >
        <img
          src={apartment.images[0]}
          alt={apartment.name}
          className="w-full h-48 object-cover"
        />

        <div className="p-4 pt-5">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {apartment.name}
          </p>

          <div className="mt-5">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onBook(apartment);
              }}
              className="px-6 py-2 text-sm font-medium border border-gray-300
                rounded bg-[#FF6700]/80 text-white cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default HotelCard;
