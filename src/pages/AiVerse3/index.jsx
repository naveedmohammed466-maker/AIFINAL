import React from 'react';
import './styles/aiv3.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer'; 
import About from './components/EventInfo/About';
// Replace Schedule with EventStream for the archive look
import EventStream from './components/Experience/EventStream'; 
import Personnel from './Personnel';
import { FloatingGradientBg } from '../../components/FloatingGradientBg';

// Public gallery images for scrolling marquee
import img1 from './public/img1.jpeg';
import img2 from './public/img2.jpeg';
import img3 from './public/img3.jpeg';
import img4 from './public/img4.jpeg';
import img5 from './public/img5.jpeg';
import img6 from './public/img6.jpeg';
import img7 from './public/img7.jpeg';

const galleryImages3 = [img1, img2, img3, img4, img5, img6, img7];

export default function AiVerse3() {
  return (
    <div id="aiv3" className="relative min-h-screen bg-[#0A0B1A]">
      <FloatingGradientBg />
      {/* Navbar stays fixed at the top */}
      <Navbar />
      
      <main className="w-full relative z-10">
        {/* Hero removed as requested */}
        {/* Institutional & Purpose Details */}
        <About />
        
        {/* Sequential event highlights - No more navigating between days */}
        <EventStream />

        <Personnel />

        {/* Scrolling marquee gallery (restored) */}
        <section className="section-container pb-12 overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Event Gallery</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
          </div>

          <div className="relative flex overflow-x-hidden">
            <style>
              {`
                @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .animate-marquee-scroll { display: flex; width: max-content; animation: marquee 35s linear infinite; }
                .gallery-wrapper:hover .animate-marquee-scroll { animation-play-state: paused; }
                .mask-edges { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
              `}
            </style>

            <div className="gallery-wrapper mask-edges max-w-7xl mx-auto px-6 md:px-12">
              <div className="animate-marquee-scroll py-8 flex gap-6">
                {galleryImages3.map((image, i) => (
                  <div key={`a3-1-${i}`} className="w-72 md:w-96 h-64 flex-shrink-0 group overflow-hidden rounded-xl bg-gray-900 border border-white/10">
                    <img src={image} alt={`AIV3 ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer" />
                  </div>
                ))}
                {galleryImages3.map((image, i) => (
                  <div key={`a3-2-${i}`} className="w-72 md:w-96 h-64 flex-shrink-0 group overflow-hidden rounded-xl bg-gray-900 border border-white/10">
                    <img src={image} alt={`AIV3 dup ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}