import React from 'react';

const Testimonials = () => {
    
    return (
        <div className="pt-[100px] bg-gray-100 py-16"> 
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-blue-600 mb-10 text-center">
                    What Our Clients Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 text-lg mb-4">
                            "Gwendolyn M. Santos provided exceptional legal support throughout my immigration process. I highly recommend her services!"
                        </p>
                        <p className="font-semibold text-gray-800">- Client Name</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 text-lg mb-4">
                            "The Law Offices of Gwendolyn M. Santos were incredibly professional and supportive during my bankruptcy case. I couldn't have asked for a better team."
                        </p>
                        <p className="font-semibold text-gray-800">- Client Name</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 text-lg mb-4">
                            "I was extremely satisfied with the level of service and attention to detail provided by the team at the Law Offices of Gwendolyn M. Santos. They truly went above and beyond."
                        </p>
                        <p className="font-semibold text-gray-800">- Client Name</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
