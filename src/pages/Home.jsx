import React from 'react';
import LegalCards from '../components/LegalCards';
import CityBackground from '../assets/CityBackground.png'; 
import GwenProfile from '../assets/GwenProfile.png';
import Calbar from '../assets/Calbar.png';
import SupremeCourt from '../assets/SupremeCourt.png';
import Contact from '../components/Contact'; 
import TestimonialCard from '../components/TestimonialCard'; 
import TestimonialPicture from "../assets/TestimonialPicture.jpg"
import { motion } from 'framer-motion';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    };

    const buttonHover = {
        scale: 1.05,
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    };

    const buttonTap = {
        scale: 0.9,
        rotate: -5,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.2, ease: "easeInOut" }
    };

    const areas = [
        { id: 1, name: 'Immigration', description: 'Assisting families and businesses in navigating the complexities of the immigration system.' },
        { id: 2, name: 'Bankruptcy', description: 'Providing legal advice and representation in bankruptcy cases.' }
    ];

    const testimonials = [
        {
            quote: "Atty. Gwendolyn M. Santos is a very patient and very dedicated Lawyer.She's very knowledgeable and knows how to handle all aspects of her special field. You will feel very safe and secured with her during the course of the interview on your court date. I would definitely recommend Atty. Gwendolyn Santos to anybody in need of her help & services...",
            name: 'Alice Adriano',
            image: 'https://lh3.googleusercontent.com/a-/ALV-UjX7iXBCW1hDc7dJc2prh6RJVFyihmoar7AlUT5_RoWOeM1uPZx3=w120-h120-p-rp-mo-br100',
            title: "Immigration"
        },
        {
            quote: "Atty Gwen has helped me so much! She is very attentive and quickly responds. She is very dedicated to her work and goes above and beyond for her clients. I will definitely recommend her to anyone that needs an attorney!",
            name: 'Camille Mendoza',
            image: 'https://lh3.googleusercontent.com/a-/ALV-UjUKbaW-aP_6xZBeYUemekBrz3V-uCY3xJxqsNaVbu8BXjvZca_XlA=w120-h120-p-rp-mo-br100',
            title: "Immigration"
        },
        {
            quote: 'Thankful for quality of your work and all your help. She puts extra effort for all the things that needs to be done and made sure that she is on top of it. You will never go wrong with how she works thoroughly.  Thank you Atty.',
            name: 'Louisha Willind McNulty',
            image: 'https://lh3.googleusercontent.com/a-/ALV-UjV4Nj1IEColt0b-JoWORexUxPyVanLosjbqkwT6Zp_6Txr3irk=w120-h120-p-rp-mo-br100',
            title: "Immigration"
        },
        {
            quote: 'Attorney Santos is very helpful with everything. She provides detailed instructions. Highly recommended!',
            name: 'Alicia Avenido',
            image: 'https://lh3.googleusercontent.com/a-/ALV-UjWGaZQ6bYmTOYKNNDw_d2MUY4SlYtCcbly3sKIYkQonN209CDIe=w120-h120-p-rp-mo-br100',
        },
        {
            quote: 'Highly recommend to family & friends.',
            name: 'Virginia Marte',
            image: TestimonialPicture
        },
        {
            quote: "I am one of the long-time clients of the Law Office of Gwendolyn Santos. Atty. Santos has assisted me in all of my legal cases - immigration, divorce and even my personal injury case. She is willing to do everything to win and support her clients. For me, she is the beat attorney. Thank you very much!",
            name: "Adonis T. Ciokon",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjUoRa2tYtEslbPanx1HKhi6JuUQI-6lKRI2oiTNOONhLMCZk1D8=w120-h120-p-rp-mo-br100"
        },
    ];

    return (
        <main className="pt-16">
            <header
                id="home"
                className="parallax text-white text-center py-12 px-6 bg-cover bg-center relative flex flex-col justify-between items-center"
                style={{
                    backgroundImage: `url(${CityBackground})`,
                    height: '650px'
                }}
            >
                <div className="flex flex-col items-center mt-4">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        RESPECTED AND EXPERIENCED
                    </motion.h1>

                    <motion.p
                        className="mt-2 max-w-xl mx-auto text-base sm:text-lg drop-shadow"
                        initial="hidden"
                        animate="visible"
                        variants={{ ...fadeInUp, transition: { duration: 1.2, ease: 'easeOut' } }}
                    >
                        IMMIGRATION AND BANKRUPTCY LAWYER IN LOS ANGELES
                    </motion.p>
                </div>

                <motion.div
                    className="mt-auto mb-12 flex justify-center items-center"
                    initial="hidden"
                    animate="visible"
                    variants={{ ...fadeInUp, transition: { duration: 1.4, ease: 'easeOut' } }}
                >
                    <a href="tel:+12132845984" className="inline-block">
                        <motion.button
                            className="bg-white text-primary font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-200 ease-in-out"
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                        >
                            CALL US AT (213) 284-5984
                        </motion.button>
                    </a>
                </motion.div>
            </header>

            <div className="bg-gradient-to-b from-white to-gray-100 py-12 px-6">
                <section className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">OUR PRACTICE AREAS</h2>
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

                <motion.section
                    id="about-us"
                    className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden my-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <motion.div
                        className="md:w-1/2 bg-primary text-white py-8 px-6 sm:py-12 sm:px-8"
                        variants={fadeInUp}
                    >
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
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 bg-secondary text-white py-8 px-6 flex flex-col items-center justify-center"
                        variants={fadeInUp}
                    >
                        <h3 className="text-2xl sm:text-3xl font-extrabold mb-6">Meet Our Attorney</h3>

                        <motion.img
                            src={GwenProfile}
                            alt="Attorney Gwendolyn M. Santos"
                            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full shadow-lg mb-4 border-4 border-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                        />
                        <h4 className="text-lg sm:text-xl font-bold mt-4">Gwendolyn Malaya-Santos</h4>

                        <div className="flex justify-center mt-6 space-x-4 sm:space-x-8">
                            <motion.img
                                src={Calbar}
                                alt="California Bar Association"
                                className="w-16 h-16 sm:w-24 sm:h-24 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                whileHover={{ scale: 1.1 }}
                            />
                            <motion.img
                                src={SupremeCourt}
                                alt="Supreme Court of the Philippines"
                                className="w-16 h-16 sm:w-24 sm:h-24 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                whileHover={{ scale: 1.1 }}
                            />
                        </div>
                    </motion.div>
                </motion.section>

                <section className="my-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Built by Reputation</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                className="transition-transform"
                            >
                                <TestimonialCard
                                    quote={testimonial.quote}
                                    name={testimonial.name}
                                    image={testimonial.image}
                                    title={testimonial.title}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </section>


                <section id="contact" className="py-12">
                    <Contact />
                </section>
            </div>
        </main>
    );
};

export default Home;
