// loading.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
      style={{ backgroundColor: '#0a0f16', zIndex: 99999 }}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center text-white"
      >
        <h1 className="display-3 fw-bold font-serif mb-3" style={{ letterSpacing: '4px' }}>
          Welcome to INDIA
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ height: '2px', backgroundColor: '#ff5722', margin: '0 auto 20px auto', maxWidth: '100px' }}
        />
        <p className="fst-italic" style={{ fontSize: '1.1rem', letterSpacing: '1px', opacity: 0.8 }}>
          A journey of a thousand miles begins with a single step.
        </p>
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        className="mt-5"
        style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTop: '3px solid #ff5722', borderRadius: '50%' }}
      />
    </div>
  );
}