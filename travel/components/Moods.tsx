'use client'
import { ArrowUpRight } from 'lucide-react'

export default function Moods() {
  const moods = ['Honeymoon', 'Spiritual', 'Culture', 'Leisure', 'Backpacker']
  
  const journeys = [
    { title: "Char Dham Yatra By Helicopter", price: "2 36 500", img: "/images/chardham-heli.jpg" },
    { title: "Kailash Mansarovar via Kathmandu", price: "3 07 000", img: "/images/kailash-1.jpg" },
    { title: "Kailash Mansarovar via Lucknow", price: "2 87 000", img: "/images/kailash-2.jpg" },
    { title: "Overland Kailash Yatra (By Bus)", price: "2 37 000", img: "/images/kailash-3.jpg" }
  ]

  return (
    <div className="w-full min-h-screen bg-[#f16422] text-white flex flex-col justify-center py-12 relative overflow-hidden">
      {/* Decorative background mandala/pattern (optional placeholder) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold">Explore by your mood</h2>
          <div className="flex flex-wrap gap-4 md:gap-6 text-lg font-medium border-b border-white/30 pb-2">
            {moods.map((mood, idx) => (
              <span key={idx} className={`cursor-pointer pb-2 ${mood === 'Spiritual' ? 'text-yellow-300 border-b-2 border-yellow-300' : 'hover:text-yellow-200 transition'}`}>
                {mood}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeys.map((journey, idx) => (
            <div key={idx} className="bg-gray-800 rounded-2xl overflow-hidden relative group aspect-[3/4] shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${journey.img})`, backgroundColor: '#374151' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold leading-tight mb-2">{journey.title}</h3>
                  <p className="text-sm text-gray-300">Starting at ₹ {journey.price}</p>
                </div>
                <button className="self-end bg-yellow-400 hover:bg-yellow-300 text-black p-3 rounded-full transition transform group-hover:-translate-y-2 shadow-lg">
                  <ArrowUpRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}