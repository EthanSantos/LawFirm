import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/GMSLogo.png';

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
            setIsMenuOpen(false);
        }
    };

    const handleBankruptcyClick = (e) => {
        if (e.target === e.currentTarget) {
            navigate('/bankruptcy');
            setIsBankruptcyDropdownOpen(false);
            setIsMenuOpen(false);
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu after clicking a link
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="bg-white fixed w-full z-50 top-0 border-b border-gray-200" ref={navbarRef}>
            <div className="px-6">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-left">
                        <Link to="/#home" onClick={handleMenuClose} className="flex items-center">
                            <img src={logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 mr-4" />
                            <span className="hidden md:flex text-xl sm:text-2xl text-primary font-bold hover:text-secondary">
                                LAW OFFICES OF GWENDOLYN M. SANTOS
                            </span>
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-primary rounded"
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Menu for Mobile and Desktop */}
                    <div className={`${isMenuOpen ? "flex" : "hidden"
                        } sm:flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 sm:p-0 absolute sm:relative top-full sm:top-auto left-0 sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent`}>

                        {/* Immigration Dropdown */}
                        <div className="relative" ref={immigrationDropdownRef}>
                            <button
                                onClick={handleImmigrationClick}
                                className="text-gray-800 hover:text-primary text-sm font-medium flex items-center"
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

                            <AnimatePresence>
                                {isImmigrationDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                                    >
                                        <Link to="/immigration/naturalization" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Naturalization/Citizenship
                                        </Link>
                                        <Link to="/immigration/family-based" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Family-Based Immigration Petition
                                        </Link>
                                        <Link to="/immigration/fiance-visa" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Fiance Visa
                                        </Link>
                                        <Link to="/immigration/o-visa" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            O Visa
                                        </Link>
                                        <Link to="/immigration/waivers-for-crimes" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Waivers for Crimes
                                        </Link>
                                        <Link to="/immigration/waiver-for-immigration-fraud" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Waiver for Immigration Fraud and Misrepresentation
                                        </Link>
                                        <Link to="/immigration/j1-waivers" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            J-1 Waivers
                                        </Link>
                                        <Link to="/immigration/provisional-waivers" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Provisional Unlawful Presence Waivers
                                        </Link>
                                        <Link to="/immigration/humanitarian-reinstatement" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Humanitarian Reinstatement
                                        </Link>
                                        <Link to="/immigration/daca" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            DACA
                                        </Link>
                                        <Link to="/immigration/filipino-veterans-parole" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Filipino WWII Veterans Parole
                                        </Link>
                                        <Link to="/immigration/faq" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            FAQ on Immigration
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>

                        {/* Bankruptcy Dropdown */}
                        <div className="relative" ref={bankruptcyDropdownRef}>
                            <button
                                onClick={handleBankruptcyClick}
                                className="text-gray-800 hover:text-primary text-sm font-medium flex items-center"
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
                            <AnimatePresence>
                                {isBankruptcyDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                                    >
                                        <Link to="/bankruptcy/chapter-7" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Chapter 7 Bankruptcy Petition
                                        </Link>
                                        <Link to="/bankruptcy/chapter-13" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Chapter 13 Bankruptcy Petition
                                        </Link>
                                        <Link to="/bankruptcy/faq" onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            FAQ On Bankruptcy
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/testimonials" onClick={handleMenuClose} className="text-gray-800 hover:text-primary text-sm font-medium">Testimonials</Link>

                        <a
                            href="https://asianjournal.com/author/attygwen/"
                            onClick={handleMenuClose}
                            className="text-gray-800 hover:text-primary text-sm font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Publications
                        </a>
                        <Link to="/blog" onClick={handleMenuClose} className="text-gray-800 hover:text-primary text-sm font-medium">Blog</Link>
                        <Link to="/#about-us" onClick={handleMenuClose} className="text-gray-800 hover:text-primary text-sm font-medium">About</Link>
                        <Link to="/#contact" onClick={handleMenuClose} className="text-gray-800 hover:text-primary text-sm font-medium">Contact</Link>
                        <a
                            href="tel:+12132845984"
                            onClick={handleMenuClose}
                            className="bg-primary hover:bg-secondary text-white text-center text-sm font-medium rounded-xl px-6 py-3 transition duration-300 ease-in-out inline-flex items-center justify-center"
                            rel="noopener noreferrer"
                        >
                            Book a Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
