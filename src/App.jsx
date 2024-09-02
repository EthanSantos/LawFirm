import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="pt-16">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
