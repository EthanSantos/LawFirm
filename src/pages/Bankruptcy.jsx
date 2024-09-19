import React, { useEffect, useState } from 'react';
import BankruptcyImage from "../assets/BankruptcyImage.png"
import { Helmet } from 'react-helmet';

const Bankruptcy = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 100)
    }, [])

    return (
        <section className={`pt-36 pb-16 bg-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Helmet>
                <title>Bankruptcy Law - Gwendolyn Santos Law Firm</title>
                <meta name="description" content="Confidential and compassionate bankruptcy counseling to regain control of your financial situation." />
                <meta property="og:title" content="Bankruptcy Law - Gwendolyn Santos Law Firm" />
                <meta property="og:description" content="Effective bankruptcy solutions to relieve debt and protect your assets, tailored by Gwendolyn Law Firm." />
            </Helmet>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-primary mb-12">
                    Bankruptcy
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center">
                        <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                            Are you struggling with mounting debts, constant creditor calls, or the threat of foreclosure? Don't let financial stress control your life. At the Law Offices of Gwendolyn M. Santos, we specialize in consumer bankruptcy solutions that can help you regain control and achieve a brighter financial future.
                        </p>
                        <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                            We have successfully represented individual consumers and small enterprises with high-quality representation in Chapter 7 and Chapter 13 bankruptcy petitions. We assist clients overwhelmed with debts, facing foreclosure, garnishment, repossession, and collection cases.
                        </p>
                        <h3 className="text-2xl font-semibold text-primary mb-4">Our Services Include:</h3>
                        <ul className="text-lg text-gray-800 space-y-4">
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                <div>
                                    <span className="font-semibold">Chapter 7 Bankruptcy:</span> Discharge unsecured debts and get a fresh start.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                <div>
                                    <span className="font-semibold">Chapter 13 Bankruptcy:</span> Create a manageable repayment plan to catch up on missed payments and protect your property.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-2xl">•</span>
                                <div>
                                    <span className="font-semibold">Debt Relief Strategies:</span> Explore alternatives to bankruptcy and find the best solution for your financial challenges.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={BankruptcyImage} alt="Bankruptcy" className="rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-500" />
                    </div>
                </div>

                <p className="text-lg text-gray-800 mt-12 text-center leading-relaxed">
                    If you would like more information on Bankruptcy, please contact the Law Offices of Gwendolyn M. Santos. We can answer your questions and ensure you have proper representation on your side. Please call our office at <span className="font-bold">(213) 284-5984</span> or schedule an appointment online.
                </p>
            </div>
        </section>
    )
};

export default Bankruptcy;
