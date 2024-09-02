import React from 'react';
import LegalCards from '../components/LegalCards';
import CityBackground from '../assets/CityBackground.png'; // Verify the correct path
import GwenProfile from '../assets/GwenProfile.png';
import Calbar from '../assets/Calbar.png';
import SupremeCourt from '../assets/SupremeCourt.png';
import Contact from '../components/Contact'; // Import the Contact component

const Home = () => {
    const areas = [
        { id: 1, name: 'Immigration', description: 'Assisting families and businesses in navigating the complexities of the immigration system.' },
        { id: 2, name: 'Bankruptcy', description: 'Providing legal advice and representation in bankruptcy cases.' }
    ];

    return (
        <main className="pt-16">
            <header
                id="home"
                className="text-white text-center py-12 px-6 bg-cover bg-center relative parallax"
                style={{ backgroundImage: `url(${CityBackground})`, height: '650px' }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
                    RESPECTED AND EXPERIENCED
                </h1>
                <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg drop-shadow">
                    IMMIGRATION AND BANKRUPTCY LAWYER IN LOS ANGELES
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-12">
                    <a href="tel:+12132845984" className="inline-block">
                        <button className="bg-white text-blue-600 font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg transition duration-200 ease-in-out">
                            CALL US AT (213) 284-5984
                        </button>
                    </a>
                </div>
            </header>

            <div className="bg-gradient-to-b from-white to-gray-100 py-12 px-6">
                <section className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8">OUR PRACTICE AREAS</h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-6 sm:gap-8">
                        {areas.map((area) => (
                            <LegalCards
                                key={area.id}
                                number={area.id}
                                area={area.name}
                                description={area.description}
                            />
                        ))}
                    </div>
                </section>

                <section id="about-us" className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
                    <div className="md:w-1/2 bg-blue-900 text-white py-8 px-6 sm:py-12 sm:px-8">
                        <div className="text-left p-4 rounded-lg">
                            <h3 className="text-2xl sm:text-3xl font-extrabold mb-6">Our Firm</h3>
                            <p className="text-base sm:text-lg mb-4">
                                The Law Office of Gwendolyn M. Santos is a law firm located at the Mid-Wilshire District in Los Angeles, CA. Our practice areas are Immigration and Naturalization, Bankruptcy, and Family Law.
                            </p>
                            <p className="text-base sm:text-lg mb-4">
                                Atty. Gwendolyn Malaya-Santos is an active member of the State Bar of California since 2007. She is also licensed as an attorney in the Philippines. She is admitted to practice before the California Court of Appeals and the U.S. Central District Court.
                            </p>
                            <p className="text-base sm:text-lg mb-4">
                                Atty. Malaya-Santos has considerable experience and knowledge in handling immigration applications and cases before the United States Citizenship and Immigration Services (USCIS), U.S. Department of Justice's Executive Office for Immigration Review (EOIR), and US Board of Immigration Appeals. Having been an immigrant herself, Atty. Malaya-Santos understands the unique and difficult challenges one faces navigating the complicated immigration process.
                            </p>
                            <p className="text-base sm:text-lg mb-4">
                                Atty. Malaya-Santos is very familiar with the bankruptcy process, having handled numerous bankruptcy cases before the US Bankruptcy Courts, and Chapter 7 and Chapter 13 Trustees. She is ready to assist consumers through their financial difficulties.
                            </p>
                            <p className="text-base sm:text-lg">
                                Atty. Malaya-Santos has also joined the American Bar Association, the American Immigration Lawyers Association (AILA), Los Angeles Bar Association, and the Beverly Hills Bar Association.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-teal-700 text-white py-8 px-6 flex flex-col items-center justify-center">
                        <h3 className="text-2xl sm:text-3xl font-extrabold mb-6">Meet Our Attorney</h3>
                        <img src={GwenProfile} alt="Attorney Gwendolyn M. Santos" className="w-40 h-40 sm:w-56 sm:h-56 rounded-full shadow-lg mb-4 border-4 border-white hover:shadow-xl transition-shadow duration-300" />
                        <h4 className="text-lg sm:text-xl font-bold mt-4">Gwendolyn Malaya-Santos</h4>
                        <div className="flex justify-center mt-6 space-x-4 sm:space-x-8">
                            <img src={Calbar} alt="California Bar Association" className="w-16 h-16 sm:w-24 sm:h-24" />
                            <img src={SupremeCourt} alt="Supreme Court of the Philippines" className="w-16 h-16 sm:w-24 sm:h-24" />
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-12">
                    <Contact />
                </section>
            </div>
        </main>
    );
};

export default Home;
