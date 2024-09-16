import React, { useState } from 'react';

const BankruptcyFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What are the types of bankruptcy?",
            answer: `There are generally two (2) kinds of bankruptcy: liquidation and reorganization. In a Chapter 7 liquidation bankruptcy, you may be able to request discharge (or cancel/wipe out) many types of debts such as credit card debts. Most debtors can discharge all or most of their debts under a Chapter 7 liquidation bankruptcy. On the other hand, under a Chapter 13 reorganization bankruptcy, part of your income will be used to pay your debt over a period of time, either in 3 or 5 years. This option allows you to reorganize your debts to give you time to pay.`
        },
        {
            question: "What debts are discharged under bankruptcy?",
            answer: `Certain types of debts are discharged under Chapter 7 and Chapter 13 bankruptcy such as medical bills, credit card debts, most money judgments, personal loans and promissory notes. In Chapter 7, the trustee will sell or divide your non-exempt assets, if any, among your creditors and any debt that remains unpaid is discharged or cancelled. In Chapter 13 bankruptcy, you will be required to submit a repayment plan which will provide payment for part of your debts. If you are able to complete your plan, the unpaid debts will be discharged.`
        },
        {
            question: "Will I lose all of my assets if I file bankruptcy?",
            answer: `Under a Chapter 7 liquidation bankruptcy, the debtor’s properties may be sold by the trustee to pay off their debts unless they are exempt properties. [Exempt property is that owned by the debtor which is exempt from execution of the judgment creditors.] However, most Chapter 7 filings are considered “no asset” cases, which means that the debtor does not have non-exempt properties that the trustee can sell. Therefore, most debtors get to keep whatever they have prior to filing bankruptcy.`
        },
        {
            question: "Can bankruptcy stop bill collectors from calling?",
            answer: `Yes, once a bankruptcy is filed, creditor collection actions such as foreclosures, wage garnishments, and bank account levies must stop. This is called an automatic stay. Any action to collect debt, including phone calls, must also stop.`
        },
        {
            question: "Can I file bankruptcy alone without my spouse?",
            answer: `Yes. Generally, spouses file a joint bankruptcy petition but one spouse can file a bankruptcy petition alone should they deem it fit.`
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-16 pt-32">
            <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions on Bankruptcy</h1>
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

                        Information contained in this article does not, nor is it intended to, constitutes legal advice for any specific situation and does not create a lawyer-client relationship. It likewise does not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BankruptcyFAQ;
