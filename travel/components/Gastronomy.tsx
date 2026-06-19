'use client'
import { useState } from 'react'

export default function Gastronomy() {
  // Setting Rajasthan as the default to highlight local flavors
  const [selectedState, setSelectedState] = useState('Rajasthan')
  
  const cuisines = [
    { 
      state: "Rajasthan", 
      title: "Authentic Dal Bati Churma", 
      desc: "A rich, traditional delicacy baked to perfection.",
      img: "/images/dal-bati.jpg" 
    },
    { 
      state: "Kerala", 
      title: "Traditional Sadya", 
      desc: "A magnificent vegetarian feast served on a banana leaf.",
      img: "/images/sadya.jpg" 
    },
    { 
      state: "Punjab", 
      title: "Makki di Roti & Sarson da Saag", 
      desc: "The quintessential winter comfort food of the north.",
      img: "/images/sarson.jpg" 
    },
    { 
      state: "West Bengal", 
      title: "Classic Macher Jhol", 
      desc: "A spicy and comforting traditional fish curry.",
      img: "/images/macher-jhol.jpg" 
    }
  ]

  // Filter logic (if 'All' is selected, show all, otherwise filter by state)
  const displayedCuisines = selectedState === 'All' 
    ? cuisines 
    : cuisines.filter(item => item.state === selectedState)

  return (
    <div className="w-full bg-[#d97706] text-white flex flex-col justify-center min-h-screen relative overflow-hidden">
      {/* Decorative background element for the culinary theme */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="text-center py-12 px-4 relative z-10">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-xl">
          Culinary Journeys
        </h2>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px w-16 bg-white/50" />
          <p className="text-lg md:text-xl font-light tracking-widest">tastes of tradition</p>
          <div className="h-px w-16 bg-white/50" />
        </div>
      </div>

      {/* Main Content Area styling matches the rounded top of the Crafts section */}
      <div className="bg-[#f8f6f0] text-gray-900 w-full flex-grow rounded-t-[3rem] px-4 py-12 md:px-8 pb-20 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex justify-center mb-8">
             <select 
               value={selectedState} 
               onChange={(e) => setSelectedState(e.target.value)}
               className="px-6 py-3 rounded-full border-2 border-amber-200 outline-none focus:border-amber-600 bg-white font-bold text-amber-700 cursor-pointer shadow-md appearance-none"
             >
               <option value="All">All States</option>
               <option value="Rajasthan">Rajasthan</option>
               <option value="Kerala">Kerala</option>
               <option value="Punjab">Punjab</option>
               <option value="West Bengal">West Bengal</option>
             </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedCuisines.length > 0 ? (
              displayedCuisines.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col">
                  <div 
                    className="h-56 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${item.img})`, backgroundColor: '#e5e7eb' }} 
                  />
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-amber-600 font-bold text-sm uppercase tracking-wide mb-2">{item.state}</p>
                      <h3 className="text-xl font-bold leading-tight text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500 font-medium">
                Select a different state to explore regional delicacies.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}