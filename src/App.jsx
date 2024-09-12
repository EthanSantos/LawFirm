import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import routes from './components/Routes';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <div className="flex-grow">
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
