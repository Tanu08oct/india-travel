// // page.tsx
// "use client";

// import React, { useEffect } from 'react';
// import { Zap, Shield, Headphones, Award, BookOpen, Sunrise, Utensils, Camera } from 'lucide-react';

// import Hero from '../components/hero';
// import CategoryGallery from '../components/category';
// import Desti from '../components/destinations';
// import IndiaMap from '../components/map';
// import Reveiw from '../components/review';
// import Footer from '../components/footer';

// export default function Home() {
  
//   // Native replacement for Framer Motion's "whileInView"
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('reveal-visible');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.1 });

//     document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const whyChooseUs = [
//     { title: 'Fast Booking', description: 'Quick and easy travel arrangements', icon: <Zap className="text-warning" size={40} /> },
//     { title: 'Safe & Secure', description: 'Your safety is our top priority', icon: <Shield className="text-success" size={40} /> },
//     { title: '24/7 Support', description: 'Always here when you need us', icon: <Headphones className="text-primary" size={40} /> },
//     { title: 'Best Deals', description: 'Unbeatable prices and offers', icon: <Award className="text-danger" size={40} /> },
//   ];

//   const travelTips = [
//     { title: 'Pack Smart', content: 'Roll your clothes to save space and prevent wrinkles.', icon: <Sunrise className="text-warning" size={48} /> },
//     { title: 'Learn Local Phrases', content: 'Knowing a few key phrases in the local language goes a long way.', icon: <BookOpen className="text-info" size={48} /> },
//     { title: 'Stay Hydrated', content: 'Always carry a reusable water bottle, especially in hot climates.', icon: <Utensils className="text-success" size={48} /> },
//     { title: 'Capture Memories', content: "Don't forget to bring a camera or ensure your phone has enough storage.", icon: <Camera className="text-danger" size={48} /> },
//   ];

//   return (
//     <div className="d-flex flex-column min-vh-100 position-relative" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      
//       <style>{`
//         .reveal-on-scroll {
//           opacity: 0;
//           transform: translateY(30px) scale(0.95);
//           transition: all 0.6s cubic-bezier(0.5, 0, 0, 1);
//         }
//         .reveal-visible {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//         }
//       `}</style>

//       <Hero />

//       <main className="flex-grow-1">
//         <IndiaMap />
//         <CategoryGallery activeCategoryIndex={0} />
//         <Desti />

//         <section id="why-choose-us" className="py-5 bg-white">
//           <div className="container py-4">
//             <div className="text-center mb-5">
//               <span className="badge rounded-pill mb-3 px-4 py-2" style={{ backgroundColor: '#fff0e6', color: '#ff5722', letterSpacing: '1px' }}>OUR PROMISE</span>
//               <h2 className="display-5 fw-bold font-serif text-dark">Why Choose Us</h2>
//             </div>
//             <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
//               {whyChooseUs.map((item, index) => (
//                 <div className="col" key={index}>
//                   <div className="h-100 reveal-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
//                     <div className="card h-100 border-0 shadow-sm hover-scale text-center py-4">
//                       <div className="card-body">
//                         <div className="mb-3 d-inline-block p-3 bg-light rounded-circle shadow-sm">{item.icon}</div>
//                         <h5 className="card-title fw-bold font-serif">{item.title}</h5>
//                         <p className="card-text text-muted small">{item.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <Reveiw />

//         <section id="travel-tips" className="py-5 bg-light">
//           <div className="container py-4">
//             <div className="text-center mb-5">
//               <span className="badge rounded-pill mb-3 px-4 py-2" style={{ backgroundColor: '#fff0e6', color: '#ff5722', letterSpacing: '1px' }}>ESSENTIALS</span>
//               <h2 className="display-5 fw-bold font-serif text-dark">Travel Tips</h2>
//             </div>
//             <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
//               {travelTips.map((tip, index) => (
//                 <div className="col" key={index}>
//                   <div className="h-100 reveal-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
//                     <div className="card h-100 border-0 shadow-sm hover-scale text-center p-4">
//                       <div className="card-body d-flex flex-column align-items-center">
//                         <div className="mb-3 p-3 bg-white rounded-circle shadow-sm d-inline-block">{tip.icon}</div>
//                         <h5 className="card-title fw-bold font-serif">{tip.title}</h5>
//                         <p className="card-text text-muted small">{tip.content}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="newsletter" className="py-5 bg-white">
//           <div className="container text-center py-5">
//             <h2 className="display-5 fw-bold font-serif mb-3">Stay Updated</h2>
//             <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
//               Subscribe to our newsletter for exclusive travel deals and inspiration sent straight to your inbox.
//             </p>
//             <form className="d-flex justify-content-center mx-auto" style={{ maxWidth: '500px' }}>
//               <input type="email" className="form-control form-control-lg me-2 shadow-sm border-light" placeholder="Enter your email address" />
//               <button type="submit" className="btn text-white px-4 fw-bold shadow-sm" style={{ backgroundColor: '#ff5722' }}>Subscribe</button>
//             </form>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }
import ClientLoaderWrapper from '@/components/ClientLoaderWrapper'
import Hero from '@/components/hero'
import MapSection from '@/components/map'
import TopPicks from '@/components/TopPicks'
import Itineraries from '@/components/Itineraries'
// import Themes from '@/components/Themes'
import Moods from '@/components/Moods'
import Gastronomy from '@/components/Gastronomy'
import Celebrations from '@/components/Celebrations'
import Crafts from '@/components/Crafts'
import HelpSection from '@/components/HelpSection'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <ClientLoaderWrapper>
      {/* Hero and Map usually look best strictly at h-screen */}
      <section className="w-full h-screen relative snap-start"><Hero /></section>
      <section className="w-full min-h-screen relative snap-start flex flex-col justify-center"><MapSection /></section>
      
      {/* Change the rest to min-h-screen to prevent overlap when content stacks */}
      <section className="w-full pt-14 min-h-screen relative snap-start flex flex-col justify-center"><TopPicks /></section>
      <section className="w-full pt-14 min-h-screen relative snap-start flex flex-col justify-center"><Itineraries /></section>
      {/* <section className="w-full pt-14 min-h-screen relative snap-start flex flex-col justify-center"><Themes /></section> */}
      <section className="w-full pt-14 min-h-screen relative snap-start flex flex-col justify-center"><Moods /></section>
      <section className="w-full pt-14 min-h-screen relative snap-start flex flex-col justify-center"><Gastronomy /></section>
      <section className="w-full pt-14 min-h-screen relative snap-start flex flex-col justify-center"><Celebrations /></section>
      <section className="w-full pt-14 min-h-screen relative snap-start flex flex-col justify-center"><Crafts /></section>
      <section className="w-full pt-14 min-h-screen relative snap-start flex flex-col justify-center"><HelpSection /></section>
      
      {/* Footer can just be h-auto so it takes exactly the space it needs */}
      <section className="w-full h-auto relative snap-start"><Footer /></section>
    </ClientLoaderWrapper>
  )
}