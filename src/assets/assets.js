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
import regImage from './regImage.png'
import aboutImg from './aboutImg.jpg'
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import poolimg from './poolimg.jpeg'
import tabletennisimg from './tabletennisimg.jpg'
import loungeimg from './loungeimg.jpg'
import wifiImg from './wifiImg.jpg'
import room1a from './room1a.jpg'
import room1b from './room1b.jpg'
import room1c from './room1c.jpg'
import room1d from './room1d.jpg'
import room1e from './room1e.jpg'
import room2a from './room2a.jpg'
import room2b from './room2b.jpg'
import room2c from './room2c.jpg'
import room2d from './room2d.jpg'
import room3a from './room3a.jpg'
import room3b from './room3b.jpg'
import room3c from './room3c.jpg'
import room3d from './room3d.jpg'
import room4a from './room4a.jpg'
import room4b from './room4b.jpg'
import room4c from './room4c.jpg'
import room4d from './room4d.jpg'
import room5a from './room5a.jpg'
import room5b from './room5b.jpg'
import room5c from './room5c.jpg'

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
    wifiImg,


    aboutImg,
    room1a,
    room1b,
    room1c,
    room1d,
    room1e,
    room2a,
    room2b,
    room2c,
    room2d,
    room3a,
    room3b,
    room3c,
    room3d,
    room4a,
    room4b,
    room4c,
    room4d,
    room5a,
    room5b,
    room5c,

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

// // Hotel Dummy Data
// export const apartmentDummyData = {
//     "name": "Wisdom Homes and Apartments",
//     "address": " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
//     "contact": "+0123456789",
//     "city": "Benin City",
// }

// Rooms Dummy Data
export const apartmentsDummyData = [

    {
    id: 1,
    name: "3 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 250000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [room1b, room1a, room1c, room1e] 
    },
    {
    id: 2,
    name: "3 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 250000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [room2a, room2b, room2c, room2d]
    },
    {
    id: 3,
    name: "2 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 200000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [room3a, room3b, room3c, room3d]
    },
    {
    id: 4,
    name: "2 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 200000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [room4a, room4b, room4c, room4d]
    },
    {
    id: 5,
    name: "2 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 200000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [room5a, room5b, room5c, room1e]
    },
    {
    id: 6,
    name: "2 Bedroom Apartment",
    address: " 5 Prince Imafidonmorogbe Ezomo Ave, Oka, Benin City, Edo State.",
    pricePerNight: 200000,
    amenities: ["Pool Access", "Free WiFi", "Room Service"],
    images: [room5b, room5a, room5c, room1e]
    },

]
