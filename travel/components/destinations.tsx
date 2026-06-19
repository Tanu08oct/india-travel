"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Desti() {
  const packages = [
    { 
      id: 1,
      region: 'EUROPE', 
      title: 'Spain', 
      price: 'From $2,499', 
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop',
      stars: 3
    },
    { 
      id: 2,
      region: 'OCEANIA', 
      title: 'Australia', 
      price: 'From $2,499', 
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop',
      stars: 3
    },
    { 
      id: 3,
      region: 'AFRICA', 
      title: 'Egypt', 
      price: 'From $2,499', 
      image: 'https://images.unsplash.com/photo-1539667468225-eebb663053e6?q=80&w=2069&auto=format&fit=crop',
      stars: 3
    },
  ];

  return (
    <section id="destinations" className="py-5 bg-white ">
      <div className="container pt-4">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span 
            className="badge rounded-pill mb-3 px-4 py-2" 
            style={{ backgroundColor: '#fff0e6', color: '#ff5722', letterSpacing: '1px' }}
          >
            POPULAR PACKAGES
          </span>
          <h2 className="display-4 fw-bold font-serif text-dark">
            Handpicked Packages
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="row g-5">
          {packages.map((pkg, index) => (
            <div className="col-md-4" key={pkg.id}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.2 }}
                className="text-center hover-scale"
                style={{ cursor: 'pointer' }}
              >
                
                {/* The Arched Image Container */}
                <div className="position-relative mx-auto mb-4" style={{ maxWidth: '320px' }}>
                  <div 
                    className="overflow-hidden shadow-sm"
                    style={{ 
                      height: '420px', 
                      // This creates the arched top!
                      borderRadius: '160px 160px 0 0',
                      // Hides the bottom of the image behind the cutout
                      maskImage: 'radial-gradient(circle at bottom center, transparent 65px, black 66px)',
                      WebkitMaskImage: 'radial-gradient(circle at bottom center, transparent 65px, black 66px)'
                    }}
                  >
                    <Image 
                      src={pkg.image} 
                      alt={pkg.title} 
                      fill
                      className="w-100 h-100 object-fit-cover" 
                    />
                  </div>

                  {/* The Star Rating Cutout Circle */}
                  <div 
                    className="position-absolute bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{ 
                      width: '120px', 
                      height: '120px', 
                      bottom: '-60px', // Pulls it down perfectly over the border
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      zIndex: 2
                    }}
                  >
                    <div className="d-flex align-items-end gap-1 mb-3 text-white" style={{ color: '#ff5722' }}>
                      <Star size={20} fill="#ff5722" color="#ff5722" style={{ transform: 'rotate(-15deg)' }} />
                      <Star size={26} fill="#ff5722" color="#ff5722" className="mb-2" />
                      <Star size={20} fill="#ff5722" color="#ff5722" style={{ transform: 'rotate(15deg)' }} />
                    </div>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="mt-5 pt-3">
                  <span 
                    className="badge rounded-pill mb-3 px-4 py-2" 
                    style={{ backgroundColor: '#fff0e6', color: '#ff5722', letterSpacing: '1px' }}
                  >
                    {pkg.region}
                  </span>
                  <h3 className="fs-1 fw-bold font-serif text-dark mb-3">{pkg.title}</h3>
                  <p className="text-muted">{pkg.price}</p>
                </div>

              </motion.div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}