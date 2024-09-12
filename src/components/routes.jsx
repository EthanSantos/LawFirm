// Routes.js

import Home from "../pages/Home";
import Testimonials from "../pages/Testimonials";
import Immigration from "../pages/Immigration";
import Bankruptcy from "../pages/Bankruptcy";

//Bankruptcy section
import Chapter7Bankruptcy from "../pages/BankruptcySection/Chapter7Bankruptcy";
import Chapter13Bankruptcy from "../pages/BankruptcySection/Chapter13Bankruptcy";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/immigration", element: <Immigration /> },
    { path: "/bankruptcy", element: <Bankruptcy /> },
    { path: "/bankruptcy/chapter-7", element: <Chapter7Bankruptcy /> },
    { path: "/bankruptcy/chapter-13", element: <Chapter13Bankruptcy /> },
  ];
  
  export default routes;
  