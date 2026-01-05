import React from 'react';
import { motion } from 'framer-motion';

// Shared Floating Gradient Background Component
export const FloatingGradientBg = () => (
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

export default FloatingGradientBg;
