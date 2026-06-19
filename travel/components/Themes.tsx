import { ArrowUpRight } from 'lucide-react'

export default function Themes() {
  const categories = [
    { name: "Beach", img: "/images/beach.jpg" },
    { name: "Wildlife", img: "/images/wildlife.jpg" },
    { name: "Adventure/Trekking", text: "Sari Village to Deoria Tal", img: "/images/trekking.jpg", isFeatured: true },
    { name: "Heritage", img: "/images/heritage2.jpg" },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Explore Themes that Inspire Travel</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="relative rounded-[2rem] overflow-hidden aspect-[9/16] group shadow-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${cat.img}), linear-gradient(gray, gray)` }} 
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
            
            {/* Top Right Action Button if Featured */}
            {cat.isFeatured && (
              <div className="absolute top-4 right-4 bg-yellow-400 p-3 rounded-full cursor-pointer hover:bg-yellow-300 transition">
                <ArrowUpRight size={20} className="text-gray-900" />
              </div>
            )}

            {/* Vertical Title */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold -rotate-90 origin-bottom-left absolute bottom-0 left-0 tracking-wider">
                {cat.name}
              </h3>
              {cat.text && (
                 <div className="ml-12 mt-12 bg-black/50 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                    <p className="text-sm">{cat.text}</p>
                 </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}