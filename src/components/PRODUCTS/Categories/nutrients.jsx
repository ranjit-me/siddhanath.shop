import React from 'react';
import nutrientsImg from '../../assets/Neutrietns.webp';

function Nutrients() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <img
        src={nutrientsImg}
        alt="Nutrients Coming Soon"
        className="w-48 h-48 object-contain mb-6 drop-shadow-lg animate-bounce"
      />
      <h1 className="text-4xl font-bold text-green-700 mb-2 tracking-wide text-center">Coming Soon</h1>
      <p className="text-lg text-gray-600 text-center max-w-md">Our selection of crop nutrients will be available here soon. Check back for essential plant nutrition products!</p>
    </div>
  );
}

export default Nutrients;