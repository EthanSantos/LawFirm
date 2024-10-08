import Home from "../pages/Home";
import Testimonials from "../pages/Testimonials";
import Immigration from "../pages/Immigration";
import Bankruptcy from "../pages/Bankruptcy";
import Blog from "../pages/Blog";

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
import FraudWaiverPage from "../pages/ImmigrationSection/FraudWaiver";
import J1VisaWaiversPage from "../pages/ImmigrationSection/J1Waivers";
import ProvisionalWaiverPage from "../pages/ImmigrationSection/ProvisionalWaiver";
import HumanitarianReinstatementPage from "../pages/ImmigrationSection/Humanitarian";
import DACAInformationPage from "../pages/ImmigrationSection/Daca";
import VeteransParole from "../pages/ImmigrationSection/VeteransParole"
import ImmigrationFAQ from "../pages/ImmigrationSection/ImmigrationFAQ";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/immigration", element: <Immigration /> },
    { path: "/bankruptcy", element: <Bankruptcy /> },
    { path: "/blog", element: <Blog /> },
    
    { path: "/bankruptcy/chapter-7", element: <Chapter7Bankruptcy /> },
    { path: "/bankruptcy/chapter-13", element: <Chapter13Bankruptcy /> },
    { path: "/bankruptcy/faq", element: <BankruptcyFAQ /> },

    { path: "/immigration/naturalization", element: <CitizenshipPage /> },
    { path: "/immigration/family-based", element: <FamilyBasedImmigrationPetition /> },
    { path: "/immigration/fiance-visa", element: <FianceVisa /> },
    { path: "/immigration/o-visa", element: <O1VisaPage /> },
    { path: "/immigration/waivers-for-crimes", element: <CriminalWaiverPage /> },
    { path: "/immigration/waiver-for-immigration-fraud", element: <FraudWaiverPage /> },
    { path: "/immigration/j1-waivers", element: <J1VisaWaiversPage /> },
    { path: "/immigration/provisional-waivers", element: <ProvisionalWaiverPage /> },
    { path: "/immigration/humanitarian-reinstatement", element: <HumanitarianReinstatementPage /> },
    { path: "/immigration/daca", element: <DACAInformationPage /> },
    { path: "/immigration/filipino-veterans-parole", element: <VeteransParole /> },
    { path: "/immigration/faq", element: <ImmigrationFAQ /> },
  ];
  
  export default routes;
  