// import React from 'react'
// import Title from './Title'
// import { assets } from '../assets/assets'

// const ComplimentaryAccess = () => {
//   return (
//     <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-70 py-20'>
//       <Title title='Complimentary Access' subTitle='Enjoy free access to our pool, lounge, and table tennis area with every booking.' />

//     <div className='flex flex-wrap items-center justify-center gap-7 '>
//             <div className="flex flex-wrap items-center justify-center gap-7 mt-16">
//         <img
//           src={assets.poolimg}
//           alt="Pool"
//           loading="lazy"
//           className="w-[280px] h-[200px] rounded-xl object-cover shadow-lg"
//         />
//         <img
//           src={assets.loungeimg}
//           alt="Lounge"
//           loading="lazy"
//           className="w-[280px] h-[200px] rounded-xl object-cover shadow-lg"
//         />
//         <img
//           src={assets.tabletennisimg}
//           alt="Table Tennis"
//           loading="lazy"
//           className="w-[280px] h-[200px] rounded-xl object-cover shadow-lg"
//         />
//       </div>

//       </div>
//     </div>
//   )
// }

// export default ComplimentaryAccess


import React from 'react';
import Title from './Title';
import { assets } from '../assets/assets';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

const ComplimentaryAccess = () => {
  const images = [
    { src: assets.poolimg, alt: 'Pool' },
    { src: assets.loungeimg, alt: 'Lounge' },
    { src: assets.tabletennisimg, alt: 'Table Tennis' },
    { src: assets.wifiImg, alt: 'Free Wifi' },
  ];

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-100 py-20 animate-fadeIn delay-300">
      <Title
        title="Complimentary Access"
        subTitle="Enjoy free access to our pool, lounge, wifi, table tennis area with every booking."
      />

      <div className="w-full mt-16 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-[290px] rounded-xl object-cover shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrow styling */}
        <style>
          {`
            .swiper-button-next,
            .swiper-button-prev {
              width: 34px;
              height: 34px;
              display: flex;
              align-items: center;
              justify-content: center;
              color:#fff
            }
            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 24px; /* Bigger arrows */
              
              
            }
            .swiper-pagination-bullet {
              background: gray; /* Pagination bullets color */
              opacity: 0.8;
            }
            .swiper-pagination-bullet-active {
              background: white; /* Active bullet color */
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ComplimentaryAccess;
