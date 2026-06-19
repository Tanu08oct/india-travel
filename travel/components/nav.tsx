// "use client";

// import React, { useState, useEffect } from 'react';
// import { Plane, Menu, X } from 'lucide-react';

// export default function Nav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');
//   const [isScrolled, setIsScrolled] = useState(false);

//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const headerHeight = 70;
//       const yOffset = -headerHeight - 20;
//       const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//       setActiveSection(sectionId);
//       setIsMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const headerHeight = 70;
//       const sections = ['hero', 'categories', 'packages', 'why-choose-us', 'testimonials', 'travel-tips', 'newsletter', 'contact'];
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= headerHeight + 50 && rect.bottom > headerHeight;
//         }
//         return false;
//       });
//       if (currentSection) setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = ['packages', 'categories', 'why-choose-us', 'testimonials', 'travel-tips'];

//   return (
//     <header 
//       className={`fixed-top w-100 ${isScrolled || isMenuOpen ? 'shadow-sm' : ''}`} 
//       style={{ 
//         transition: 'all 0.3s ease-in-out',
//         // FIX: The header now turns dark if you scroll OR if the mobile menu is open!
//         backgroundColor: isScrolled || isMenuOpen ? 'rgba(26, 36, 45, 0.95)' : 'transparent',
//         backdropFilter: isScrolled || isMenuOpen ? 'blur(10px)' : 'none',
//         zIndex: 1050
//       }}
//     >
//       <div className="container py-3 d-flex align-items-center justify-content-between">
        
//         <a 
//           className="d-flex align-items-center gap-2 text-white text-decoration-none hover-scale" 
//           href="#hero" 
//           onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
//         >
//           <Plane className="text-white" size={32} /> 
//           <span className="fs-4 fw-bold font-serif" style={{ letterSpacing: '1px' }}>
//             Tour.ink
//           </span>
//         </a>

//         {/* DESKTOP LINKS */}
//         <nav className="d-none d-lg-flex gap-4">
//           {navLinks.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className="btn btn-link text-white text-decoration-none fw-medium p-0 position-relative"
//               style={{
//                 opacity: activeSection === item ? '1' : '0.8',
//                 transition: 'opacity 0.2s',
//                 boxShadow: 'none'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
//               onMouseLeave={(e) => { if (activeSection !== item) e.currentTarget.style.opacity = '0.8'; }}
//             >
//               {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//               {activeSection === item && (
//                 <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '2px', backgroundColor: '#ff5722', bottom: '-5px' }} />
//               )}
//             </button>
//           ))}
//         </nav>

//         {/* CTA BUTTON */}
//         <div className="d-flex align-items-center gap-3">
//           <button 
//             className="btn text-white fw-bold px-4 py-2 d-none d-lg-block hover-scale" 
//             style={{ backgroundColor: '#ff5722', border: 'none', borderRadius: '4px' }}
//           >
//             Plan Your Trip
//           </button>
//           <button 
//             className="btn text-white d-lg-none p-0" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {isMenuOpen && (
//         <div className="bg-dark p-3 d-lg-none shadow-lg border-top border-secondary">
//           {navLinks.map((item) => (
//             <button
//               key={item}
//               className="btn btn-link d-block w-100 text-start text-white text-decoration-none fw-medium py-2 border-bottom border-secondary"
//               onClick={() => scrollToSection(item)}
//               style={{ color: activeSection === item ? '#ff5722' : 'white' }}
//             >
//               {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//             </button>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }
'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import Link from 'next/link'
import {  Globe,Menu, X } from 'lucide-react'
import { useRouter, usePathname } from '../i18n/navigation'; // 2. MUST use the next-intl wrappers!
import { useLocale } from 'next-intl';
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
      const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
 
  // 3. The magic function that swaps the language
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    // router.replace swaps the locale in the URL but keeps the user on the same page
    router.replace(pathname, { locale: nextLocale });
  };

 useEffect(() => {
    // Find the main scrolling container we set up in layout.tsx
    const scrollContainer = document.querySelector('main')
    if (!scrollContainer) return

    const handleScroll = () => {
      // Check the container's scroll position instead of the window's
      setIsScrolled(scrollContainer.scrollTop > 50)
    }

    // Attach the event listener to the main container
    scrollContainer.addEventListener('scroll', handleScroll)

    // Clean up
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md text-gray-900' : 'bg-transparent text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-15">
          
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white">
              iI
            </div>
            <span className="font-bold text-xl tracking-wider">iNCREDIBLE iNDIA</span>
          </Link>

          {/* Middle/Right: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link href="/" className="hover:text-orange-500 transition">Home</Link>
            <Link href="/about" className="hover:text-orange-500 transition">About Us</Link>
           <div className="relative flex items-center  hover:text-orange-500 transition">
        <Globe size={20} className="mr-1" />
        <select
          value={locale}
          onChange={handleLanguageChange}
          className="bg-transparent cursor-pointer outline-none appearance-none font-medium p-3"
          aria-label="Select Language"
        >
          <option  value="en">EN</option>
          <option  value="fr">FR</option>
        </select>
      </div>
            <Link href="/book" className="hover:text-orange-500 transition">Book Now</Link>
            <Link href="/join" className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition shadow-lg">
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-900 absolute top-20 w-full shadow-xl flex flex-col p-4 space-y-4 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/book">Book Now</Link>
          <Link href="/join" className="text-orange-600">Join Us</Link>
        </div>
      )}
    </nav>
  )
}