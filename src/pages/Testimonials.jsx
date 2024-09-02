import React, { useEffect, useState } from 'react';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100); // Delay to ensure animation is visible
    }, []);

    const testimonials = [
        {
            quote: "Gwendolyn M. Santos provided exceptional legal support throughout my immigration process. I highly recommend her services!",
            name: "John Doe",
            image: "https://via.placeholder.com/150"
        },
        {
            quote: "The Law Offices of Gwendolyn M. Santos were incredibly professional and supportive during my bankruptcy case. I couldn't have asked for a better team.",
            name: "Jane Smith",
            image: "https://via.placeholder.com/150"
        },
        {
            quote: "I am one of the long-time clients of the Law Office of Gwendolyn Santos. Atty. Santos has assisted me in all of my legal cases - immigration, divorce, and even my personal injury case. She is willing to do everything to win and support her clients. For me, she is the best attorney. Thank you very much!",
            name: "Adonis T. Ciokon",
            image: "https://via.placeholder.com/150"
        },
        {
            quote: "Gwendolyn M. Santos provided exceptional legal support throughout my immigration process. I highly recommend her services!",
            name: "John Doe",
        },
        {
            quote: "The Law Offices of Gwendolyn M. Santos were incredibly professional and supportive during my bankruptcy case. I couldn't have asked for a better team.",
            name: "Jane Smith",
        },
        {
            quote: "I am one of the long-time clients of the Law Office of Gwendolyn Santos. Atty. Santos has assisted me in all of my legal cases - immigration, divorce, and even my personal injury case. She is willing to do everything to win and support her clients. For me, she is the best attorney. Thank you very much!",
            name: "Adonis T. Ciokon"
        }
    ];

    return (
        <div className="pt-[100px] bg-gray-100 py-16">
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
                <h2 className="text-4xl font-bold text-blue-600 mb-10 text-center">
                    What Our Clients Say
                </h2>

                <div className="flex flex-col items-center justify-center min-h-[50vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                quote={testimonial.quote}
                                name={testimonial.name}
                                image={testimonial.image}
                                className="scale-up"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
