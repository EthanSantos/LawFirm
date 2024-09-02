import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const navbarRef = useRef(null);
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to handle mobile menu toggle

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

        handleHashChange(); // Handle hash on initial load
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [location.hash]);

    return (
        <div className="bg-white fixed w-full z-50 top-0" ref={navbarRef}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-lg text-blue-600 font-bold mb-2">
                        {/* Link wrapping the office name for home navigation */}
                        <Link to="/#home" className="hover:text-blue-700">
                            LAW OFFICES OF GWENDOLYN M. SANTOS
                        </Link>
                    </div>
                    <div className="sm:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 text-lg">
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                    <div className={`absolute w-full sm:static sm:w-auto bg-white sm:bg-transparent top-16 right-0 sm:flex flex-col sm:flex-row ${isMenuOpen ? 'flex' : 'hidden'} space-y-2 sm:space-y-0 sm:space-x-4 p-4 sm:p-0`}>
                        {/* Readded Home link */}
                        <Link to="/#home" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-600 text-sm font-medium">Home</Link>
                        <Link to="/testimonials" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-600 text-sm font-medium">Testimonials</Link>
                        <Link to="/immigration" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-600 text-sm font-medium">Immigration</Link>
                        <Link to="/bankruptcy" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-blue-600 text-sm font-medium">Bankruptcy</Link>
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
