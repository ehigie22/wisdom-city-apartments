import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useEffect } from "react";

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Apartments', path: '/apartments' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const location = useLocation()
    const navigate = useNavigate()

        useEffect(() => {

        if(location.pathname !== '/'){
            setIsScrolled(true)
            return
        } else {
            setIsScrolled(false)
        }
        setIsScrolled(prev => location.pathname !== '/' ? true : prev)

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
            <nav className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
  ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg" : ""}`}>

                {/* Logo */}
                <Link to='/' className="flex items-center gap-3">
                <img src={assets.logo} alt="logo" className={`h-9 origin-left transition-transform duration-300 ${isScrolled && "invert opacity-80"}`} />
                {/* Logo Text */}
                    <div
                        className={`leading-tight transition-all duration-300 ${
                        isScrolled ? "text-gray-800" : "text-white"
                        }`}
                    >
                        <h1 className="text-lg font-semibold tracking-wide">
                        Wisdom City
                        </h1>
                        <p className="text-xs tracking-widest uppercase opacity-80">
                        Homes and Apartment
                        </p>
                    </div>
                </Link>

                {/* Desktop Right Nav */}
                <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link, i) => (
                    <Link
                    key={i}
                    to={link.path}
                    className={`relative font-medium transition-colors duration-300 ${
                        isScrolled ? "text-gray-700" : "text-white"
                    }`}
                    >
                    {link.name}
                    <span
                        className={`absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300 hover:w-full ${
                        isScrolled ? "bg-gray-700" : "bg-white"
                        }`}
                    />
                    </Link>
                ))}

                <button onClick={() => {navigate('/apartments'); scrollTo(0,0)}}
                    className={`px-8 py-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                    isScrolled ? "bg-black text-white" : "bg-black text-white"
                    }`}
                >
                    View Apartments
                </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="menu-icon" className={`${isScrolled &&
                    "invert"} h-4`} />
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                    <button onClick={() => {
                            navigate('/apartments')
                            setIsMenuOpen(false)
                            window.scrollTo(0, 0)
                        }}
                    className="bg-black cursor-pointer text-white px-8 py-2.5 rounded-full transition-all duration-500">
                       View Apartments
                    </button>
                </div>
            </nav>
    );
}

export default Navbar