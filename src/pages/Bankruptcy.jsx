import React, { useEffect, useState } from 'react';

const Bankruptcy = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);

    return (
        <section className={`pt-24 pb-16 bg-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
                    Bankruptcy
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Text Section */}
                    <div className="flex flex-col justify-center">
                        <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                            We have successfully represented individual consumers and small enterprises with quality representation in Chapter 7 and Chapter 13 bankruptcy petitions. We assist clients overwhelmed with debts, facing foreclosure, garnishment, repossession, and collection cases.
                        </p>

                        <ul className="text-lg text-blue-700 space-y-4">
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Chapter 7 Bankruptcy Petition
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Chapter 13 Bankruptcy Petition
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Cramdown
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Lien-Stripping Motions
                            </li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-center">
                        <img src="https://via.placeholder.com/500" alt="Bankruptcy" className="rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-500" />
                    </div>
                </div>

                <p className="text-lg text-gray-800 mt-12 text-center leading-relaxed">
                    If you would like more information on Bankruptcy, please contact the Law Offices of Gwendolyn M. Santos. We can answer your questions and ensure you have proper representation on your side. Please call our office at <span className="font-bold">(213) 284-5984</span> or schedule an appointment online.
                </p>
            </div>
        </section>
    );
};

export default Bankruptcy;