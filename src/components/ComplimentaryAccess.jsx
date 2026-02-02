import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const ComplimentaryAccess = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-70 py-20'>
      <Title title='Complimentary Access' subTitle='Enjoy free access to our pool, lounge, and table tennis area with every booking.' />

    <div className='flex flex-wrap items-center justify-center gap-7 '>
            <div className="flex flex-wrap items-center justify-center gap-7 mt-16">
        <img
          src={assets.poolimg}
          alt="Pool"
          loading="lazy"
          className="w-[280px] h-[200px] rounded-xl object-cover shadow-lg"
        />
        <img
          src={assets.loungeimg}
          alt="Lounge"
          loading="lazy"
          className="w-[280px] h-[200px] rounded-xl object-cover shadow-lg"
        />
        <img
          src={assets.tabletennisimg}
          alt="Table Tennis"
          loading="lazy"
          className="w-[280px] h-[200px] rounded-xl object-cover shadow-lg"
        />
      </div>

      </div>
    </div>
  )
}

export default ComplimentaryAccess
