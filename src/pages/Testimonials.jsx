// pages/Testimonials.js or pages/Testimonials.tsx
import React from 'react';

const Testimonials = () => {
    return (
        <div className="pt-16 py-12 px-6 bg-gray-100">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Testimonials</h1>
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-lg mb-4">
                            "Gwendolyn M. Santos provided exceptional legal support throughout my immigration process. I highly recommend her services!"
                        </p>
                        <p className="font-semibold">- Client Name</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-lg mb-4">
                            "The Law Offices of Gwendolyn M. Santos were incredibly professional and supportive during my bankruptcy case. I couldn't have asked for a better team."
                        </p>
                        <p className="font-semibold">- Client Name</p>
                    </div>
                    {/* Add more testimonials as needed */}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
