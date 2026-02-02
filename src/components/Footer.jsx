import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: [
            { label: "Home", url: "/" },
            { label: "Apartments", url: "/apartments" },
            { label: "About", url: "/about" },
            { label: "Contact Us", url: "https://wa.me/2347034736069" },
            ],
        },

        {
            title: "Follow Us",
            links: [
            {
                label: "Instagram",
                url: "https://www.instagram.com/wisdomcityhomesbenin?igsh=emZucG9tN3RqajVk",
            },
            {
                label: "TikTok",
                url: "https://www.tiktok.com/@wisdomcityhomesbenin?_r=1&_t=ZN-93Y2AKZcqcI",
            },
            {
                label: "WhatsApp",
                url: "https://wa.me/2347034736069",
            },
            ],
        },
    ];
  return (
        <div className="bg-slate-50 px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
            <div className="flex flex-col max-w-[420px]">
  {/* Logo Row */}
  <div className="flex items-center gap-3">
    <img
      className="w-10 flex-shrink-0 invert opacity-80"
      src={assets.logo}
      alt="logo"
    />

    <div className="flex flex-col leading-tight">
      <h1 className="text-lg font-semibold tracking-wide text-gray-800">
        Wisdom City
      </h1>
      <p className="text-xs tracking-widest uppercase opacity-80 hidden sm:block">
        Homes and Apartment
      </p>
    </div>
  </div>

  {/* Description */}
  <p className="mt-5 text-sm text-gray-500 leading-relaxed">
    At Wisdom City Homes and Apartments, we offer luxury accommodations and unforgettable experiences,
    ensuring every guest enjoys comfort, style, and exceptional service
    throughout their stay.
  </p>
</div>


                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                            {section.links.map((link, i) => (
                            <li key={i}>
                                <a
                                href={link.url}
                                rel="noopener noreferrer"
                                className="hover:underline transition"
                                >
                                {link.label}
                                </a>
                            </li>
                            ))}

                            </ul>
                        </div>
                    ))}
                <div>
                    <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                        Our Location
                    </h3>
                    <p className="mb-2 text-sm text-gray-500">
                        5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City
                    </p>

                    <a
                        href="https://www.google.com/maps?q=5+Prince+Imafidonmorogbe+Ezomo+Ave,+Oka,+Benin+City,+Edo,+Nigeria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg overflow-hidden border border-gray-300 hover:opacity-90 transition"
                    >
                        <iframe
                        title="Wisdom City Location"
                        src="https://www.google.com/maps?q=5+Prince+Imafidonmorogbe+Ezomo+Ave,+Oka,+Benin+City,+Edo,+Nigeria&output=embed"
                        className="w-full h-36"
                        loading="lazy"
                        />
                    </a>
                </div>


                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2026 © <a href="#">TranquilStay</a> All Right Reserved.
            </p>
        </div>
  )
}

export default Footer
