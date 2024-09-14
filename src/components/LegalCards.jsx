import { Link } from 'react-router-dom';

const LegalCards = ({ area, description, link, icon }) => {
    return (
        <div className="flex flex-col justify-between m-4 p-6 w-64 h-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 ease-in-out cursor-pointer border border-transparent hover:border-primary">
            <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="mb-4">
                    {icon}
                </div>

                {/* Area Heading */}
                <h3 className="font-semibold text-xl text-black text-center mb-2">{area}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 text-center mb-2">{description}</p>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center mt-2"> {/* Reduced top margin to move it higher */}
                <Link to={link}>
                    <button className="bg-primary text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-secondary hover:scale-105">
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LegalCards;
