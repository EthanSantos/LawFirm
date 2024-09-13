// Routes.js

import Home from "../pages/Home";
import Testimonials from "../pages/Testimonials";
import Immigration from "../pages/Immigration";
import Bankruptcy from "../pages/Bankruptcy";

//Bankruptcy section
import Chapter7Bankruptcy from "../pages/BankruptcySection/Chapter7Bankruptcy";
import Chapter13Bankruptcy from "../pages/BankruptcySection/Chapter13Bankruptcy";
import BankruptcyFAQ from "../pages/BankruptcySection/BankruptcyFAQ";

//Immigration section
import CitizenshipPage from "../pages/ImmigrationSection/Citizenship";
import FamilyBasedImmigrationPetition from "../pages/ImmigrationSection/FamilyBasedImmigration";
import FianceVisa from "../pages/ImmigrationSection/FianceVisa";
import O1VisaPage from "../pages/ImmigrationSection/O1Visa";
import CriminalWaiverPage from "../pages/ImmigrationSection/CriminalWaiver";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/immigration", element: <Immigration /> },
    { path: "/bankruptcy", element: <Bankruptcy /> },
    { path: "/bankruptcy/chapter-7", element: <Chapter7Bankruptcy /> },
    { path: "/bankruptcy/chapter-13", element: <Chapter13Bankruptcy /> },
    { path: "/bankruptcy/faq", element: <BankruptcyFAQ /> },
    { path: "/immigration/naturalization", element: <CitizenshipPage /> },
    { path: "/immigration/family-based", element: <FamilyBasedImmigrationPetition /> },
    { path: "/immigration/fiance-visa", element: <FianceVisa /> },
    { path: "/immigration/o-visa", element: <O1VisaPage /> },
    { path: "/immigration/waivers-for-crimes", element: <CriminalWaiverPage /> },
    { path: "/immigration/waiver-for-immigration-fraud", element: <CriminalWaiverPage /> },
    { path: "/immigration/j1-waivers", element: <CriminalWaiverPage /> },
    { path: "/immigration/provisional-waivers", element: <CriminalWaiverPage /> },
    { path: "/immigration/humanitarian-reinstatement", element: <CriminalWaiverPage /> },
    { path: "/immigration/daca", element: <CriminalWaiverPage /> },
    { path: "/immigration/filipino-veterans-parole", element: <CriminalWaiverPage /> },
  ];
  
  export default routes;
  