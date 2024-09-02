import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/GMSLogo.png'; // Adjust the path as needed

const NavBar = () => {
    const navbarRef = useRef(null);
    const immigrationDropdownRef = useRef(null);
    const bankruptcyDropdownRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isImmigrationDropdownOpen, setIsImmigrationDropdownOpen] = useState(false);
    const [isBankruptcyDropdownOpen, setIsBankruptcyDropdownOpen] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            if (location.hash) {
                const targetElement = document.querySelector(location.hash);
                if (targetElement) {
                    const navbarHeight = navbarRef.current.offsetHeight;
                    window.scrollTo({
                        top: targetElement.offsetTop - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        const handleClickOutside = (event) => {
            if (immigrationDropdownRef.current && !immigrationDropdownRef.current.contains(event.target)) {
                setIsImmigrationDropdownOpen(false);
            }
            if (bankruptcyDropdownRef.current && !bankruptcyDropdownRef.current.contains(event.target)) {
                setIsBankruptcyDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [location.hash]);

    const handleImmigrationClick = (e) => {
        if (e.target === e.currentTarget) {
            navigate('/immigration');
            setIsImmigrationDropdownOpen(false);
        }
    };

    const handleBankruptcyClick = (e) => {
        if (e.target === e.currentTarget) {
            navigate('/bankruptcy');
            setIsBankruptcyDropdownOpen(false);
        }
    };

    const toggleImmigrationDropdown = (e) => {
        e.stopPropagation();
        setIsImmigrationDropdownOpen(!isImmigrationDropdownOpen);
    };

    const toggleBankruptcyDropdown = (e) => {
        e.stopPropagation();
        setIsBankruptcyDropdownOpen(!isBankruptcyDropdownOpen);
    };

    return (
        <div className="bg-white fixed w-full z-50 top-0" ref={navbarRef}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-12 h-12 sm:w-16 sm:h-16 mr-4"
                        />
                        <Link to="/#home" className="text-xl sm:text-2xl text-blue-600 font-bold hover:text-blue-700">
                            LAW OFFICES OF GWENDOLYN M. SANTOS
                        </Link>
                    </div>
                    <div className="sm:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 text-lg">
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                    <div className={`absolute w-full sm:static sm:w-auto bg-white sm:bg-transparent top-16 right-0 sm:flex flex-col sm:flex-row ${isMenuOpen ? 'flex' : 'hidden'} space-y-2 sm:space-y-0 sm:space-x-4 p-4 sm:p-0`}>
                        <Link to="/testimonials" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-600 text-sm font-medium">Testimonials</Link>
                        <div className="relative" ref={immigrationDropdownRef}>
                            <button
                                onClick={handleImmigrationClick}
                                className="text-gray-800 hover:text-blue-600 text-sm font-medium flex items-center"
                            >
                                Immigration
                                <svg
                                    onClick={toggleImmigrationDropdown}
                                    className="w-4 h-4 ml-1 cursor-pointer"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {isImmigrationDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <Link to="/immigration/naturalization" onClick={() => { setIsMenuOpen(false); setIsImmigrationDropdownOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Naturalization/Citizenship</Link>
                                    <Link to="/immigration/family-based" onClick={() => { setIsMenuOpen(false); setIsImmigrationDropdownOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Family-Based Immigration Petition</Link>
                                    <Link to="/immigration/fiance-visa" onClick={() => { setIsMenuOpen(false); setIsImmigrationDropdownOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fiance Visa</Link>
                                </div>
                            )}
                        </div>
                        <div className="relative" ref={bankruptcyDropdownRef}>
                            <button
                                onClick={handleBankruptcyClick}
                                className="text-gray-800 hover:text-blue-600 text-sm font-medium flex items-center"
                            >
                                Bankruptcy
                                <svg
                                    onClick={toggleBankruptcyDropdown}
                                    className="w-4 h-4 ml-1 cursor-pointer"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {isBankruptcyDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <Link to="/bankruptcy/chapter-7" onClick={() => { setIsMenuOpen(false); setIsBankruptcyDropdownOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Chapter 7 Bankruptcy Petition</Link>
                                    <Link to="/bankruptcy/chapter-13" onClick={() => { setIsMenuOpen(false); setIsBankruptcyDropdownOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Chapter 13 Bankruptcy Petition</Link>
                                    <Link to="/bankruptcy/faq" onClick={() => { setIsMenuOpen(false); setIsBankruptcyDropdownOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ On Bankruptcy</Link>
                                </div>
                            )}
                        </div>
                        <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-600 text-sm font-medium">Our Blog</Link>
                        <Link to="/publications" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-600 text-sm font-medium">Publications</Link>
                        <Link to="/#about-us" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-600 text-sm font-medium">About Us</Link>
                        <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-600 text-sm font-medium">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
