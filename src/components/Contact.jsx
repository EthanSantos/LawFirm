import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 text-gray-900 py-16 px-4 sm:px-6">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
                {/* Contact Details */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600 uppercase">Trust Your Law Case to Our Experienced Team.</h2>
                    <p className="text-lg font-semibold text-gray-600 mb-8 uppercase">Contact Us for a Consultation.</p>
                    <div className="space-y-8 text-lg">
                        <div className="border-b pb-4">
                            <h3 className="text-sm font-bold text-gray-600">Address</h3>
                            <p className="text-gray-800 hover:text-blue-600 transition duration-200">3450 Wilshire Blvd. Ste 1200<br />Los Angeles, CA 90010</p>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="text-sm font-bold text-gray-600">Phone</h3>
                            <p className="text-gray-800 cursor-pointer hover:text-blue-600 transition duration-200">213-284-5984</p>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="text-sm font-bold text-gray-600">Fax</h3>
                            <p className="text-gray-800 hover:text-blue-600 transition duration-200">213-377-5243</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-600">Office Hours</h3>
                            <p className="text-gray-800">
                                Mondays to Fridays - 9:00 a.m. - 5:00 p.m.<br />
                                Saturdays - by appointment
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6">Contact Us</h3>
                    <form className="space-y-6">
                        <div>
                            <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"/>
                        </div>
                        <div>
                            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"/>
                        </div>
                        <div>
                            <textarea placeholder="Message" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" rows="5"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
