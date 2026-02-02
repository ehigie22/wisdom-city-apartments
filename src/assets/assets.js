import logo from './logo.png'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calendarIcon from './calendarIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import poolimg from './poolimg.jpg'
import tabletennisimg from './tabletennisimg.jpg'
import loungeimg from './loungeimg.jpg'


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calendarIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    poolimg,
    tabletennisimg,
    loungeimg,
}

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained, hygienic apartment designed for your comfort and peace of mind." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "Every apartment is thoroughly cleaned and prepared before arrival to ensure a fresh and healthy stay." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "Conveniently located in a calm and accessible neighborhood, loved by guests for its comfort and ease of access." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "Simple, hassle-free check-in so you can settle in quickly and enjoy your stay." },
];

// Hotel Dummy Data
export const apartmentDummyData = {
    "name": "Wisdom Homes and Apartments",
    "address": " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    "contact": "+0123456789",
    "city": "Benin City",
}

// Rooms Dummy Data
export const apartmentsDummyData = [

    {
    id: 1,
    name: "3 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 250000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4] 
    },
    {
    id: 2,
    name: "3 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 250000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [roomImg4, roomImg3, roomImg2, roomImg1]
    },
    {
    id: 3,
    name: "2 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 200000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [roomImg3, roomImg2, roomImg4]
    },
    {
    id: 4,
    name: "2 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 200000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [roomImg2, roomImg2]
    },
    {
    id: 5,
    name: "2 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 200000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [roomImg1, roomImg2]
    },
    {
    id: 6,
    name: "2 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 200000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [roomImg1, roomImg2]
    },
        {
    id: 7,
    name: "2 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 200000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [roomImg1, roomImg2]
    },

]

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/