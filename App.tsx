
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import WhyElite from './components/WhyElite';
import Coaches from './components/Coaches';
import Testimonials from './components/Testimonials';
import StartTraining from './components/StartTraining';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-body text-white/90">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <WhyElite />
        <Coaches />
        <Testimonials />
        <StartTraining />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default App;
