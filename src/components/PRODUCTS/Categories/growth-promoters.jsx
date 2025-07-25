import React from 'react';
import growthImg from '../../assets/Growth.webp';

function GrowthPromoters() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <img
        src={growthImg}
        alt="Growth Promoters Coming Soon"
        className="w-48 h-48 object-contain mb-6 drop-shadow-lg animate-bounce"
      />
      <h1 className="text-4xl font-bold text-green-700 mb-2 tracking-wide text-center">Coming Soon</h1>
      <p className="text-lg text-gray-600 text-center max-w-md">Our range of growth promoters will be available here soon. Stay tuned for products that help your crops thrive!</p>
    </div>
  );
}

export default GrowthPromoters;