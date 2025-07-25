import React from 'react';
import vegfruImg from '../../assets/vegfru.webp';

function VegFru() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <img
        src={vegfruImg}
        alt="Vegetables and Fruits Coming Soon"
        className="w-48 h-48 object-contain mb-6 drop-shadow-lg animate-bounce"
      />
      <h1 className="text-4xl font-bold text-green-700 mb-2 tracking-wide text-center">Coming Soon</h1>
      <p className="text-lg text-gray-600 text-center max-w-md">Our vegetables and fruits seeds/products will be available here soon. Stay tuned for fresh updates!</p>
    </div>
  );
}

export default VegFru;