// category.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryGalleryProps {
  activeCategoryIndex: number;
}

export default function CategoryGallery({ activeCategoryIndex }: CategoryGalleryProps) {
  // 1. REMOVED isMounted state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // Default to 4 for server render

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) setItemsPerView(1); 
        else if (window.innerWidth < 992) setItemsPerView(2); 
        else setItemsPerView(4); 
      }
    };
    
    handleResize(); // Trigger immediately on client

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [prevCategory, setPrevCategory] = useState(activeCategoryIndex);
  if (activeCategoryIndex !== prevCategory) {
    setPrevCategory(activeCategoryIndex);
    setCurrentIndex(0); 
  }

  const categoryTitles = ["WILDLIFE", "HERITAGE", "SPIRITUALITY", "NATURE"];
  const currentTitle = categoryTitles[activeCategoryIndex];

  const backgroundImages = [
    "/images/wildlife-bg.jpg", "/images/india-gate-bg.jpg", "/images/Spirituality-bg.jpg", "/images/nature-bg.jpg"  
  ];
  const currentBg = backgroundImages[activeCategoryIndex];
  
  



  
  
  const allAttractions: Record<number, { id: number; name: string; image: string }[]> = {
    0: [{ id: 1, name: "Chittorgarh", image: "/images/chittorgarhfort.jpg" }, { id: 2, name: "Kaziranga", image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=1936&auto=format&fit=crop" }, { id: 3, name: "Jim Corbett", image: "https://images.unsplash.com/photo-1562086884-0610ea6642ec?q=80&w=2070&auto=format&fit=crop" }, { id: 4, name: "Bandipur", image: "https://images.unsplash.com/photo-1560050860-29177a44f9b8?q=80&w=2070&auto=format&fit=crop" }],
    1: [{ id: 6, name: "Taj Mahal", image: "https://images.unsplash.com/photo-1564507592209-555fc2177cb8?q=80&w=2070&auto=format&fit=crop" }, { id: 7, name: "Hawa Mahal", image: "https://images.unsplash.com/photo-1599661559684-25a2e586144e?q=80&w=2070&auto=format&fit=crop" }, { id: 8, name: "Mysore Palace", image: "https://images.unsplash.com/photo-1600100397608-f010f419c9b3?q=80&w=2070&auto=format&fit=crop" }, { id: 9, name: "Victoria Memorial", image: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1974&auto=format&fit=crop" }],
    2: [{ id: 10, name: "Golden Temple", image: "https://images.unsplash.com/photo-1588698188177-f273292d3f66?q=80&w=2070&auto=format&fit=crop" }, { id: 11, name: "Kedarnath", image: "https://images.unsplash.com/photo-1626714486950-891ee127bcfb?q=80&w=1974&auto=format&fit=crop" }, { id: 12, name: "Meenakshi Temple", image: "https://images.unsplash.com/photo-1621360046522-bb154e2c8c46?q=80&w=1925&auto=format&fit=crop" }, { id: 13, name: "Varanasi Ghats", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop" }],
    3: [{ id: 14, name: "Valley of Flowers", image: "https://images.unsplash.com/photo-1595844754593-13835010cb7c?q=80&w=2070&auto=format&fit=crop" }, { id: 15, name: "Dudhsagar Falls", image: "https://images.unsplash.com/photo-1625442523555-c4bc089df515?q=80&w=1935&auto=format&fit=crop" }, { id: 16, name: "Pangong Lake", image: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?q=80&w=1984&auto=format&fit=crop" }, { id: 17, name: "Munnar Hills", image: "https://images.unsplash.com/photo-1593693397690-362cb9666c6b?q=80&w=2070&auto=format&fit=crop" }],
  };
    const activeAttractions = allAttractions[activeCategoryIndex] || allAttractions[0];
  const maxIndex = Math.max(0, activeAttractions.length - itemsPerView);

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

 

  return (
    <>
      <style>{`
        .fullscreen-section { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 80px 0; }
        .dynamic-card { height: clamp(350px, 55vh, 500px); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .card-bg-image { transition: transform 0.5s ease; }
        .card-gradient { transition: background 0.3s ease; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%); }
        .explore-btn-container { max-height: 0; opacity: 0; overflow: hidden; transition: all 0.3s ease; margin-top: 0; }
        
        @media (min-width: 992px) {
          .dynamic-card:hover { transform: scale(1.05) translateY(-10px); }
        }
        .dynamic-card:hover .card-bg-image { transform: scale(1.1); }
        .dynamic-card:hover .card-gradient { background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%); }
        .dynamic-card:hover .explore-btn-container { max-height: 60px; opacity: 1; margin-top: 15px; }

        .nav-btn { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.3); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; z-index: 10; }
        .nav-btn:hover { background: rgba(255, 255, 255, 0.4); transform: scale(1.1); }
        
        .fade-bg { animation: simpleFade 0.8s ease-in-out; }
        @keyframes simpleFade { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

     <section className="fullscreen-section w-100 position-relative overflow-hidden" style={{ backgroundColor: "#000" }}>
        
        <div key={currentBg} className="position-absolute top-0 start-0 w-100 h-100 fade-bg" style={{ zIndex: 0 }}>
          <Image src={currentBg} alt="Background" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>

        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)", zIndex: 1 }}></div>

        {/* 2. REMOVED the {isMounted && ( ... )} wrapper! The div now renders directly. */}
        <div className="container-fluid px-md-5 position-relative w-100" style={{ zIndex: 2, maxWidth: '1600px' }}>
          
          <div key={currentTitle} className="text-center mb-4 mb-md-5 fade-bg">
            <h2 className="fw-bold mb-2 text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '2px', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
              {currentTitle} <span style={{ opacity: 0.9 }}>ATTRACTIONS</span>
            </h2>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <div className="d-none d-sm-block" style={{ height: '2px', width: '60px', backgroundColor: '#ffca28', opacity: 0.8 }}></div>
              <p className="mb-0 fw-light" style={{ color: '#ffca28', fontSize: 'clamp(1rem, 2vw, 1.3rem)', letterSpacing: '1px' }}>
                worth a thousand stories
              </p>
              <div className="d-none d-sm-block" style={{ height: '2px', width: '60px', backgroundColor: '#ffca28', opacity: 0.8 }}></div>
            </div>
          </div>

            <div className="position-relative px-4 px-md-5">
              {maxIndex > 0 && <button onClick={handlePrev} className="position-absolute top-50 start-0 translate-middle-y nav-btn shadow-lg ms-2 ms-md-0"><ChevronLeft size={28} /></button>}
              {maxIndex > 0 && <button onClick={handleNext} className="position-absolute top-50 end-0 translate-middle-y nav-btn shadow-lg me-2 me-md-0"><ChevronRight size={28} /></button>}

              <div className="overflow-hidden py-3">
                <div 
                  className="d-flex" 
                  style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`, transition: "transform 0.5s ease-in-out" }}
                >
                  {activeAttractions.map((item) => (
                    <div className="px-2 px-md-3" key={item.id} style={{ minWidth: `${100 / itemsPerView}%` }}>
                      <div className="position-relative rounded-4 overflow-hidden shadow-lg mx-auto cursor-pointer dynamic-card w-100">
                        
                        <div className="position-absolute top-0 start-0 w-100 h-100 card-bg-image" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className="position-absolute bottom-0 start-0 w-100 h-100 card-gradient" style={{ height: '75%' }} />

                        <div className="position-absolute bottom-0 start-0 w-100 p-4 text-center text-white d-flex flex-column align-items-center justify-content-end h-100">
                          <h4 className="fw-bold m-0 card-title" style={{ fontSize: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                            {item.name}
                          </h4>
                          
                          <div className="w-100 explore-btn-container">
                            <button className="btn text-white fw-bold explore-btn rounded-pill px-4 py-2 w-100 shadow" style={{ backgroundColor: '#ff0000', letterSpacing: '1px' }}>
                              Explore
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <button className="btn text-white fw-bold px-5 py-3 rounded-pill shadow-lg" 
                      style={{ backgroundColor: '#ff0000', letterSpacing: '1px', transition: 'transform 0.2s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                Discover more
              </button>
            </div>
          </div>
      </section>
    </>
  );
}