import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import TestimonialPicture from "../assets/TestimonialPicture.jpg"
import AvvoIcon from "../assets/AvvoIcon.jsx"

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
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
        {
            quote: "She’s very helpful, organize, dedicated to her work, very detailed person. Punctuality and honesty is very important for her career. She’s patient in every way she does.",
            name: "E.C.",
            title: "Bankruptcy",
        },
        {
            quote: "Very reliable and she managed my case with positive results. You can trust Atty. Gwen Santos with your life, and I strongly recommend her good office and services to all my friends. Thank you very much and more power to her!",
            name: "C.E.",
            title: "DACA, Carson, CA",
        },
        {
            quote: "I was very impressed with all the work she did on my case. From start to finish, my case was handled with care and such personal attention. I would like to take this opportunity to thank her for the job well done. The experience was great, and I am more than satisfied with the professional, friendly, and courteous service I received. One of the best Bankruptcy Lawyers. Very highly recommended.",
            name: "J.P.",
            title: "Bankruptcy Petition",
        },
        {
            quote: "I was very pleased with the performance, support, and professionalism throughout my daughter's case. She’s very quick to respond and available even after office hours. She explained well and gave an idea of the whole process and made me comfortable. I was kept informed on the progress until the approval of the case. It was definitely a great experience, and I will highly recommend her services to my family and friends.",
            name: "J.V.",
            title: "DACA, U-Visa",
        },
        {
            quote: "It's not just good service and trust. This firm works by heart with clients.",
            name: "C.A.",
            title: "K-1 Petition, La Puente, CA",
        },
        {
            quote: "I highly recommend Atty. Santos to all my friends and family. She did a great job and was always there when you need her.",
            name: "J.D.B.",
            title: "Divorce Petition, Sta. Ana, CA",
        },
        {
            quote: "The best Law Office ever! Ms. Gwen was such a good and nice person to us. She made us feel comfortable and well-entertained in regards to asking questions about my mother's case/petition. She's such the best Attorney ever! I would highly recommend her to those who've been seeking help in any type of case. Thank you, Ms. Gwen! Until next time!",
            name: "M.N.",
            title: "Spousal Petition, Manila, Philippines",
        },
        {
            quote: "Atty Gwen is such a nice person, she helped me a lot with my papers. I highly recommend her to my friends and relatives.",
            name: "G.B.S.",
            title: "Waiver, Conditional Permanent Resident, Stanton, CA",
        },
        {
            quote: "I would highly recommend the Law office of Attorney Gwendolyn Santos. She is very good at assisting clients and very much efficient in processing and assisting clients regarding their cases. You did help me and my family, and I highly recommend your services to friends and families in need of your service. Thank you so much, Attorneys Santos! May you and your family have the blessings of this Holiday Season!!!",
            name: "A.Ad.",
            title: "Chapter 7 Bankruptcy, West Covina, CA",
        },
        {
            quote: "I highly recommend Atty. Gwen! She was able to help me and my brother process our F11 Visa to the US efficiently and stress-free. Thank you very much for patiently assisting our mom in going through the tedious process of completing the requirements, answering calls/emails, and providing tips on what to do from filing the documents up to the interview date. Definitely recommending Atty. Gwen to friends or anyone in need of immigrant legal services.",
            name: "M.M.",
            title: "Los Angeles, CA Family-based petition",
        },
        {
            quote: "Our financial problem came unexpectedly due to decreased working hours at work. We had consulted a few other lawyers before we chose Atty. Gwen to assist us in filing for bankruptcy. Atty. Gwen accommodated us in her office on a weekend, listened to our concerns, and developed a plan. She was always available and communicated mostly by mail and texts. She constantly updated us with the progress of our case. We are happy that our bankruptcy petition had been filed and completed. We are truly grateful to have chosen Atty. Gwen. We commend her and her office staff for their hard work and dedication.",
            name: "K.P.",
            title: "CA, Chapter 13 Bankruptcy",
        },
        {
            quote: "I had a very pleasant experience with this firm. Gwendolyn was very helpful and understanding of what I wanted. Nothing was too much trouble. She was always available to speak to. I am satisfied with the quality of service Gwendolyn has given me. I would highly recommend her above others in her field.",
            name: "M.A.",
            title: "Garden Grove, CA",
        },
        {
            quote: "I was impressed and assured by the level of competence of Attorney Gwen’s firm. I felt as if I was doing business with a longtime family friend. I felt I had the ability to discuss my case and contact Attorney Gwen at my convenience. I was treated with concern and respect the whole way through my H1B petition. I was kept informed of my options and proceedings throughout my case. I knew my case was a long shot, but Atty. Gwen pulled it through, which is short of saying that it’s a miracle. I’m sure to avail only the services of Atty. Gwen, and I’d not think twice of recommending it to my friends.",
            name: "J.A.T.",
            title: "Cerritos, CA, H-1 Visa Applicant",
        },
        {
            quote: "I sought the help of Atty. Gwendolyn Santos regarding my immigration issue in March 2013. She provided me a list of the documents that I needed to submit, and from there she prepared all the paperwork for me to sign, submitted the application in April, and I received my Green Card in more or less 6 months. Attorney Santos promptly responds to all my queries and charges her clients at an affordable price. I strongly recommend this law office for your immigration issues.",
            name: "L.M.",
            title: "Northridge, CA, Immigrant Visa Applicant",
        },
        {
            quote: "I petitioned my Filipina fiance from the Bahamas. Atty. Santos was very helpful in answering all my questions. She explained to me how the K1 visa application would go. She was very thorough in checking the documents before they were sent. I would recommend Atty. Santos to anyone who needs help with their immigration concerns.",
            name: "M.B.",
            title: "Lancaster, CA, K-1 Visa Applicant",
        },
    ];

    return (
        <div className="pt-36 bg-gray-100 py-16">
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
                                        {testimonial.title && (
                                            <p className="text-gray-500 text-sm text-center mt-2">
                                                {testimonial.title}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Read More Reviews</h3>

                    <div className="flex justify-center mb-4">
                        <span className="text-yellow-400 text-2xl">★</span>
                        <span className="text-yellow-400 text-2xl">★</span>
                        <span className="text-yellow-400 text-2xl">★</span>
                        <span className="text-yellow-400 text-2xl">★</span>
                        <span className="text-yellow-400 text-2xl">★</span>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://www.avvo.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-primary flex items-center space-x-2"
                        >
                            <AvvoIcon className="w-6 h-6 text-primary" /> {/* This will inherit the primary color */}
                            <span>AVVO</span>
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-primary flex items-center space-x-2"
                        >
                            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                            <span>Facebook</span>
                        </a>
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-primary flex items-center space-x-2"
                        >
                            <FontAwesomeIcon icon={faGoogle} className="w-6 h-6" />
                            <span>Google</span>
                        </a>
                    </div>



                </div>


            </motion.div>
        </div>
    );
};

export default Testimonials;
