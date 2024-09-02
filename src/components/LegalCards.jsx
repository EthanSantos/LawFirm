import React from 'react';

const LegalCards = ({ number, area, description }) => {
    return (
        <div className="m-4 p-10 w-64 h-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 ease-in-out cursor-pointer border border-transparent hover:border-blue-500">
            <div className="text-center text-4xl text-black font-extrabold mb-4">{number}</div>
            <h3 className="font-semibold text-xl text-black text-center mb-4">{area}</h3>
            <p className="text-sm text-gray-600 text-center">{description}</p>
        </div>
    );
}

export default LegalCards;
