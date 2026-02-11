"use client"
import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (

    <footer className="bg-gradient-to-r from-gray-800 via-black to-gray-800 text-gray-400 mt-16 border-t border-gray-800">
      
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Social */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com/chhaaya.cbit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-red-500"><Instagram size={18}/></a>
          <a href="#" className="hover:text-red-500"><Facebook size={18}/></a>
          <a href="#" className="hover:text-red-500"><Youtube size={18}/></a>
        </div>
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Chhaaya. All rights reserved.
        </p>

        {/* Contact */}
        <div className="flex items-center gap-6 text-sm">
          <span className="flex items-center gap-1">
            <Mail size={16}/> chaaya.cbit@gmail.com
          </span>

          <span className="flex items-center gap-1">
            <Phone size={16}/> +91 7893360972
          </span>
        </div>

        

      </div>
    </footer>
  );
}
