import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Example image imports (replace with your actual images)

import AdvLogo from "../PRODUCTS/BRANDS/assets/AdvLogo.jpg";
import BASFLogo from "../PRODUCTS/BRANDS/assets/BASF_Logo.jpg";
import BayerLogo from "../PRODUCTS/BRANDS/assets/Bayer_Logo.svg";
import BioseedLogo from "../PRODUCTS/BRANDS/assets/Bioseed_Logo.jpg";
import CrystalLogo from "../PRODUCTS/BRANDS/assets/crystal_Logo.png";
import DowLogo from "../PRODUCTS/BRANDS/assets/dow-logo.svg";
import GanagaKaveri from "../PRODUCTS/BRANDS/assets/GanagaKaveri.png";
import GodrejPesLogo from "../PRODUCTS/BRANDS/assets/GodrejPes_Logo.png";
import GodrejSeedLogo from "../PRODUCTS/BRANDS/assets/GodrejSeed_Logo.png";
import JaiKisanLogo from "../PRODUCTS/BRANDS/assets/JaiKisan_Logo.png";
import JKAGLLogo from "../PRODUCTS/BRANDS/assets/JKAGL-LOGO.webp";
import KaveriLogo from "../PRODUCTS/BRANDS/assets/KaveriLogo.png";
import MahycoGrow from "../PRODUCTS/BRANDS/assets/mahycoGrow.png";
import Nisarga from "../PRODUCTS/BRANDS/assets/Nisarga.jpg";
import OrbitLogo from "../PRODUCTS/BRANDS/assets/orbitlogo.png";
import Pioneer from "../PRODUCTS/BRANDS/assets/Pioneer.webp";
import SyngentaLogo from "../PRODUCTS/BRANDS/assets/syngenta.png";

const brands = [
  { name: "Advanta", image: AdvLogo },
  { name: "BASF", image: BASFLogo },
  { name: "Bayer", image: BayerLogo },
  { name: "Bioseed", image: BioseedLogo },
  { name: "Crystal", image: CrystalLogo },
  { name: "Dow", image: DowLogo },
  { name: "Ganaga Kaveri", image: GanagaKaveri },
  { name: "Godrej Pesticides", image: GodrejPesLogo },
  { name: "Godrej Seeds", image: GodrejSeedLogo },
  { name: "Jai Kisan", image: JaiKisanLogo },
  { name: "JK Agri Genetics", image: JKAGLLogo },
  { name: "Kaveri Seeds", image: KaveriLogo },
  { name: "Mahyco Grow", image: MahycoGrow },
  { name: "Nisarga", image: Nisarga },
  { name: "Orbit", image: OrbitLogo },
  { name: "Pioneer", image: Pioneer },
  { name: "Syngenta", image: SyngentaLogo },
];

const Brand = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading delay (e.g., data fetch)
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <motion.div
          className="flex items-center justify-center min-h-[60vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Simple spinner */}
          <svg
            className="animate-spin h-10 w-10 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        </motion.div>
      );
    }
  return (
    <motion.div
          className="px-6 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
    <div className="bg-blue-50 border-t border-b border-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-2">
          <h2 className="text-xl font-semibold text-black">Brands</h2>
          <a href="/brands" className="text-sm text-gray-600 hover:underline">
            View All
          </a>
        </div>

        {/* Brand logos horizontal slider */}
        <div className="overflow-hidden w-full relative py-4">
          <motion.div
            className="flex gap-8 min-w-max"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 18,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          >
            {/* Duplicate the logos for seamless loop */}
            {brands.concat(brands).map((brand, index) => (
              <div
                key={index}
                className="w-[120px] h-[90px] bg-white rounded-lg shadow-sm flex items-center justify-center px-4 py-2 hover:shadow-md transition"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Brand;
