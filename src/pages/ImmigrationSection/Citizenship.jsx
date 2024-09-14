import React from 'react';

const CitizenshipPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 pt-28">
            <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Applying for U.S. Citizenship</h1>
                <div className="text-gray-700 space-y-4">
                    <p>
                        Naturalization is the process wherein an immigrant (permanent resident) acquires U.S. citizenship after fulfilling the requirements under the Immigration and Nationality Act (INA).
                    </p>
                    <p>
                        As a naturalized citizen, one agrees to accept all the responsibilities of being a U.S. citizen, and support the United States, its Constitution, and its laws. He is also accorded all the rights and privileges of a U.S. citizen.
                    </p>
                    <p>The following are the general requirements for U.S. citizenship:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>At least 18 years of age at the time of filing;</li>
                        <li>A permanent resident of the United States for five (5) years;
                            <ul className="list-none ml-4">
                                <li>◦ You only need to be a permanent resident of the United States for three (3) years if currently married to and living with a U.S. citizen; and have been married to and living with that same U.S. citizen for the past 3 years; and the U.S. citizen spouse has been a U.S. citizen for the past 3 years.</li>
                            </ul>
                        </li>
                        <li>Have lived within the state or USCIS district where you claim residence for at least 3 months prior to filing;</li>
                        <li>Have demonstrated physical presence within the United States for a required period of time;</li>
                        <li>Have demonstrated continuous residence for a required period of time;</li>
                        <li>Have demonstrated good moral character;</li>
                        <li>Demonstrate an attachment to the principles and ideals of the U.S. Constitution;</li>
                        <li>Demonstrate a basic knowledge of U.S. history and government, ability to read, write, speak, and understand basic English;</li>
                        <li>Take an Oath of Allegiance to the United States.</li>
                    </ul>
                    <p>
                        Please note that if you may already be a U.S. citizen if your biological or legal adoptive mother or father is a U.S. citizen by birth, or was naturalized before you reached your 18th birthday.
                    </p>
                    <p>
                        If you would like more information on U.S. Citizenship, please contact the Law Offices of Gwendolyn M. Santos. We can answer your questions and ensure you have proper representation on your side. Please call our office at (213) 284-5984.
                    </p>
                </div>
                <div className="text-gray-500 text-sm mt-6">
                    <p>
                        Information contained in this article does not, nor is it intended to, constitute legal advice for any specific situation and does not create a lawyer-client relationship. It likewise does not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CitizenshipPage;
