import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#020617] text-white py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column: Branding */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white">
            AI-VERSE 4.0
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Organized by the Department of Computer Science and Engineering (AI & ML), 
            Vaagdevi College of Engineering (Autonomous). The next frontier in AI innovation 
            and digital transformation.
          </p>
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="#" className="hover:text-orange-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><FaTwitter /></a>
          </div>
        </div>

        {/* Middle Column: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm">Contact Info</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>Warangal, Telangana</span>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <FaEnvelope className="text-orange-500" />
              <a href="mailto:info@vaagdevi.edu.in">info@vaagdevi.edu.in</a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors">
              <FaGlobe className="text-orange-500" />
              <a href="https://www.vaagdevi.edu.in" target="_blank" rel="noreferrer">www.vaagdevi.edu.in</a>
            </li>
          </ul>
        </div>

        {/* Right Column: Quick Links */}
        <div className="space-y-6">
          <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm">Quick Links</h3>
          <ul className="grid grid-cols-1 gap-3 text-gray-400 text-sm">
            <li><button onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors">Event Mission</button></li>
            <li><button className="hover:text-white transition-colors">Resource Persons</button></li>
            <li><button className="hover:text-white transition-colors">Gallery</button></li>
            <li><button className="hover:text-white transition-colors">Institution Portal</button></li>
          </ul>
        </div>

      </div>
      
      {/* Bottom Navigation - Home Button Only */}
      <div className="mt-16 pt-8 border-t border-white/5">
        <div className="flex justify-center">
          <button 
            onClick={() => navigate('/')} 
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all text-sm font-bold tracking-widest uppercase text-white"
          >
            ← Home
          </button>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 pt-4 text-center text-gray-600 text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} Vaagdevi College of Engineering. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
