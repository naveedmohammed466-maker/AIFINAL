import React, { useState, useEffect } from 'react';
import { aiverse2Data } from './data/content';
import AboutSection from './components/AboutSection';
import './AiVerse2.css';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Personnel from './Personnel';

// Assets
import posterImg from './assets/poster.jpg';
import img1 from './public/img1.png';
import image2 from './public/image2.png';
import image3 from './public/image3.png';
import image4 from './public/image4.png';
import image5 from './public/image5.png';
import image6 from './public/image6.png';
import image7 from './public/image7.png';

// Gallery Images
const galleryImages = [
  img1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

const AiVerse2 = () => {
  const navigate = useNavigate();
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aiverse2-wrapper">
      {/* --- HERO SECTION --- */}
      <section className="hero text-center pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 font-bold uppercase tracking-[0.2em] mb-4">
            {aiverse2Data.college}
          </p>
          <div className="inline-block px-4 py-1 border border-white/20 rounded-full mb-8">
            <h2 className="text-xs md:text-sm text-gray-300 tracking-wide font-medium">
              {aiverse2Data.department}
            </h2>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black italic mt-2 glow-text tracking-tighter uppercase">
            {aiverse2Data.title}
          </h1>
          
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="bg-orange-600 text-white px-8 py-3 rounded-sm font-black transform -skew-x-12 shadow-lg shadow-orange-600/20">
               <span className="inline-block skew-x-12">{aiverse2Data.dates}</span>
            </div>
            
            <button 
              onClick={() => setShowPoster(true)}
              className="mt-4 text-orange-500 text-xs font-bold underline tracking-widest uppercase cursor-pointer hover:text-orange-400 transition-colors"
            >
              View Official Event Poster
            </button>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <AboutSection />

      {/* --- TRACKS SECTION --- */}
      <section className="section-container">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">Curriculum</h3>
              <h2 className="text-4xl font-bold">Workshop Tracks</h2>
            </div>
            <p className="text-gray-400 max-w-md text-sm italic">
              Focused on the transition from traditional Machine Learning to modern Generative AI architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiverse2Data.tracks.map((track, i) => (
              <div key={i} className="group p-6 bg-white/5 rounded-xl border border-white/5 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-orange-500 font-black text-2xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                  {track}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOUNDATION TEAM --- */}
      <section className="section-container pb-8">
        <Personnel />
      </section>

      {/* --- SCROLLING GALLERY SECTION --- */}
      <section className="section-container pb-12 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Workshop Memories</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>

        <div className="relative flex overflow-x-hidden">
          {/* Custom CSS for the animation integrated into the component */}
          <style>
            {`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee-scroll {
                display: flex;
                width: max-content;
                animation: marquee 35s linear infinite;
              }
              .gallery-wrapper:hover .animate-marquee-scroll {
                animation-play-state: paused;
              }
              .mask-edges {
                mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
              }
            `}
          </style>

          <div className="gallery-wrapper mask-edges max-w-7xl mx-auto px-6 md:px-12">
            <div className="animate-marquee-scroll py-8 flex gap-6">
              {/* First set of images */}
              {galleryImages.map((image, index) => (
                <div key={`set1-${index}`} className="w-72 md:w-96 h-64 flex-shrink-0 group overflow-hidden rounded-xl bg-gray-900 border border-white/10">
                  <img 
                    src={image} 
                    alt={`AI-VERSE 2.0 Session ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless looping */}
              {galleryImages.map((image, index) => (
                <div key={`set2-${index}`} className="w-72 md:w-96 h-64 flex-shrink-0 group overflow-hidden rounded-xl bg-gray-900 border border-white/10">
                  <img 
                    src={image} 
                    alt={`AI-VERSE 2.0 Session Duplicate ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- NAVIGATION FOOTER --- */}
      <section className="section-container pb-24">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center border-t border-white/10 pt-16">
          <button 
            onClick={() => navigate('/')} 
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all text-sm font-bold tracking-widest uppercase text-white"
          >
            ← Home
          </button>
          
          <button 
            onClick={() => navigate('/ai-verse-3')} 
            className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 hover:shadow-[0_0_20px_rgba(245,130,32,0.4)] transition-all text-sm font-bold tracking-widest uppercase text-white"
          >
            Explore AI-VERSE 3.0 →
          </button>
        </div>
      </section>
      
      <Footer />

      {/* --- POSTER LIGHTBOX --- */}
      {showPoster && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setShowPoster(false)}
        >
          <div className="relative max-w-4xl w-full animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white text-3xl hover:text-orange-500 transition-colors"
              onClick={() => setShowPoster(false)}
            >
              &times; Close
            </button>
            <img 
              src={posterImg} 
              alt="AI-VERSE 2.0 Official Poster" 
              className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
              onError={(e) => {
                e.target.src = "https://placehold.co/800x1200/0b1121/white?text=Poster+Image+Not+Found+In+Assets";
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AiVerse2;