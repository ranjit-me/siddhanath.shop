import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Advanta from './BRANDS/ADVANTA/AdvantaProducts';
import Crystel from './BRANDS/CRYSTEL SEED/CrystelProducts';
import GanagaKaveri from './BRANDS/GANGAKAVERI/GKProducts';
import BioseedRoute from './BRANDS/BioSeed/BioSeedProducts';
import JkSeed from './BRANDS/JK SEED/JKProducts';
import KaveriSeed from './BRANDS/KAVRI SEED/KaveriSeedProducts';
import Mahyco from './BRANDS/MAHYCO/MahycoProducts';
import GodrejSeedRoute from './BRANDS/GodrejSeed/GodrejSeedProducts';

function Seeds() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <h1 className="text-4xl font-bold text-green-700 mb-6 border-b-2 border-green-300 pb-2">Seeds</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Advanta</h2>
      <Advanta />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Crystel</h2>
      <Crystel />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Ganaga Kaveri</h2>
      <GanagaKaveri />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Bioseed</h2>
      <BioseedRoute />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">JK Seed</h2>
      <JkSeed />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Kaveri Seed</h2>
      <KaveriSeed />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Mahyco</h2>
      <Mahyco />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Godrej Seed</h2>
      <GodrejSeedRoute />
    </motion.div>
  );
}

export default Seeds;