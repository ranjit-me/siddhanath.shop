import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#025f4b] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid md:grid-cols-3 gap-12 text-sm">
        
        {/* Left: About */}
        <div>
          <h2 className="text-2xl font-bold text-[#3ecf8e] mb-4">Siddhanath Krushi Kendra</h2>
          <p className="text-gray-300 leading-relaxed">
            Empowering farmers with modern agriculture solutions across India. We deliver technology, affordability, and accessibility — revolutionizing Indian farming.
          </p>
          <div className="mt-4 text-gray-400 space-y-2">
            <p>Email: <a href="mailto:billing.agrisstore@gmail.com" className="text-[#3ecf8e] hover:underline">billing.agrisstore@gmail.com</a></p>
            <p>Address: Mangalwedha, Solapur District, Maharashtra, India</p>
          </div>
        </div>

        {/* Middle: Contact Numbers */}
        <div className="space-y-6">
          <div>
            <p className="text-lg font-semibold text-[#3ecf8e] mb-2">Contact Us</p>
            <div className="space-y-2">
              <div>
                <p className="text-gray-300">Contact Number</p>
                <button className="mt-1 bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 transition">
                  +91 8530457607
                </button>
              </div>
              <div>
                <p className="text-gray-300 flex items-center gap-2">
                  <FaWhatsapp className="text-green-400" /> WhatsApp
                </p>
                <a
                  href="https://wa.me/918788489254"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-1 bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition">
                    +91 8788489254
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-lg font-semibold text-[#3ecf8e] mb-4">Stay Connected</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/siddhanath_official"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#3ecf8e] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/siddhanathkofficial"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[#3ecf8e] transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.youtube.com/@siddhanathkrushikendra"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-[#3ecf8e] transition"
            >
              <FaYoutube size={20} />
            </a>
            {/* Optional */}
            {/* <a href="#" aria-label="Twitter" className="hover:text-[#3ecf8e]"><FaXTwitter size={20} /></a> */}
            {/* <a href="#" aria-label="LinkedIn" className="hover:text-[#3ecf8e]"><FaLinkedinIn size={20} /></a> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#141917] py-4 text-center text-gray-500 text-sm border-t border-gray-700">
        © 2025 Siddhanath Krushi Kendra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
