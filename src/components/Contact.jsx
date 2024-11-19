import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [captchaToken, setCaptchaToken] = useState(null);
    
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Basic client-side validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            setStatus('All fields are required.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('Please enter a valid email.');
            return;
        }
        if (!captchaToken) {
            setStatus('Please complete the CAPTCHA.');
            return;
        }
    
        try {
            const response = await fetch('https://sabi1oaa0h.execute-api.us-west-1.amazonaws.com/dev5/send-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.firstName.replace(/[^\w\s]/g, ''),
                    lastName: formData.lastName.replace(/[^\w\s]/g, ''),
                    email: formData.email,
                    message: formData.message.replace(/[^\w\s.,!?@-]/g, ''),
                    captchaToken: captchaToken  // Include the captcha token
                })
            });
    
            const result = await response.json();
    
            if (response.ok) {
                setStatus('Email sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
                setCaptchaToken(null);  // Reset captcha token
            } else {
                setStatus(`Failed to send email. Please try again.`);
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Error sending email. Please try again later.');
        }
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
                                213-996-0297
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
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    className="input input-bordered w-full focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="form-control">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    className="input input-bordered w-full focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="input input-bordered w-full focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div className="form-control">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                className="textarea textarea-bordered w-full focus:outline-none focus:border-primary"
                                rows="4"
                            ></textarea>
                        </div>
                        <ReCAPTCHA
    sitekey="6LfamGwqAAAAAK7vYbxbSr1KCyg4ETw77DaCMr9T"
    onChange={handleCaptchaChange}
/>

                        <motion.button
                            type="submit"
                            className="btn btn-primary text-white w-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                        {status && <p className="text-primary mt-4">{status}</p>}
                    </form>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default Contact;
