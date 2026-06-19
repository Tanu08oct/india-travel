// /* eslint-disable */
// // @ts-nocheck
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Mountain, Castle, Waves, Sun, Leaf, Map as MapIcon, Compass, Tent } from "lucide-react";

// // D3 Math imports
// import { geoMercator, geoPath } from "d3-geo";
// // Import JSON directly
// import rawGeoData from './india_states.json';

// // Bypass all strict typing and just get the data
// const geoFeatures = rawGeoData.features || (rawGeoData as any).default?.features || [];

// const projection = geoMercator()
//   .scale(1000)
//   .center([81, 22])
//   .translate([400, 400]);

// const pathGenerator = geoPath().projection(projection as any);

// export default function IndiaMap() {
//   const [activeCircuit, setActiveCircuit] = useState("Heritage Circuit");
//   const [hoveredState, setHoveredState] = useState("");
//   const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

//   const circuits = [
//     { id: "Himalayan Circuit",   name: "Himalayan",    label: "Circuit", icon: <Mountain size={28} />, color: "#ff7043", states: ["Jammu & Kashmir", "Ladakh", "Himachal Pradesh", "Uttarakhand", "Sikkim", "Arunachal Pradesh"] },
//     { id: "Heritage Circuit",    name: "Heritage",     label: "Circuit", icon: <Castle size={28} />,   color: "#8d6e63", states: ["Rajasthan", "Uttar Pradesh", "Madhya Pradesh", "Delhi", "Bihar"] },
//     { id: "Coastal Circuit",     name: "Coastal",      label: "Circuit", icon: <Waves size={28} />,    color: "#26a69a", states: ["Gujarat", "Maharashtra", "Goa", "Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh", "Odisha", "West Bengal", "Lakshadweep", "Andaman & Nicobar Island"] },
//     { id: "Spiritual Circuit",   name: "Spiritual",    label: "Circuit", icon: <Sun size={28} />,      color: "#ffca28", states: ["Uttarakhand", "Uttar Pradesh", "Bihar", "Odisha", "Tamil Nadu", "Punjab"] },
//     { id: "Wildlife Circuit",    name: "Wildlife & Eco",label: "Circuit", icon: <Leaf size={28} />,   color: "#66bb6a", states: ["Madhya Pradesh", "Assam", "Uttarakhand", "Karnataka", "Kerala", "West Bengal"] },
//     { id: "Desert Circuit",      name: "Desert",       label: "Circuit", icon: <Compass size={28} />,  color: "#d4e157", states: ["Rajasthan", "Gujarat"] },
//     { id: "North East Circuit",  name: "North East",   label: "Circuit", icon: <Tent size={28} />,     color: "#ab47bc", states: ["Assam", "Meghalaya", "Nagaland", "Manipur", "Mizoram", "Tripura", "Arunachal Pradesh", "Sikkim"] },
//   ];

//   const currentCircuitData = circuits.find(c => c.id === activeCircuit);

//   const getStateFill = (stateName) => {
//     const isInCircuit = currentCircuitData?.states.includes(stateName);
//     return isInCircuit ? currentCircuitData?.color : "#cbd5e1";
//   };

//   const getStateHover = (stateName) => {
//     const isInCircuit = currentCircuitData?.states.includes(stateName);
//     return isInCircuit ? "#ff5722" : "#a0aec0";
//   };

//   const markerCoords = projection([70.6, 10.5]) || [0, 0];

//   return (
//     <section id="map-section" className="py-5 bg-white border-top">
//       <div className="container py-4">

//         <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 border-bottom pb-4">
//           <div>
//             <p className="text-uppercase fw-bold mb-1" style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
//               Click on any circuit to explore destinations.
//             </p>
//             <h2 className="display-5 fw-light text-dark mb-0">
//               <span className="fw-bold">Discover</span> Incredible India
//             </h2>
//           </div>
//         </div>

//         <div className="row g-5 align-items-center">
//           {/* THE BUTTONS */}
//           <div className="col-lg-5">
//             <div className="row g-0 border-top border-start">
//               {circuits.map((circuit) => {
//                 const isActive = activeCircuit === circuit.id;
//                 return (
//                   <div className="col-6 border-bottom border-end" key={circuit.id}>
//                     <button
//                       onClick={() => setActiveCircuit(circuit.id)}
//                       className="btn w-100 h-100 text-start p-3 p-md-4 rounded-0 border-0"
//                       style={{ transition: "all 0.2s", backgroundColor: isActive ? "rgba(0,0,0,0.02)" : "transparent" }}
//                     >
//                       <div className="d-flex align-items-center gap-3">
//                         <div className="d-flex justify-content-center align-items-center rounded-circle" style={{ color: circuit.color }}>
//                           {circuit.icon}
//                         </div>
//                         <div>
//                           <h6 className="mb-0 fw-bold" style={{ color: isActive ? circuit.color : "#333" }}>{circuit.name}</h6>
//                           <small className="text-muted fw-medium">{circuit.label}</small>
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 );
//               })}

//               <div className="col-6 border-bottom border-end">
//                 <Link href="/explore-all" className="btn w-100 h-100 text-start p-3 p-md-4 rounded-0 bg-transparent border-0 text-decoration-none d-block">
//                   <div className="d-flex align-items-center gap-3">
//                     <div className="d-flex justify-content-center align-items-center rounded-circle" style={{ color: "#1976d2" }}>
//                       <MapIcon size={28} />
//                     </div>
//                     <div>
//                       <h6 className="mb-0 fw-bold" style={{ color: "#1976d2" }}>Explore All</h6>
//                       <small className="text-muted fw-medium">Regions</small>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* THE MAP */}
//           <div className="col-lg-7 position-relative d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>

//             {hoveredState && (
//               <div 
//                 className="position-fixed badge bg-dark text-white shadow-lg px-3 py-2 fs-6 rounded-pill"
//                 style={{ 
//                   top: tooltipPos.y - 45, left: tooltipPos.x, transform: "translateX(-50%)", zIndex: 9999,
//                   pointerEvents: 'none'
//                 }}
//               >
//                 {hoveredState}
//               </div>
//             )}

//             <svg viewBox="0 0 800 800" style={{ width: "100%", maxWidth: "700px", height: "auto" }}>
//               <g>
//                 {geoFeatures.map((geo, index) => {
//                   let rawName = geo.properties.st_nm || geo.properties.name || "";
//                   const lowerName = rawName.toLowerCase();

//                   if (lowerName.includes("andaman") || lowerName.includes("nicobar")) rawName = "Andaman and Nicobar Island";
//                   if (lowerName.includes("laksh") || lowerName.includes("laccadive")) return null;

//                   const stateName = rawName;
//                   const fillColor = hoveredState === stateName ? getStateHover(stateName) : getStateFill(stateName);
//                   const pathData = pathGenerator(geo) || "";

//                   return (
//                     <path
//                       key={index}
//                       d={pathData}
//                       fill={fillColor}
//                       stroke="#ffffff"
//                       strokeWidth={hoveredState === stateName ? 1.5 : 1}
//                       style={{ cursor: "pointer", transition: "fill 0.2s ease, stroke-width 0.2s ease" }}
//                       onMouseEnter={(e) => {
//                         setHoveredState(stateName);
//                         setTooltipPos({ x: e.clientX, y: e.clientY });
//                       }}
//                       onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
//                       onMouseLeave={() => setHoveredState("")}
//                     />
//                   );
//                 })}
//               </g>

//               {/* Lakshadweep Custom Marker */}
//               <g
//                 transform={`translate(${markerCoords[0]}, ${markerCoords[1]})`}
//                 onMouseEnter={() => setHoveredState("Lakshadweep")}
//                 onMouseLeave={() => setHoveredState("")}
//                 style={{ cursor: "pointer" }}
//               >
//                 {(() => {
//                   const fill = hoveredState === "Lakshadweep" ? getStateHover("Lakshadweep") : getStateFill("Lakshadweep");
//                   return (
//                     <>
//                       <ellipse cx="-6"  cy="-32" rx="4.5" ry="2.8" fill={fill} stroke="#ffffff" strokeWidth="0.8" />
//                       <ellipse cx="5"   cy="-26" rx="3.5" ry="2.2" fill={fill} stroke="#ffffff" strokeWidth="0.8" />
//                       <ellipse cx="-4"  cy="-17" rx="5"   ry="2.8" fill={fill} stroke="#ffffff" strokeWidth="0.8" />
//                       <ellipse cx="7"   cy="-12" rx="3.8" ry="2.2" fill={fill} stroke="#ffffff" strokeWidth="0.8" />
//                       <ellipse cx="-8"  cy="-4"  rx="4.2" ry="2.5" fill={fill} stroke="#ffffff" strokeWidth="0.8" />
//                       <ellipse cx="3"   cy="2"   rx="5.2" ry="3"   fill={fill} stroke="#ffffff" strokeWidth="0.8" />
//                       <ellipse cx="-3"  cy="12"  rx="4"   ry="2.4" fill={fill} stroke="#ffffff" strokeWidth="0.8" />
//                       <ellipse cx="6"   cy="20"  rx="3.2" ry="2"   fill={fill} stroke="#ffffff" strokeWidth="0.8" />
//                     </>
//                   );
//                 })()}
//               </g>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useState } from "react";
import { Mountain, Castle, Waves, Sun, Leaf, Map as  Compass, Tent, ArrowRight } from "lucide-react";
import type { FeatureCollection, Feature, Geometry } from "geojson";
import { geoMercator, geoPath } from "d3-geo";
import rawGeoData from './india_states.json'; // Make sure this path is correct
import { Link } from '../i18n/navigation';
type GeoProperties = {
  st_nm?: string;
  name?: string;
  [key: string]: unknown;
};

type GeoFeature = Feature<Geometry, GeoProperties>;

type GeoJSONData = FeatureCollection<Geometry, GeoProperties> & {
  default?: FeatureCollection<Geometry, GeoProperties>;
};

const geoFeatures: GeoFeature[] =
  (rawGeoData as GeoJSONData).features ||
  (rawGeoData as GeoJSONData).default?.features ||
  [];

// FIX 3: Adjusted projection scale and center to bring Andaman completely into the frame
const projection = geoMercator()
  .scale(950) // Scaled down slightly from 1000
  .center([81.5, 23.5]) // Shifted center slightly to perfectly frame all islands
  .translate([400, 400]);

const pathGenerator = geoPath().projection(projection);

export default function MapSection() {
  const [activeCircuit, setActiveCircuit] = useState("Heritage Circuit");
  const [hoveredState, setHoveredState] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const circuits = [
    { id: "Himalayan Circuit", name: "Himalayan", label: "Circuit", icon: <Mountain size={24} />, color: "#ff7043", image: "/images/himalyas.jpg", states: ["Jammu & Kashmir", "Ladakh", "Himachal Pradesh", "Uttarakhand", "Sikkim", "Arunachal Pradesh"] },
    { id: "Heritage Circuit", name: "Heritage", label: "Circuit", icon: <Castle size={24} />, color: "#8d6e63", image: "/images/Vijaystambh.jpg", states: ["Rajasthan", "Uttar Pradesh", "Madhya Pradesh", "Delhi", "Bihar"] },
    { id: "Coastal Circuit", name: "Coastal", label: "Circuit", icon: <Waves size={24} />, color: "#26a69a", image: "/images/coastal.jpg", states: ["Gujarat", "Maharashtra", "Goa", "Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh", "Odisha", "West Bengal", "Lakshadweep", "Andaman & Nicobar Island"] },
    { id: "Spiritual Circuit", name: "Spiritual", label: "Circuit", icon: <Sun size={24} />, color: "#ffca28", image: "/images/spirituality.jpg", states: ["Uttarakhand", "Uttar Pradesh", "Bihar", "Odisha", "Tamil Nadu", "Punjab"] },
    { id: "Wildlife Circuit", name: "Wildlife & Eco", label: "Circuit", icon: <Leaf size={24} />, color: "#66bb6a", image: "/images/wildlife-bg.jpg", states: ["Madhya Pradesh", "Assam", "Uttarakhand", "Karnataka", "Kerala", "West Bengal"] },
    { id: "Desert Circuit", name: "Desert", label: "Circuit", icon: <Compass size={24} />, color: "#d4e157", image: "/images/desert.jpg", states: ["Rajasthan", "Gujarat"] },
    { id: "North East Circuit", name: "North East", label: "Circuit", icon: <Tent size={24} />, color: "#ab47bc", image: "/images/northeast.jpg", states: ["Assam", "Meghalaya", "Nagaland", "Manipur", "Mizoram", "Tripura", "Arunachal Pradesh", "Sikkim"] },
  ];

  const currentCircuitData = circuits.find(c => c.id === activeCircuit);

  const getStateFill = (stateName: string) => {
    const isInCircuit = currentCircuitData?.states.includes(stateName);
    return isInCircuit ? "#ffffff" : "#0A5C99"; 
  };

  const getStateHover = (stateName: string) => {
    const isInCircuit = currentCircuitData?.states.includes(stateName);
    return isInCircuit ? "#f1f5f9" : "#1E88E5";
  };

  const markerCoords = projection([70.6, 10.5]) || [0, 0];

  return (
    // Changed strict 'h-' to 'min-h-' so content can stretch if needed on extremely tiny screens
    <div className="relative w-full min-h-[calc(100vh-72px)] flex bg-[#0f172a] overflow-hidden font-sans pt-14">

      {/* FIX 2: Fixed Background Visibility by removing mix-blend-mode and using a simple dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${currentCircuitData?.image})` }}
      />
      {/* Solid dark transparent overlay instead of heavy gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061121] via-[#061121]/70 to-[#061121]/20 z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-12 h-full my-auto">
        
        <div className="flex flex-col lg:flex-row h-full min-h-[calc(100vh-72px)]">
          
          {/* LEFT COLUMN: Text & Buttons */}
          {/* FIX 1: Changed justify-center to pt-8/lg:justify-center to prevent top text clipping */}
          <div className="w-full lg:w-[45%] flex flex-col justify-start lg:justify-center pt-8 lg:pt-0 pb-8 pr-0 lg:pr-8 h-full overflow-y-auto hide-scrollbar">
            
            <div className="mb-6 mt-4 lg:mt-0">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 tracking-tight">
                Explore Incredible India
              </h2>
              <h3 className="text-blue-100 text-xl md:text-2xl font-medium mb-4">
                {currentCircuitData?.name} {currentCircuitData?.label}
              </h3>
              {/* <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-lg mb-6">
                Discover the diverse landscapes and rich heritage of India. Select a tourism circuit below to highlight the corresponding regions on the map.
              </p> */}
            </div>

            {/* Circuit Buttons Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {circuits.map((circuit) => {
                const isActive = activeCircuit === circuit.id;
                return (
                  <button
                    key={circuit.id}
                    onClick={() => setActiveCircuit(circuit.id)}
                    className={`
                      group w-full rounded-xl transition-all duration-300 px-4 py-3 text-left flex items-center gap-3 border
                      ${isActive
                        ? "bg-white text-slate-900 border-white shadow-lg scale-[1.02]" 
                        : "bg-white/5 text-white border-white/10 hover:bg-white/15 hover:border-white/30"
                      }
                    `}
                  >
                    <div style={{ color: isActive ? circuit.color : "#94a3b8" }} className="transition-colors duration-300">
                      {circuit.icon}
                    </div>
                    <div>
                      <h6 className={`font-semibold text-sm md:text-base leading-tight ${isActive ? "text-slate-900" : "text-slate-100"}`}>
                        {circuit.name}
                      </h6>
                      <small className={isActive ? "text-slate-500 font-medium" : "text-slate-400"}>
                        {circuit.label}
                      </small>
                    </div>
                  </button>
                );
              })}
            </div>

            <Link href="/explore-all">
              <button className="bg-white text-blue-900 font-bold px-6 py-3 rounded-md shadow-md hover:bg-blue-50 transition-colors flex items-center gap-2 w-max">
                Explore All Regions <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          {/* RIGHT COLUMN: The Map */}
          {/* Added py-8 padding to ensure SVG never touches the absolute edges */}
          <div className="w-full lg:w-[55%] relative flex items-center justify-center h-full min-h-[500px]">
            
            {/* Tooltip */}
            {hoveredState && (
              <div
                className="fixed bg-white text-blue-900 shadow-xl px-4 py-2 text-sm font-bold rounded-md pointer-events-none transition-all duration-100 border border-slate-200"
                style={{ top: tooltipPos.y - 45, left: tooltipPos.x, transform: "translateX(-50%)", zIndex: 9999 }}
              >
                {hoveredState}
              </div>
            )}

            <svg
              viewBox="0 0 700 700"
              className="w-full max-h-[90vh] h-auto drop-shadow-2xl object-contain"
            >
              <g>
                {geoFeatures.map((geo: GeoFeature, index: number) => {
                  let rawName = geo.properties.st_nm || geo.properties.name || "";
                  const lowerName = rawName.toLowerCase();

                  if (lowerName.includes("andaman") || lowerName.includes("nicobar")) rawName = "Andaman and Nicobar Island";
                  if (lowerName.includes("laksh") || lowerName.includes("laccadive")) return null;

                  const stateName = rawName;
                  const fillColor = hoveredState === stateName ? getStateHover(stateName) : getStateFill(stateName);
                  const pathData = pathGenerator(geo) || "";
                  const isAndaman = lowerName.includes("andaman") || lowerName.includes("nicobar");

                  const pathElement = (
                    <path
                      d={pathData}
                      fill={fillColor}
                      stroke="#ffffff"
                      strokeWidth={hoveredState === stateName ? 2 : 1}
                      className="cursor-pointer transition-all duration-300 ease-in-out"
                      onMouseEnter={(e) => {
                        setHoveredState(stateName);
                        setTooltipPos({ x: e.clientX, y: e.clientY });
                      }}
                      onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
                      onMouseLeave={() => setHoveredState("")}
                    />
                  );

                  if (isAndaman) {
                    return (
                      <g 
                        key={index} 
                        style={{ transformOrigin: "center" }} 
                        className="transition-transform"
                      >
                        <g > {/* Scaled down slightly to 1.2 to be safe */}
                          {pathElement}
                        </g>
                      </g>
                    );
                  }

                  return <React.Fragment key={index}>{pathElement}</React.Fragment>;
                })}
              </g>

              {/* Lakshadweep Custom Marker */}
              <g
                transform={`translate(${markerCoords[0]}, ${markerCoords[1]})`}
                onMouseEnter={(e) => {
                  setHoveredState("Lakshadweep");
                  setTooltipPos({ x: e.clientX, y: e.clientY });
                }}
                onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setHoveredState("")}
                className="cursor-pointer"
              >
                {(() => {
                  const fill = hoveredState === "Lakshadweep" ? getStateHover("Lakshadweep") : getStateFill("Lakshadweep");
                  return (
                    <g className="transition-colors duration-300">
                      <ellipse cx="-6" cy="-32" rx="4.5" ry="2.8" fill={fill} stroke="#ffffff" strokeWidth="1" />
                      <ellipse cx="5" cy="-26" rx="3.5" ry="2.2" fill={fill} stroke="#ffffff" strokeWidth="1" />
                      <ellipse cx="-4" cy="-17" rx="5" ry="2.8" fill={fill} stroke="#ffffff" strokeWidth="1" />
                      <ellipse cx="7" cy="-12" rx="3.8" ry="2.2" fill={fill} stroke="#ffffff" strokeWidth="1" />
                      <ellipse cx="-8" cy="-4" rx="4.2" ry="2.5" fill={fill} stroke="#ffffff" strokeWidth="1" />
                      <ellipse cx="3" cy="2" rx="5.2" ry="3" fill={fill} stroke="#ffffff" strokeWidth="1" />
                      <ellipse cx="-3" cy="12" rx="4" ry="2.4" fill={fill} stroke="#ffffff" strokeWidth="1" />
                      <ellipse cx="6" cy="20" rx="3.2" ry="2" fill={fill} stroke="#ffffff" strokeWidth="1" />
                    </g>
                  );
                })()}
              </g>
            </svg>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}