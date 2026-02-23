import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] pt-16 pb-8 px-6 text-white font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Care4All</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">Lorem Ipsum</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#eb008b] transition">Consectetur Elit</a></li>
              <li><a href="#" className="hover:text-[#eb008b] transition">Magna Aliqua</a></li>
              <li><a href="#" className="hover:text-[#eb008b] transition">Tempor Incididunt</a></li>
              <li><a href="#" className="hover:text-[#eb008b] transition">Vehicula Ipsum</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={16} className="text-[#eb008b]" /> lorem@ipsum.com
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-[#eb008b]" /> +91 9876543210
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#eb008b] transition"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#eb008b] transition"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#eb008b] transition"><Instagram size={18} /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Care4All. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;