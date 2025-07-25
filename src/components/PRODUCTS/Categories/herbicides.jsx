import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

import img1 from './assets/herbicide/Laudis-banner-1024x542.png';
import img2 from './assets/herbicide/Pursuit.jpg';
import img3 from './assets/herbicide/Goal.png';
import img4 from './assets/herbicide/cedaar_L.jpg';
import img5 from './assets/herbicide/basta_1l_bottle-.jpg';
import img6 from './assets/herbicide/roundup-banner-mob-1.jpg';
import img7 from './assets/herbicide/tynzer_packshot_-_21_march-left_facing_-_merged.png';
import img8 from './assets/herbicide/vesnit_complete_1l_latest_packshot.png';

const herbicideProducts = [
  { id: 1, image: img1, name: 'Laudis', link: '/herbicides', soldOut: false },
  { id: 2, image: img2, name: 'Pursuit', link: '/herbicides', soldOut: false },
  { id: 3, image: img3, name: 'Goal', link: '/herbicides', soldOut: false },
  { id: 4, image: img4, name: 'Cedaar', link: '/herbicides', soldOut: false },
  { id: 5, image: img5, name: 'Basta', link: '/herbicides', soldOut: false },
  { id: 6, image: img6, name: 'Roundup', link: '/herbicides', soldOut: false },
  { id: 7, image: img7, name: 'Tynzer', link: '/herbicides', soldOut: false },
  { id: 8, image: img8, name: 'Vesnit Complete', link: '/herbicides', soldOut: false },
];


function Herbicides() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center uppercase tracking-wider">Herbicides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {herbicideProducts.map((product) => (
          <div key={product.id} className="relative border rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col">
            {/* Sold Out Badge */}
            {product.soldOut && (
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                SOLD OUT
              </span>
            )}

            {/* Product Image */}
            <a href={product.link} className="flex justify-center items-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className={`h-40 object-contain ${product.soldOut ? 'opacity-50' : ''}`}
              />
            </a>

            {/* Heart Icon */}
            <FaRegHeart className="absolute top-10 right-2 text-gray-500 hover:text-red-500 cursor-pointer text-xl" />

            {/* Product Info */}
            <h3 className="text-base font-semibold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-4">Herbicide</p>

            {/* Buy Button */}
            <a
              href={
                product.soldOut
                  ? '#'
                  : `https://wa.me/918530457607?text=${encodeURIComponent(
                      `Hello, this is a message from Siddhanath.shop. I am interested in purchasing *${product.name}*.`
                    )}`
              }
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => product.soldOut && e.preventDefault()}
              className={`text-white text-center py-2 rounded-xl transition ${
                product.soldOut
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {product.soldOut ? 'Out of Stock' : 'Buy Now on WhatsApp'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Herbicides;