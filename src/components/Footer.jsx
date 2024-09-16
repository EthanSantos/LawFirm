import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-6 text-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-4">
                    <p className="bg-secondary text-white inline-block px-4 py-2 rounded-full shadow-lg text-sm font-bold mb-2">
                        Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="bg-secondary text-white inline-block px-4 py-2 rounded-full shadow-lg text-sm font-bold">
                        Saturday: By appointment
                    </p>
                </div>
                <p className="text-sm mb-2">
                    © 2024 GMS LA LEGAL LAW OFFICE OF GWENDOLYN M. SANTOS
                </p>
                <p className="text-sm mb-2">
                    3450 Wilshire Blvd Ste 1200-105, Los Angeles, CA 90010
                </p>
                <p className="text-xs">
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
