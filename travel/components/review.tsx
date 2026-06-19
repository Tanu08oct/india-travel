"use client";

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Reveiw() {
  const testimonials = [
    { name: 'Sarah L.', comment: 'The Swiss Alps trip was beyond my expectations! Absolutely stunning.', rating: 5 },
    { name: 'John D.', comment: 'Our Maldives vacation was pure paradise. The overwater villa was incredible!', rating: 5 },
    { name: 'Emma W.', comment: 'Rome was magical. The historical tours were perfectly organized.', rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-5 bg-white bg-opacity-50">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">What Our Travelers Say</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col" key={index}>
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="h-100">
                <div className="card h-100 border-0 shadow-sm hover-scale text-center p-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-warning fill-current" size={24} />
                      ))}
                    </div>
                    <p className="card-text text-muted fst-italic">&quot;{testimonial.comment}&quot;</p>
                    <h6 className="fw-bold mt-4">{testimonial.name}</h6>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}