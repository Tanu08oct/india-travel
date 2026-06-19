// // hero.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { Search } from 'lucide-react';
// import Nav from './nav';

// export default function Hero() {
//   const [inputValue, setInputValue] = useState("");
//   const [searchTermIndex, setSearchTermIndex] = useState(0);
  
//   const searchTerms = ['"Spiritual"', '"Kerala"', '"Wildlife"', '"Rajasthan"', '"Heritage"', '"Beaches"'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSearchTermIndex((prev) => (prev + 1) % searchTerms.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [searchTerms.length]);

//   return (
//     <div className="position-relative overflow-hidden d-flex flex-column" id="hero" style={{ minHeight: '100vh', height: '100dvh' }}>
      
//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeSwitch {
//           0% { opacity: 0; transform: translateY(10px); }
//           20% { opacity: 1; transform: translateY(0); }
//           80% { opacity: 1; transform: translateY(0); }
//           100% { opacity: 0; transform: translateY(-10px); }
//         }
//         .animate-fade-up {
//           animation: fadeInUp 0.8s ease-out forwards;
//           opacity: 0; 
//         }
//         .delay-1 { animation-delay: 0.2s; }
//         .delay-2 { animation-delay: 0.4s; }
        
//         .dynamic-search-term {
//           animation: fadeSwitch 3s infinite ease-in-out;
//           color: #1976d2;
//           font-weight: 500;
//           display: inline-block;
//         }
//       `}</style>

//       <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -2, backgroundColor: '#000' }}>
//         <video key="hero-video" autoPlay muted loop playsInline className="w-100 h-100" style={{ objectFit: 'cover', display: 'block' }}>
//           <source src="/videos/Heritage.webm" type="video/webm" />
//         </video>
//       </div>

//       <div 
//         className="position-absolute top-0 start-0 w-100 h-100" 
//         style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)', zIndex: -1 }} 
//       />

//       <Nav />

//       <div className="position-absolute top-50 start-50 translate-middle w-100 text-center px-3" style={{ zIndex: 2, maxWidth: '850px' }}>
        
//         <h1 
//           className="display-4 fw-bold font-serif text-white mb-2 animate-fade-up" 
//           style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
//         >
//           Incredible India, Handpicked for You
//         </h1>
        
//         <p 
//           className="fs-4 text-white mb-4 fw-light animate-fade-up delay-1" 
//           style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
//         >
//           Local Wonders, Expertly Curated
//         </p>

//         <div 
//           className="mx-auto bg-white rounded-pill d-flex align-items-center p-2 shadow-lg position-relative animate-fade-up delay-2" 
//           style={{ maxWidth: '650px' }}
//         >
//           <div className="position-relative w-100 d-flex align-items-center h-100">
//             <input 
//               type="text" 
//               className="form-control border-0 shadow-none px-4 fs-5 h-100" 
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               style={{ backgroundColor: 'transparent', zIndex: 2 }}
//             />
            
//             {!inputValue && (
//               <div 
//                 className="position-absolute start-0 px-4 fs-5 text-muted d-flex align-items-center" 
//                 style={{ zIndex: 1, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
//               >
//                 Search <span className="mx-1"></span>
//                 <span key={searchTermIndex} className="dynamic-search-term">
//                   {searchTerms[searchTermIndex]}
//                 </span>
//               </div>
//             )}
//           </div>

//           <button 
//             className="btn rounded-circle d-flex align-items-center justify-content-center" 
//             style={{ 
//               backgroundColor: '#1976d2', color: 'white', width: '55px', height: '55px', flexShrink: 0, border: 'none', transition: 'transform 0.2s ease'
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
//           >
//             <Search size={24} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'
import { Search } from 'lucide-react'
import {useTranslations} from 'next-intl';
export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute w-auto min-w-full min-h-full max-w-none object-cover opacity-60"
      >
        <source src="/videos/Udaipur-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 text-center w-full max-w-4xl px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          {t('headline')} <br className="md:hidden" />{t('subheadline')}
        </h1>
        <p className="text-lg md:text-2xl text-white mb-10 drop-shadow-md tracking-wide">
         {t('subheadline2')} 
        </p>

        {/* Search Bar matching the Thomas Cook style */}
        <div className="w-full max-w-2xl relative flex items-center">
          <input 
            type="text" 
            placeholder="Search 'Andaman' or 'Chittorgarh'..." 
            className="border-2 border-white w-full py-4 pl-6 pr-16 rounded-full text-white shadow-2xl outline-none text-lg border-2 border-transparent focus:border-orange-500 transition-all placeholder:text-white"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors">
            <Search size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}