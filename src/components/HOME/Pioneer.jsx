import React, { useEffect, useState } from 'react';
import img1 from '../assets/pioneer/P1_PIO3302.png';
import img2 from '../assets/pioneer/P2_PIO3502.png';
import img3 from '../assets/pioneer/P3_PIO86M38.png';
import img4 from '../assets/pioneer/P4_PIO86M38.png';
import img5 from '../assets/pioneer/P5_PIO3524.png';

const pioneerProducts = [
  { id: 1, image: img1, name: 'PIO 3302' },
  { id: 2, image: img2, name: 'PIO 3502' },
  { id: 3, image: img3, name: 'PIO 86M38' },
  { id: 4, image: img4, name: 'PIO 86M38 (2)' },
  { id: 5, image: img5, name: 'PIO 3524' },
];

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Pioneer() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const isInCart = (productId) => cart.some((item) => item.id === productId);

  return (
    <div className="bg-blue-50 border-t border-b border-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-gray-300 pb-2">
          <h2 className="text-2xl font-bold text-green-700 uppercase tracking-wider">Pioneer Products</h2>
          <a href="/pioneer" className="text-sm text-gray-600 hover:underline">View All</a>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-8 min-w-max">
            {pioneerProducts.map((product) => (
              <div
                key={product.id}
                className="w-[220px] border rounded-xl shadow bg-white flex flex-col items-center p-4 hover:shadow-lg transition flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 object-contain mb-4"
                />
                <h3 className="text-base font-semibold mb-1 text-center">{product.name}</h3>
                <p className="text-xs text-gray-500 text-center mb-4">Pioneer Product</p>
                <div className="flex gap-2 w-full">
                  <a
                    href={`https://wa.me/918530457607?text=${encodeURIComponent(`Hello, this is a message from Siddhanath.shop. I am interested in purchasing *${product.name}* (Pioneer Product).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg font-medium transition"
                  >
                    Buy Now on WhatsApp
                  </a>
                  <button
                    type="button"
                    className={`flex items-center justify-center px-4 py-2 rounded-lg font-medium transition ${isInCart(product.id) ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-green-700'}`}
                    title={isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                    onClick={() => addToCart(product)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pioneer;