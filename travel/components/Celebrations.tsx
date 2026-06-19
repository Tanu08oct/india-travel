'use client'
export default function Celebrations() {
  const events = [
    { date: "16-19 Jul", title: "Bastar Goncha Festival", img: "/images/bastar.jpg" },
    { date: "15 Aug", title: "Teej: Celebrating love, devotion, and monsoons", img: "/images/teej.jpg" },
    { date: "15 Aug", title: "Independence Day: Celebrating India's freedom", img: "/images/independence.jpg" }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col justify-center h-full">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">— Every day a —</p>
        <h2 className="text-5xl md:text-7xl font-black text-red-600 tracking-tight uppercase">Celebration</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <div className="flex bg-gray-200 rounded-full p-1 shadow-inner">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-md">Festivals</button>
          <button className="text-gray-700 hover:bg-gray-300 px-6 py-2 rounded-full font-bold transition">Events</button>
        </div>
        <select className="px-6 py-2 rounded-full border border-gray-300 outline-none focus:border-red-600 bg-white font-medium cursor-pointer shadow-sm">
          <option>By Month</option>
        </select>
        <select className="px-6 py-2 rounded-full border border-gray-300 outline-none focus:border-red-600 bg-white font-medium cursor-pointer shadow-sm">
          <option>By States & UTs</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((evt, idx) => (
          <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${evt.img})`, backgroundColor: '#e5e7eb' }} />
              <div className="absolute bottom-4 left-4 bg-red-600 text-white font-black px-4 py-2 rounded-lg shadow-lg">
                {evt.date}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition">{evt.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}