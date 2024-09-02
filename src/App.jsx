// App.js or App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials'; // Import your Testimonials page
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/testimonials" element={<Testimonials />} /> {/* Route for Testimonials */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
