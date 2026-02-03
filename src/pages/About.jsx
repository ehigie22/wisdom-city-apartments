import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>

      {/* ABOUT HEADER */}
      <div className="text-center pt-28 md:pt-35 px-4 ">
          <h1 className='font-playfair text-4xl md:text-[40px]'>
           About Us
          </h1>
      </div>

      {/* ABOUT INNER */}
      <div className="
        max-w-[1200px] 
        mx-auto 
        my-[60px] 
        px-4 
        sm:px-6 
        lg:px-0
        flex 
        flex-col 
        gap-[50px] 
        items-start 
        md:flex-row 
        md:items-center 
        md:gap-[60px]
      ">
        {/* IMAGE */}
        <img
          src={assets.aboutImg}
          alt="Apartment"
          className="
            w-full 
            object-cover 
            rounded 
            cursor-pointer 
            md:max-w-[450px] 
            md:w-1/2
          "
        />

        {/* TEXT SECTION */}
        <div className="
          flex 
          flex-col 
          justify-center 
          gap-6 
          text-gray-600 
          text-base 
          leading-[26px] 
          md:w-1/2
        ">
          <p>
             <span className="font-semibold">Wisdom City Homes and Apartments</span> is a modern short-let and serviced apartment brand located just 5 minutes from Benin City Airport,
            offering guests exceptional convenience, comfort, and hotel-style services with the warmth and privacy of a home. Strategically positioned for
            ease of access, the brand is ideal for business travellers, visiting professionals, tourists, families, and members of the Nigerian diaspora
            seeking premium short-stay accommodation in Benin City, Nigeria.
          </p>

          <p>
            Wisdom City Homes and Apartments caters to guests visiting for business, weddings and social events, school admissions, holidays, as well
            as medical and family trips. This prime airport-adjacent location offers unmatched convenience for quick arrivals and smooth departures,
            making it especially attractive to corporate travellers, visiting professionals, and short-stay guests. Whether for a quick overnight stay, a
            business trip, or an extended visit, guests enjoy seamless connectivity to the city and beyond.Each apartment at Wisdom City Homes and

            Apartments is fully furnished and thoughtfully designed, featuring spacious living areas, well-equipped kitchens, comfortable bedrooms, high-
            speed internet, smart TVs, reliable power supply, and secure parking. The spaces are created to allow guests to work, relax, entertain, and

            feel completely at home.
          </p>

          <div>
            <b className="text-gray-900">Our Mission</b>
            <p>
              Our mission is to deliver comfortable, secure, and affordable apartment stays
              while maintaining high standards of hospitality and service.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US HEADER */}
      <div className="
        text-2xl 
        leading-8 
        pt-3 
        pb-3 
        max-w-[1200px] 
        mx-auto 
        my-[60px]
      ">

      </div>

      {/* WHY CHOOSE US INNER */}
      <div className="
        max-w-[1200px] 
        mx-auto 
        mb-20 
        flex 
        flex-col 
        md:flex-row
      ">
        {/* CARD 1 */}
        <div className="
          border 
          border-gray-300 
          p-8 
          flex 
          flex-col 
          gap-5 
          text-base 
          leading-6
        ">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Our apartments are carefully maintained and cleaned to ensure a safe,
            comfortable, and hygienic environment for every guest.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="
          border 
          border-gray-300 
          p-8 
          flex 
          flex-col 
          gap-5 
          text-base 
          leading-6
        ">
          <b>Convenience</b>
          <p className="text-gray-600">
            Easy booking, flexible stays, and a calm atmosphere make your experience
            smooth and stress-free from start to finish.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="
          border 
          border-gray-300 
          p-8 
          flex 
          flex-col 
          gap-5 
          text-base 
          leading-6
        ">
          <b>Exceptional Hospitality</b>
          <p className="text-gray-600">
            We are committed to providing friendly and responsive service to ensure
            every guest feels welcomed and cared for.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
