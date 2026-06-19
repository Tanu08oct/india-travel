'use client'
import { useState } from 'react'

export default function Crafts() {
  const [selectedState, setSelectedState] = useState('All')
  
  const crafts = [
    { state: "Mizoram", title: "Paunchei", img: "/images/paunchei.jpg" },
    { state: "Rajasthan", title: "Kathputlis", img: "/images/kathputli.jpg" },
    { state: "Telangana", title: "Silver Filigree of Karimnagar", img: "/images/silver.jpg" },
    { state: "Uttar Pradesh", title: "Zardozi Embroidery", img: "/images/zardozi.jpg" }
  ]

  return (
    <div className="w-full bg-[#dc3545] text-white flex flex-col justify-center min-h-screen">
      <div className="text-center py-12 px-4">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-xl">Exquisite Crafts</h2>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px w-16 bg-white/50" />
          <p className="text-lg md:text-xl font-light tracking-widest">of timeless tradition</p>
          <div className="h-px w-16 bg-white/50" />
        </div>
      </div>

      <div className="bg-gray-50 text-gray-900 w-full flex-grow rounded-t-[3rem] px-4 py-12 md:px-8 pb-20 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex justify-center mb-8">
             <select 
               value={selectedState} 
               onChange={(e) => setSelectedState(e.target.value)}
               className="px-6 py-3 rounded-full border-2 border-red-200 outline-none focus:border-red-600 bg-white font-bold text-red-600 cursor-pointer shadow-md"
             >
               <option value="All">All States</option>
               <option value="Rajasthan">Rajasthan</option>
               <option value="Telangana">Telangana</option>
             </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crafts.map((craft, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${craft.img})`, backgroundColor: '#e5e7eb' }} />
                <div className="p-6">
                  <p className="text-red-600 font-bold text-sm uppercase tracking-wide mb-2">{craft.state}</p>
                  <h3 className="text-2xl font-bold leading-tight text-gray-900">{craft.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}