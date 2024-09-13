import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100); // Delay to ensure animation is visible
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
            },
        },
    };

    const testimonials = [
        {
            quote: 'Gwendolyn M. Santos provided exceptional legal support throughout my immigration process. I highly recommend her services!',
            name: 'John Doe',
            image: 'https://via.placeholder.com/150',
        },
        {
            quote: 'The Law Offices of Gwendolyn M. Santos were incredibly professional and supportive during my bankruptcy case. I couldn’t have asked for a better team.',
            name: 'Jane Smith',
            image: 'https://via.placeholder.com/150',
        },
        {
            quote: 'Atty. Santos has assisted me in all my legal cases - immigration, divorce, and personal injury. She is the best attorney. Thank you very much!',
            name: 'Adonis T. Ciokon',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="pt-[100px] bg-gray-100 py-16">
            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                <h2 className="text-4xl font-bold text-primary mb-10 text-center">
                    What Our Clients Say
                </h2>

                <div className="flex flex-col items-center justify-center min-h-[50vh]">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center"
                        variants={containerVariants}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="cursor-pointer hover-card"
                            >
                                <div className="bg-gradient-to-r from-white via-gray-50 to-white p-8 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:rotate-1 relative">
                                    <div className="flex flex-col items-center">
                                        {testimonial.image && (
                                            <img
                                                src={testimonial.image}
                                                alt={`Profile picture of ${testimonial.name}`}
                                                className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-gradient-to-r from-blue-400 to-teal-400 shadow-lg -mt-12"
                                            />
                                        )}
                                        <p className="text-gray-700 text-lg mt-6 sm:text-xl font-light leading-relaxed text-center">
                                            "{testimonial.quote}"
                                        </p>
                                        <p className="font-semibold text-gray-800 mt-4 text-center">
                                            - {testimonial.name}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Testimonials;
