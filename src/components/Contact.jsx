import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <motion.section
            id="contact"
            className="bg-gray-100 text-gray-900 py-16 px-4 sm:px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
                <motion.div
                    className="w-full md:w-1/2"
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary uppercase">
                        Trust Your Legal Case to Our Experienced Team.
                    </h2>
                    <p className="text-lg font-semibold text-gray-600 mb-8 uppercase">
                        Contact Us for a Consultation.
                    </p>
                    <div className="space-y-8 text-lg">
                        <div className="border-b pb-4">
                            <h3 className="text-sm font-bold text-gray-600">Address</h3>
                            <p className="text-gray-800 hover:text-primary transition duration-200">
                                3450 Wilshire Blvd. Ste 1200-105<br />Los Angeles, CA 90010
                            </p>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="text-sm font-bold text-gray-600">Phone</h3>
                            <p className="text-gray-800 cursor-pointer hover:text-primary transition duration-200">
                                213-284-5984
                            </p>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="text-sm font-bold text-gray-600">Fax</h3>
                            <p className="text-gray-800 hover:text-primary transition duration-200">
                                213- 996-0297
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-600">Office Hours</h3>
                            <p className="text-gray-800">
                                Mondays to Fridays - 9:00 a.m. - 5:00 p.m.<br />
                                Saturdays - by appointment
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2"
                    variants={fadeInUp}
                >
                    <h3 className="text-4xl font-bold text-primary mb-2">Contact Us</h3>
                    <p className="font-semibold text-gray-600 text-normal mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="input input-bordered w-full focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="form-control">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="input input-bordered w-full focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div className="form-control">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                            <textarea
                                placeholder="Enter your message"
                                className="textarea textarea-bordered w-full focus:outline-none focus:border-primary"
                                rows="4"
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="btn btn-primary text-white w-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send message
                        </motion.button>
                    </form>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default Contact;
