import React, { useState, useEffect, useLayoutEffect } from 'react';
import Offers from './Seeds';
import Pes from './Pesticide';
import Categories from './Categories';
import Brand from './Brand';
import BASF from './BASF';
import Pioneer from './Pioneer';
import Advanta from './Advanta';
import LowerSection from './LowerSection';
import Dropdeown from './DropdownSection';

function About() {
  const [loading, setLoading] = useState(true);

  // Ensure page scrolls to top before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <svg
          className="animate-spin h-8 w-8 text-green-600"
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
      </div>
    );
  }

  return (
    <main className="bg-white">
      <Dropdeown />
      <LowerSection />
      <Offers />
      <Pes />
      <Categories />
      <Brand />
      {/* <Bestselling /> */}
      <BASF />
      <Pioneer />
      <Advanta />
    </main>
  );
}

export default About;
