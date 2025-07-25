import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import BASF from './BRANDS/BASF/BASFProducts';
import Bayer from './BRANDS/Bayer/BayerProducts';
import Dow from './BRANDS/Dow/DowProducts';
import GodrejRoute from './BRANDS/GodrejPes/GodrejPesticideProducts';
import NisargaRoute from './BRANDS/Nisarga/NisargaProducts';
import OrbitRoute from './BRANDS/Orbit/OrbitProducts';
import Syngenta from './BRANDS/SYNGENTA/SyngentaProducts';

function Pesticide() {
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
      <h1 className="text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-300 pb-2">Pesticide</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">BASF</h2>
      <BASF />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Bayer</h2>
      <Bayer />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Dow</h2>
      <Dow />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Godrej Pes</h2>
      <GodrejRoute />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Nisarga</h2>
      <NisargaRoute />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Orbit</h2>
      <OrbitRoute />

      <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Syngenta</h2>
      <Syngenta />
    </motion.div>
  );
}

export default Pesticide;