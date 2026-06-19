import { ArrowUpRight } from 'lucide-react';

export default function HelpSection() {
  return (
    <div className="w-full h-full relative flex items-center">
      {/* Background image covering the section */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/help-bg.jpg')", backgroundColor: '#0f172a' }}
      />
      <div className="absolute inset-0 bg-gray-900/40 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side text */}
        <div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg">
            Need help choosing <br /> your destination?
          </h2>
          <p className="text-xl text-white font-medium drop-shadow-md">
            Speak to our travel expert for a trip tailored just for you.
          </p>
        </div>

        {/* Right Side Form (Django-friendly structure) */}
        <div className="p-15">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl max-w-md w-full ml-auto">
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Enter Name" 
              className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-600 outline-none"
            />
            
            <div className="flex border border-gray-300 rounded-xl overflow-hidden focus-within:border-blue-600 transition-colors">
              <span className="bg-gray-50 p-4 border-r border-gray-300 text-gray-600">+91</span>
              <input 
                type="tel" 
                placeholder="Enter Mobile No." 
                className="w-full p-4 outline-none"
              />
            </div>

            <input 
              type="email" 
              placeholder="Enter Mail ID" 
              className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-600 outline-none"
            />

            <select className="w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-600 focus:border-blue-600 outline-none appearance-none">
              <option value="">Select Destination</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="kerala">Kerala</option>
              <option value="ladakh">Ladakh</option>
            </select>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 w-5 h-5 rounded text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 leading-tight">
                I accept the Privacy Policy and authorize Incredible India and Group of Companies to contact me with details.
              </span>
            </label>

            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition shadow-lg flex justify-center items-center gap-2">
              Request a Callback <ArrowUpRight size={20} />
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}