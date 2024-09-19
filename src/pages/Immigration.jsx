import React, { useEffect, useState } from 'react';
import ImmigrationImage from "../assets/ImmigrationPicture.png"
import { Helmet } from 'react-helmet';

const Immigration = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 100)
    }, [])

    return (
        <section className={`pt-36 pb-16 bg-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Helmet>
                <title>Immigration Law - Gwendolyn Santos Law Firm</title>
                <meta name="description" content="Unlock Your American Dream with an Expert Immigration Attorney. Comprehensive immigration law services to help you navigate complex legal procedures." />
                <meta property="og:title" content="Immigration Law - Gwendolyn Santos Law Firm" />
                <meta property="og:description" content="Expert immigration legal services to help you and your family live and work in the USA." />
            </Helmet>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">
                    Unlock Your American Dream with an Expert Immigration Attorney!
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center">
                        <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                            Are you ready to start a new chapter in the United States, but feeling overwhelmed by the complex immigration process? You don't have to navigate it alone. Our firm is here to guide you every step of the way.
                        </p>
                        <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                            We handle all aspects of U.S. immigration practice including family-based immigration, business immigration, naturalization and citizenship and non-immigrant visa, among others.
                        </p>
                        <h2 className="text-3xl font-bold mb-6 text-primary">Why Choose Us?</h2>
                        <ul className="text-lg text-gray-800 space-y-6">
                            <li>
                                <h3 className="text-xl font-bold text-black mb-2">Expertise You Can Trust</h3>
                                <p>With years of experience and a deep understanding of immigration law, we provide reliable and effective solutions tailored to your unique needs.</p>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold text-black mb-2">Personalized Service</h3>
                                <p>We know that every case is different. We take the time to listen and create a strategy that best fits your situation, whether you're applying for a visa, green card, or citizenship.</p>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold text-black mb-2">Transparent Communication</h3>
                                <p>No more confusion or hidden fees. We keep you informed throughout the process, making sure you understand your options and what to expect.</p>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold text-black mb-2">Proven Track Record</h3>
                                <p>Our successful track record speaks for itself. We've helped countless individuals and families achieve their American dream.</p>
                            </li>
                            <li>
                                <h3 className="text-xl font-bold text-black mb-2">Compassionate Support</h3>
                                <p>We understand that immigration matters can be stressful. Our team is here to offer support and answer your questions with empathy and respect.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={ImmigrationImage} alt="Immigration" className="rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-500" />
                    </div>
                </div>

                <p className="text-xl text-gray-800 mt-12 text-center leading-relaxed">
                    Don't let the complexities of immigration hold you back. Contact us today for a consultation and take the first step towards securing your future in the United States!
                </p>

                <div className="text-center mt-12">
                    <h2 className="text-3xl font-bold mb-6 text-primary">Your Journey to a Brighter Future Starts Here.</h2>
                    <a href="tel:+12132845984" className="inline-block">
                        <button className="bg-primary text-white text-lg font-bold py-3 px-6 rounded-xl hover:bg-secondary transition duration-300">
                            Contact Us Now
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Immigration;
