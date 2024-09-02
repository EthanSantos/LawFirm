import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials'; // Import your Testimonials page
import Immigration from './pages/Immigration';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Bankruptcy from './pages/Bankruptcy';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen"> {/* Ensures the flex container takes at least the height of the viewport */}
                <NavBar />
                <div className="flex-grow"> {/* Makes this div grow to take available space pushing the footer down */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/immigration" element={<Immigration />} />
                        <Route path="/bankruptcy" element={<Bankruptcy />} />
                    
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
