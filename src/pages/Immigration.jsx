import React, { useEffect, useState } from 'react';

const ImmigrationInfo = () => {
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
                    Immigration
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Text Section */}
                    <div className="flex flex-col justify-center">
                        <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                            We handle all aspects of U.S. immigration practice including non-immigrant visa, family-based immigration, business immigration, and naturalization and citizenship, among others.
                        </p>
                        <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                            We have successfully counseled clients on immigration matters before administrative agencies including the US Department of Justice (EOIR), US Board of Immigration Appeals, US Department of Homeland Security, and United States Citizenship and Immigration Services (USCIS).
                        </p>

                        <ul className="text-lg text-blue-700 space-y-4">
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Family Immigration
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Business Immigration
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                U.S. Citizenship and Naturalization
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Visas and Work Permits
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Fiance(e) Visa
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Criminal Immigration
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Violence Against Women Act (VAWA)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Waivers, including:
                                <ul className="ml-6 mt-2 space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-xl">◦</span>
                                        J-1 Waivers
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-xl">◦</span>
                                        Stateside or Provisional Waivers
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-xl">◦</span>
                                        Hardship Waivers
                                    </li>
                                </ul>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Filipino World War II Veterans Parole Program
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                Deferred Action for Childhood Arrivals (DACA)
                            </li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-center">
                        <img src="https://via.placeholder.com/500" alt="Immigration" className="rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-500" />
                    </div>
                </div>

                <p className="text-lg text-gray-800 mt-12 text-center leading-relaxed">
                    If you would like more information on Immigration, please contact the Law Offices of Gwendolyn M. Santos. We can answer your questions and ensure you have proper representation on your side. Please call our office at <span className="font-bold">(213) 284-5984</span> or schedule an appointment online.
                </p>
            </div>
        </section>
    );
};

export default ImmigrationInfo;
