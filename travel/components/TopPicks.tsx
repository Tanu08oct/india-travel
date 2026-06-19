import { ArrowUpRight } from 'lucide-react'

export default function TopPicks() {
  const dummyPicks = [
    { id: 1, title: "Chittorgarh Fort & Heritage Walk", price: "Starting at ₹ 14,000", image: "/images/toppicks/Rajasthan-bg.png", span: "col-span-12 md:col-span-5" },
    { id: 2, title: "The Incredible Golden Triangle", price: "Starting at ₹ 34,000", image: "/images/toppicks/Golden-triangle-bg.png", span: "col-span-12 md:col-span-7" },
    { id: 3, title: "Char Dham: Journey of Faith", price: "Thomas Cook India", image: "/images/toppicks/Himalayan-bg.png", span: "col-span-12 md:col-span-4" },
    { id: 4, title: "Build Your Own Itinerary!", subtitle: "Customize your flights & hotels in 10 minutes", image: "/images//toppicks/plan-your-itinerary-bg.png", span: "col-span-12 md:col-span-4" },
    { id: 5, title: "Kerala", subtitle: "Crafted in a language only nature knows", price: "Starting at ₹ 16,400", image: "/images/toppicks/kerala.png", span: "col-span-12 md:col-span-4" },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Top Travel Picks</h2>
      
      <div className="grid grid-cols-12 gap-6">
        {dummyPicks.map((pick) => (
          <div key={pick.id} className={`relative rounded-2xl overflow-hidden group h-[300px] md:h-[400px] cursor-pointer shadow-lg ${pick.span}`}>
            {/* Background Image Setup */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${pick.image}), linear-gradient(gray, gray)` }} 
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{pick.title}</h3>
                {pick.subtitle && <p className="text-white/90 mt-1">{pick.subtitle}</p>}
                {pick.price && <p className="text-white/80 mt-1 text-sm">{pick.price}</p>}
              </div>
              
              <div className="self-start">
                <button className="bg-white/90 hover:bg-white text-gray-900 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                  View More <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}