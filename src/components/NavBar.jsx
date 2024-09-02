import React, { useEffect } from 'react';

const NavBar = () => {
    useEffect(() => {
        const handleLinkClick = (e) => {
            if (e.target.hash) {
                e.preventDefault();
                const targetElement = document.querySelector(e.target.hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('.bg-white').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => link.addEventListener('click', handleLinkClick));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleLinkClick));
        };
    }, []);

    return (
        <div className="bg-white fixed w-full z-50 top-0">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center py-4">
                    <div className="text-lg text-blue-600 font-bold mb-2">
                        LAW OFFICES OF GWENDOLYN M. SANTOS
                    </div>
                    <div className="flex space-x-4">
                        <a href="#top" className="text-gray-800 hover:text-blue-600 text-sm font-medium">Home</a>
                        <a href="#immigration" className="text-gray-800 hover:text-blue-600 text-sm font-medium">Immigration</a>
                        <a href="#bankruptcy" className="text-gray-800 hover:text-blue-600 text-sm font-medium">Bankruptcy</a>
                        <a href="#blog" className="text-gray-800 hover:text-blue-600 text-sm font-medium">Our Blog</a>
                        <a href="#testimonials" className="text-gray-800 hover:text-blue-600 text-sm font-medium">Testimonials</a>
                        <a href="#publications" className="text-gray-800 hover:text-blue-600 text-sm font-medium">Publications</a>
                        <a href="#about-us" className="text-gray-800 hover:text-blue-600 text-sm font-medium">About Us</a>
                        <a href="#contact" className="text-gray-800 hover:text-blue-600 text-sm font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
