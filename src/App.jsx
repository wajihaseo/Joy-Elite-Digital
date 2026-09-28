import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F9] text-[#1A1218]">
      {/* Fixed Luxury Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* About Section */}
        <About />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section (Cleanly omitted if no real reviews provided) */}
        <Testimonials />

        {/* Contact & Inquiries Section */}
        <Contact preselectedService={selectedService} />

        {/* FAQ Section */}
        <Faq />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />
    </div>
  );
}
