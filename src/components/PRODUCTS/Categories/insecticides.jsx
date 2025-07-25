import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

import img1 from './assets/insecticides/Deleget.png';
import img2 from './assets/insecticides/elpida_L.jpg';
import img3 from './assets/insecticides/exponus_broflanilide_insecticide_basf.png';
import img4 from './assets/insecticides/Folicur-banner-1-mob.jpg';
import img5 from './assets/insecticides/solomon-banner-mob.jpg';
import img6 from './assets/insecticides/Tracer.png';

const insecticideProducts = [
  { id: 1, image: img1, name: 'Deleget', link: '/insecticides', soldOut: false },
  { id: 2, image: img2, name: 'Elpida', link: '/insecticides', soldOut: false },
  { id: 3, image: img3, name: 'Exponus', link: '/insecticides', soldOut: false },
  { id: 4, image: img4, name: 'Folicur', link: '/insecticides', soldOut: false },
  { id: 5, image: img5, name: 'Solomon', link: '/insecticides', soldOut: false },
  { id: 6, image: img6, name: 'Tracer', link: '/insecticides', soldOut: false },
];

function Insecticides() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center uppercase tracking-wider">Insecticides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {insecticideProducts.map((product) => (
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
            <p className="text-sm text-gray-500 mb-4">Insecticide</p>

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

export default Insecticides;