import Link from 'next/link'
import {  Send, Phone, MapPin } from 'lucide-react'
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f6f0] text-gray-800 border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* Left: Contact & Socials */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-gray-900 tracking-wider">iNCREDIBLE iNDIA</h3>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-600 font-medium">
              <Phone size={20} className="text-orange-600" /> +91 1800 123 4567
            </p>
            <p className="flex items-start gap-3 text-gray-600 font-medium">
              <MapPin size={20} className="text-orange-600 shrink-0 mt-1" /> 
              Transport Bhawan, Parliament Street,<br/>New Delhi, 110001
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition shadow-md"><FaYoutube size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:scale-110 transition shadow-md"><FaInstagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition shadow-md"><Send size={20} /></a>
          </div>
        </div>

        {/* Middle: Circular Subscribe Widget */}
        <div className="flex justify-center relative">
           {/* Outer Ring Image placeholder */}
           <div className="absolute inset-0 rounded-full border-[20px] border-dashed border-orange-200 animate-spin-slow scale-110 opacity-50 z-0" style={{ backgroundImage: "url('/images/monuments-circle.png')" }} />
           
           <div className="relative z-10 w-72 h-72 rounded-full bg-[#f8f6f0] border-4 border-orange-400 shadow-2xl flex flex-col items-center justify-center p-6 text-center">
              <h4 className="font-bold text-xl mb-4">Subscribe <br/> <span className="text-base font-medium">for regular updates</span></h4>
              <input 
                type="email" 
                placeholder="Enter your Email Id" 
                className="w-full text-center px-4 py-2 border border-gray-300 rounded-md mb-3 outline-none focus:border-orange-500 text-sm"
              />
              <button className="bg-[#e9455e] hover:bg-[#d0364d] text-white font-bold text-sm px-6 py-2 rounded-md transition shadow-md">
                SUBSCRIBE
              </button>
           </div>
        </div>

        {/* Right: Quick Links */}
        <div className="flex md:justify-end">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 font-medium text-gray-600">
              <li><Link href="/about" className="hover:text-orange-600 transition">About Us</Link></li>
              <li><Link href="/destinations" className="hover:text-orange-600 transition">Destinations</Link></li>
              <li><Link href="/guidelines" className="hover:text-orange-600 transition">Travel Guidelines</Link></li>
              <li><Link href="/visa" className="hover:text-orange-600 transition">E-Visa Info</Link></li>
              <li><Link href="/privacy" className="hover:text-orange-600 transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 text-sm text-gray-500 font-medium">
        © 2026 Incredible India | All Rights Reserved.
      </div>
    </footer>
  )
}