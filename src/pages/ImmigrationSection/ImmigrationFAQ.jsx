import React, { useState } from 'react';

const ImmigrationFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I petition my relative to the US?",
            answer: `A US citizen or permanent resident, as applicable, can file a petition for an alien relative on behalf of their relative. A U.S. citizen may petition for immediate relatives, such as a spouse or children under 18 years old, for immigration to the US. There are no numerical limitations on these relatives. Some relatives of US citizens - adult children, brothers, and sisters - and those of permanent residents - spouses and children, and unmarried adult children - can qualify for immigrant status to the US. However, there is an annual quota for these visas.`
        },
        {
            question: "Do I need an attorney to petition my spouse?",
            answer: `While hiring a lawyer is not legally required for an immigration application, hiring a lawyer is highly suggested. A lawyer can provide legal guidance and support, such as evidence gathering and presentation, increasing your chances of getting your visa application approved.`
        },
        {
            question: "I have a criminal charge or conviction. How would that affect my immigration status?",
            answer: `An application for an immigrant visa and certain non-immigrant visas may be denied due to certain criminal grounds of inadmissibility. In some cases, the applicant can request a waiver, allowing a visa to be issued despite that ground. Criminal charges or convictions can have serious consequences on your status. It is best to consult with an immigration attorney to discuss your individual case.`
        },
        {
            question: "How do I bring my fiancé to the US?",
            answer: `A U.S. citizen can bring their fiancé(e) to the United States through a K-1 nonimmigrant visa, commonly referred to as the fiancé(e) visa. The U.S. citizen and their fiancé(e) must have the intention to marry each other within ninety (90) days of the fiancé(e) entering the U.S. They must have met in person within the last two (2) years prior to filing the petition, subject to certain exceptions.`
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-16 pt-32">
            <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions on Immigration</h1>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                className="w-full text-left py-4 focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
                                    <span className={`text-gray-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        &#x25BC;
                                    </span>
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-gray-700 mt-2 pb-4">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <p className="text-gray-700 font-semibold">
                        If you would like more information on Bankruptcy, please contact the Law Offices of Gwendolyn M. Santos. We can answer your questions and ensure you have proper representation on your side. Please call our office at (213) 284-5984.
                    </p>
                </div>
                <div className="text-gray-500 text-sm mt-6 text-center">
                    <p>
                        Information contained in this article does not, nor is it intended to, constitute legal advice for any specific situation and does not create a lawyer-client relationship. It likewise does not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImmigrationFAQ;
