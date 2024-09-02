import React from 'react';

const TestimonialCard = ({ quote, name, image }) => {
    return (
        <div className="bg-gradient-to-r from-white via-gray-50 to-white p-8 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl relative">
            <div className="flex flex-col items-center">
                {image && (
                    <img 
                        src={image} 
                        alt={`Profile picture of ${name}`} 
                        className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-gradient-to-r from-blue-400 to-teal-400 shadow-lg transform hover:scale-105 transition duration-300 -mt-12"
                    />
                )}
                <p className="text-gray-700 text-lg mt-6 sm:text-xl font-light leading-relaxed text-center">
                    "{quote}"
                </p>
                <p className="font-semibold text-gray-800 mt-4 text-center">
                    - {name}
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;
