"use client";

import React from "react";
import Link from "next/link";
import { Mountain, Castle, Waves, Sun, Leaf, Compass, Tent, ArrowLeft, MapPin } from "lucide-react";
import Nav from "../../../components/nav"; // Adjust this import path if your nav is somewhere else
import Footer from "../../../components/footer"; // Adjust this import path too

export default function ExploreAll() {
  const circuits = [
    { id: "himalayan", name: "Himalayan Circuit", desc: "Majestic peaks and serene valleys", icon: <Mountain size={32} />, color: "#ff7043", states: ["Jammu & Kashmir", "Ladakh", "Himachal Pradesh", "Uttarakhand", "Sikkim", "Arunachal Pradesh"] },
    { id: "heritage", name: "Heritage Circuit", desc: "Forts, palaces, and royal history", icon: <Castle size={32} />, color: "#8d6e63", states: ["Rajasthan", "Uttar Pradesh", "Madhya Pradesh", "Delhi", "Bihar"] },
    { id: "coastal", name: "Coastal Circuit", desc: "Pristine beaches and coastal breezes", icon: <Waves size={32} />, color: "#26a69a", states: ["Gujarat", "Maharashtra", "Goa", "Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh", "Odisha", "West Bengal", "Lakshadweep", "Andaman & Nicobar Island"] },
    { id: "spiritual", name: "Spiritual Circuit", desc: "Ancient temples and holy rivers", icon: <Sun size={32} />, color: "#ffca28", states: ["Uttarakhand", "Uttar Pradesh", "Bihar", "Odisha", "Tamil Nadu", "Punjab"] },
    { id: "wildlife", name: "Wildlife & Eco", desc: "Dense forests and exotic safaris", icon: <Leaf size={32} />, color: "#66bb6a", states: ["Madhya Pradesh", "Assam", "Uttarakhand", "Karnataka", "Kerala", "West Bengal"] },
    { id: "desert", name: "Desert Circuit", desc: "Golden sands and vibrant culture", icon: <Compass size={32} />, color: "#d4e157", states: ["Rajasthan", "Gujarat"] },
    { id: "northeast", name: "North East Circuit", desc: "Unexplored hills and tribal heritage", icon: <Tent size={32} />, color: "#ab47bc", states: ["Assam", "Meghalaya", "Nagaland", "Manipur", "Mizoram", "Tripura", "Arunachal Pradesh", "Sikkim"] },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      <style>{`
        .circuit-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.05);
          background: #ffffff;
        }
        .circuit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }
        .icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .state-badge {
          font-size: 0.75rem;
          background: #f8f9fa;
          color: #6c757d;
          border: 1px solid #dee2e6;
          padding: 4px 10px;
          border-radius: 20px;
          display: inline-block;
          margin: 0 4px 4px 0;
        }
      `}</style>

      {/* Put your Nav component here if you want it on this page */}
      <Nav />
      {/* Simple Pure CSS Hero Section */}
      <section 
        className="position-relative text-white d-flex align-items-center justify-content-center"
        style={{ minHeight: "40vh", background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)", paddingTop: "80px" }}
      >
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold font-serif mb-3 shadow-sm">Explore All Regions</h1>
          <p className="lead fw-light mb-0 mx-auto" style={{ maxWidth: "600px", opacity: 0.9 }}>
            Discover the diverse landscapes, rich heritage, and vibrant cultures of Incredible India.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <main className="flex-grow-1 py-5">
        <div className="container py-4">
          
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="fw-bold mb-0 text-dark">Travel Circuits</h2>
            <Link href="/" className="btn btn-outline-dark rounded-pill d-flex align-items-center gap-2">
              <ArrowLeft size={18} /> Back to Map
            </Link>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {circuits.map((circuit) => (
              <div className="col" key={circuit.id}>
                {/* Notice: No onClick events, just standard Next.js Links! */}
                <Link href={`/explore/${circuit.id}`} className="text-decoration-none text-dark d-block h-100">
                  <div className="circuit-card p-4 h-100 shadow-sm d-flex flex-column">
                    
                    <div className="icon-wrapper shadow-sm" style={{ backgroundColor: `${circuit.color}15`, color: circuit.color }}>
                      {circuit.icon}
                    </div>
                    
                    <h4 className="fw-bold mb-2">{circuit.name}</h4>
                    <p className="text-muted small mb-4">{circuit.desc}</p>
                    
                    <div className="mt-auto">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <MapPin size={16} className="text-muted" />
                        <span className="fw-semibold" style={{ fontSize: "0.85rem" }}>Destinations Include:</span>
                      </div>
                      <div className="d-flex flex-wrap">
                        {circuit.states.slice(0, 4).map((state, idx) => (
                          <span key={idx} className="state-badge">{state}</span>
                        ))}
                        {circuit.states.length > 4 && (
                          <span className="state-badge" style={{ backgroundColor: "#e9ecef" }}>
                            +{circuit.states.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </main>

      { <Footer /> }
    </div>
  );
}