'use client'
import { useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'

// Updated data structure where each individual stop has its own unique text
const itineraryData = {
  North: {
    regionTitle: "The Royal Trail",
    stops: [
      {
        name: "Jaipur",
        title: "The Pink City Grandeur",
        description: "Immerse yourself in the majestic Hawa Mahal, historic Amer Fort, and vibrant local bazaars filled with royal heritage.",
        image: "/images/itineraries/Hawa-mahal.jpg"
      },
      {
        name: "Udaipur",
        title: "Venice of the East",
        description: "Relax beside pristine lakes, explore floating palaces, and witness breathtaking sunsets over Lake Pichola.",
        image: "/images/itineraries/Udaipur.jpg"
      },
      {
        name: "Jodhpur",
        title: "The Blue Fortress City",
        description: "Gaze out over a sea of indigo houses from the towering heights of the historic Mehrangarh Fort.",
        image: "/images/itineraries/Umaid-bhawan.jpg"
      }
    ]
  },
  Center: {
    regionTitle: "Heart of Heritage",
    stops: [
      {
        name: "Khajuraho",
        title: "Ancient Stone Artistry",
        description: "Marvel at the intricate, world-famous temple carvings and architectural wonders dating back to the Chandela dynasty.",
        image: "/images/itineraries/Khujaraho-temple.jpg"
      },
      {
        name: "Kanha",
        title: "The Wild Tiger Reserves",
        description: "Embark on deep jungle safaris through lush sal forests that inspired Rudyard Kipling's famous Jungle Book.",
        image: "/images/itineraries/Kanha-tiger.jpg"
      },
      {
        name: "Gwalior",
        title: "The Impregnable Fort",
        description: "Explore the massive hilltop Gwalior Fort, a masterpiece of medieval defensive architecture and palaces.",
        image: "/images/itineraries/Orchha-gwalior.jpg"
      }
    ]
  },
  South: {
    regionTitle: "Backwaters & Spice",
    stops: [
      {
        name: "Alleppey",
        title: "Serene Emerald Backwaters",
        description: "Cruise along peaceful tropical canals on a traditional luxury houseboat fringed by swaying palm trees.",
        image: "/images/itineraries/Alleppey-houseboats.jpg"
      },
      {
        name: "Munnar",
        title: "Misty Tea Landscapes",
        description: "Walk through sprawling, high-altitude green tea estates blanketed in cool, refreshing mountain fog.",
        image: "/images/itineraries/Munnar-tea-garden.jpg"
      },
      {
        "name": "Madurai",
        "title": "Ancient Temple City",
        "description": "Explore the majestic Meenakshi Amman Temple, vibrant bazaars, and millennia of living Dravidian culture.",
        "image": "/images/itineraries/Madurai-temple.jpg"
      }
    ]
  },
  East: {
    regionTitle: "Mystical Horizons",
    stops: [
      {
        name: "Darjeeling",
        title: "Himalayan Sunrise Peaks",
        description: "Watch the golden sun dawn over Mount Kanchenjunga while riding the historic Himalayan steam toy train.",
        image: "/images/itineraries/Darjeeling-Himalayas.jpg"
      },
      {
        name: "Gangtok",
        title: "Sacred Cloud Monasteries",
        description: "Experience serene Buddhist culture, high-altitude alpine lakes, and panoramic Tibetan highland views.",
        image: "/images/itineraries/Gangtok-monastery.jpg"
      },
      {
        name: "Umngot River",
        title: "The Glass River of India",
        description: "Glide over supernatural, crystal-clear emerald waters where boats appear to float mid-air against a backdrop of pristine hills.",

        image: "/images/itineraries/Meghalaya-dawki.jpg"
      }
    ]
  }
}

type RegionKey = keyof typeof itineraryData

export default function Itineraries() {
  const [activeRegion, setActiveRegion] = useState<RegionKey>('North')
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)
  const regions: RegionKey[] = ['North', 'Center', 'South', 'East']

  const currentItinerary = itineraryData[activeRegion]
  const currentStop = currentItinerary.stops[activeImageIndex]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 h-full flex flex-col justify-center select-none">

      {/* Top Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Curated Itineraries</h2>
          <div className="flex gap-6 mt-5">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => {
                  setActiveRegion(region)
                  setActiveImageIndex(0) // Batches cleanly together; no cascading render!
                }}
                className={`text-lg font-semibold pb-1.5 transition-all duration-300 relative ${activeRegion === region
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-400 hover:text-gray-900'
                  }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
        <button className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition duration-300 group/btn">
          Explore more Itineraries
          <ArrowRight size={20} className="transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Main Showcase Hero Card */}
      <div className="relative w-full min-h-[550px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900 group">

        {/* Dynamic Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out scale-100 group-hover:scale-102"
          style={{ backgroundImage: `url('${currentStop.image}')` }}
        />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content Layer Container */}
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">

          {/* Badge Label */}
          <div className="self-end bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-medium border border-white/20 tracking-wide shadow-sm">
            {activeRegion} India Specials
          </div>

          {/* Dynamic Content and Image Control Buttons */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 w-full">

            {/* Dynamic Text Information */}
            <div className="max-w-xl text-white transition-all duration-300">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-widest block mb-1">
                Currently Viewing • {currentStop.name}
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight tracking-tight drop-shadow-sm">
                {currentStop.title}
              </h3>
              <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed min-h-[48px] line-clamp-3">
                {currentStop.description}
              </p>
              <button className="bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-950/20 hover:shadow-orange-600/20 transform hover:-translate-y-0.5 active:translate-y-0 transition duration-200 text-sm uppercase tracking-wider">
                Book This Itinerary
              </button>
            </div>

            {/* Fixed 3-Image Selection Grid */}
            <div className="grid grid-cols-3 gap-3 w-full lg:w-auto shrink-0 pt-4 border-t border-white/10 lg:border-none">
              {currentItinerary.stops.map((stop, index) => {
                const isSelected = activeImageIndex === index;
                return (
                  <button
                    key={stop.name}
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-24 w-full lg:w-28 xl:w-32 rounded-2xl overflow-hidden relative border-2 transition-all duration-300 ease-out transform ${isSelected
                      ? 'border-orange-500 ring-4 ring-orange-500/20 scale-105 shadow-xl opacity-100'
                      : 'border-white/30 opacity-65 hover:opacity-95 hover:border-white/60 hover:scale-102'
                      }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${stop.image}')` }}
                    />
                    <div className={`absolute inset-0 transition-colors duration-300 ${isSelected ? 'bg-black/20' : 'bg-black/40'}`} />

                    <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-white text-[11px] md:text-xs font-bold flex items-center justify-center gap-1 text-center truncate">
                        <MapPin size={10} className={isSelected ? 'text-orange-400' : 'text-white'} />
                        {stop.name}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

          </div>
        </div>
      </div>

      {/* Fallback Mobile Button */}
      <button className="md:hidden mt-6 w-full flex justify-center items-center gap-2 text-blue-600 font-semibold py-3.5 border border-blue-600 rounded-xl hover:bg-blue-50 transition">
        Explore more Itineraries
      </button>
    </div>
  )
}