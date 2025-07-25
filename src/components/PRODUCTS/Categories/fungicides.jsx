import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

import img1 from './assets/fungicides/acrobat_1.png';
import img2 from './assets/fungicides/acrobat_complete.png';
import img3 from './assets/fungicides/Aliette-campaign-banner-mob.jpg';
import img4 from './assets/fungicides/Antracol-banner-2-1024x542.png';
import img5 from './assets/fungicides/cabrio_top.png';
import img6 from './assets/fungicides/Curzate.png';
import img7 from './assets/fungicides/gomeda_new.jpg';
import img8 from './assets/fungicides/merivon_0.png';
import img9 from './assets/fungicides/nativo-banner-mob.jpg';

const fungicideProducts = [
  { id: 1, image: img1, name: 'Acrobat 1', link: '/fungicides', soldOut: false },
  { id: 2, image: img2, name: 'Acrobat Complete', link: '/fungicides', soldOut: false },
  { id: 3, image: img3, name: 'Aliette', link: '/fungicides', soldOut: false },
  { id: 4, image: img4, name: 'Antracol', link: '/fungicides', soldOut: false },
  { id: 5, image: img5, name: 'Cabrio Top', link: '/fungicides', soldOut: false },
  { id: 6, image: img6, name: 'Curzate', link: '/fungicides', soldOut: false },
  { id: 7, image: img7, name: 'Gomeda', link: '/fungicides', soldOut: false },
  { id: 8, image: img8, name: 'Merivon', link: '/fungicides', soldOut: false },
  { id: 9, image: img9, name: 'Nativo', link: '/fungicides', soldOut: false },
];

function Fungicides() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center uppercase tracking-wider">Fungicides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fungicideProducts.map((product) => (
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
            <p className="text-sm text-gray-500 mb-4">Fungicide</p>

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

export default Fungicides;