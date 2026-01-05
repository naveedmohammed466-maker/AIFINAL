import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Floating Gradient Background Component
const FloatingGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(30px, -30px) rotate(90deg); }
          50% { transform: translate(-20px, 40px) rotate(180deg); }
          75% { transform: translate(40px, 20px) rotate(270deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px) rotate(360deg); }
          25% { transform: translate(-40px, 20px) rotate(270deg); }
          50% { transform: translate(30px, -40px) rotate(180deg); }
          75% { transform: translate(-30px, -20px) rotate(90deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(20px, 40px) rotate(120deg); }
          66% { transform: translate(-30px, -20px) rotate(240deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { filter: blur(60px); opacity: 0.5; }
          50% { filter: blur(80px); opacity: 0.8; }
        }
        @keyframes liquid-shift {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }
      `}</style>

      {/* Floating Gradient Blob 1 - Cyan */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #00F2FE, #00F2FE00)',
          filter: 'blur(60px)',
          opacity: 0.6,
          top: '10%',
          left: '5%',
        }}
        animate={{
          x: [0, 50, -30, 40, 0],
          y: [0, -40, 50, -30, 0],
          scale: [1, 1.15, 0.95, 1.1, 1],
          rotate: [0, 180, 360, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Gradient Blob 2 - Purple */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #7C5CFF, #7C5CFF00)',
          filter: 'blur(70px)',
          opacity: 0.5,
          top: '20%',
          right: '10%',
        }}
        animate={{
          x: [0, -40, 50, -30, 0],
          y: [0, 50, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1.15, 1],
          rotate: [360, 180, 0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Floating Gradient Blob 3 - Cyan-Purple Mix */}
      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #8B5CF6, #8B5CF600)',
          filter: 'blur(65px)',
          opacity: 0.4,
          bottom: '10%',
          left: '20%',
        }}
        animate={{
          x: [0, 30, -50, 40, 0],
          y: [0, -50, 30, -40, 0],
          scale: [1, 0.95, 1.2, 1.05, 1],
          rotate: [0, -180, -360, -180, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Floating Gradient Blob 4 - Accent */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #00F2FE, #7C5CFF, #00F2FE00)',
          filter: 'blur(50px)',
          opacity: 0.35,
          bottom: '20%',
          right: '15%',
        }}
        animate={{
          x: [0, -50, 35, -45, 0],
          y: [0, 40, -50, 35, 0],
          scale: [1, 1.1, 0.85, 1.15, 1],
          rotate: [180, 0, 180, 0, 180],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Subtle animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(2, 2, 5, 0.7) 100%)',
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default function ImageSlideshow({ images, eventName, title = "Gallery" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-6 flex items-center justify-center overflow-hidden">
      {/* Floating Gradient Background Animation */}
      <FloatingGradientBackground />

      {/* Static subtle background grid effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 242, 254, 0.05) 25%, rgba(0, 242, 254, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 242, 254, 0.05) 75%, rgba(0, 242, 254, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 242, 254, 0.05) 25%, rgba(0, 242, 254, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 242, 254, 0.05) 75%, rgba(0, 242, 254, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] font-bold drop-shadow-lg">
              Event Gallery
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight drop-shadow-2xl"
            style={{
              backgroundImage: 'linear-gradient(135deg, #00F2FE 0%, #7C5CFF 50%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {eventName}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1.5 w-32 bg-gradient-to-r from-cyan-400 via-purple-600 to-cyan-400 mx-auto rounded-full shadow-lg shadow-cyan-400/50"
          />
        </div>

        {/* Main Slideshow Container */}
        <motion.div 
          className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-400/30 bg-slate-900 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-300 group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            boxShadow: '0 0 50px rgba(0, 242, 254, 0.2), inset 0 0 50px rgba(124, 92, 255, 0.1)'
          }}
        >
          <AnimatePresence mode="fade">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${eventName} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

          {/* Enhanced Gradient Overlay - Reduced */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-purple-900/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Event Info Overlay - Bottom Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent"
          >
            <p className="text-cyan-300 font-mono text-xs uppercase tracking-[0.2em] font-bold drop-shadow-lg">
              Photo {currentIndex + 1} of {images.length}
            </p>
          </motion.div>

          {/* Left Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.15, backgroundColor: 'rgba(0, 242, 254, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-cyan-400/30 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 text-white transition-all group shadow-lg"
          >
            <ChevronLeft size={24} className="group-hover:scale-125 transition-transform" />
          </motion.button>

          {/* Right Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.15, backgroundColor: 'rgba(0, 242, 254, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-cyan-400/30 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 text-white transition-all group shadow-lg"
          >
            <ChevronRight size={24} className="group-hover:scale-125 transition-transform" />
          </motion.button>

          {/* Pause/Play Button */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 242, 254, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setAutoPlay(!autoPlay)}
            className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-400/30 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
          >
            {autoPlay ? "⏸ Pause" : "▶ Play"}
          </motion.button>
        </motion.div>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex gap-4 overflow-x-auto pb-6 justify-center px-4 snap-x snap-mandatory"
        >
          {images.map((img, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all snap-center shadow-lg ${
                currentIndex === index
                  ? "border-cyan-400 shadow-cyan-400/50 scale-105"
                  : "border-white/20 hover:border-cyan-400/50"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {currentIndex === index && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-cyan-400/30 to-transparent"
                  layoutId="active-thumbnail"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 w-full h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/10"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-600 to-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Slide Counter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 text-cyan-400 font-mono text-sm font-bold drop-shadow-lg"
        >
          {currentIndex + 1} <span className="text-white/50">/ {images.length}</span>
        </motion.div>
      </div>
    </section>
  );
}
