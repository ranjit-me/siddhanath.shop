
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import img1 from './assets/Boss.png';
import img2 from './assets/ESM.png';
import img3 from './assets/Nutri-Fert DF.png';
import img4 from './assets/Nutri-Fine.png';
import img5 from './assets/Potochill-K.png';
import img6 from './assets/Rocket.png';
import img7 from './assets/Root_Bahar.png';
import img8 from './assets/Sequence Boron.png';
import img9 from './assets/Sequence Calcium.png';
import img10 from './assets/Sequence CMB.png';
import img11 from './assets/Sequence Copper.png';
import img12 from './assets/Sequence Ferrous.png';
import img13 from './assets/Sequence Magnese Super.png';
import img14 from './assets/Sequence Magnese.png';
import img15 from './assets/Sequence Zinc.png';
import img16 from './assets/Sequence.png';

const nisargaProducts = [
  { id: 1, image: img1, name: 'Boss', link: '/nisarga', soldOut: false, discount: '10% OFF', price: 1000, original: 1100, savings: 100, size: '1 L' },
  { id: 2, image: img2, name: 'ESM', link: '/nisarga', soldOut: false, discount: '12% OFF', price: 1050, original: 1200, savings: 150, size: '1 L' },
  { id: 3, image: img3, name: 'Nutri-Fert DF', link: '/nisarga', soldOut: false, discount: '15% OFF', price: 950, original: 1120, savings: 170, size: '1 Kg' },
  { id: 4, image: img4, name: 'Nutri-Fine', link: '/nisarga', soldOut: false, discount: '8% OFF', price: 980, original: 1060, savings: 80, size: '1 Kg' },
  { id: 5, image: img5, name: 'Potochill-K', link: '/nisarga', soldOut: false, discount: '20% OFF', price: 1200, original: 1500, savings: 300, size: '1 L' },
  { id: 6, image: img6, name: 'Rocket', link: '/nisarga', soldOut: false, discount: '18% OFF', price: 1100, original: 1340, savings: 240, size: '1 L' },
  { id: 7, image: img7, name: 'Root Bahar', link: '/nisarga', soldOut: false, discount: '14% OFF', price: 990, original: 1150, savings: 160, size: '1 L' },
  { id: 8, image: img8, name: 'Sequence Boron', link: '/nisarga', soldOut: false, discount: '16% OFF', price: 1020, original: 1210, savings: 190, size: '1 L' },
  { id: 9, image: img9, name: 'Sequence Calcium', link: '/nisarga', soldOut: false, discount: '10% OFF', price: 1000, original: 1100, savings: 100, size: '1 L' },
  { id: 10, image: img10, name: 'Sequence CMB', link: '/nisarga', soldOut: false, discount: '12% OFF', price: 1050, original: 1200, savings: 150, size: '1 L' },
  { id: 11, image: img11, name: 'Sequence Copper', link: '/nisarga', soldOut: false, discount: '15% OFF', price: 950, original: 1120, savings: 170, size: '1 L' },
  { id: 12, image: img12, name: 'Sequence Ferrous', link: '/nisarga', soldOut: false, discount: '8% OFF', price: 980, original: 1060, savings: 80, size: '1 L' },
  { id: 13, image: img13, name: 'Sequence Magnese Super', link: '/nisarga', soldOut: false, discount: '20% OFF', price: 1200, original: 1500, savings: 300, size: '1 L' },
  { id: 14, image: img14, name: 'Sequence Magnese', link: '/nisarga', soldOut: false, discount: '18% OFF', price: 1100, original: 1340, savings: 240, size: '1 L' },
  { id: 15, image: img15, name: 'Sequence Zinc', link: '/nisarga', soldOut: false, discount: '14% OFF', price: 990, original: 1150, savings: 160, size: '1 L' },
  { id: 16, image: img16, name: 'Sequence', link: '/nisarga', soldOut: false, discount: '16% OFF', price: 1020, original: 1210, savings: 190, size: '1 L' },
];


function NisargaProducts() {
  // Cart logic
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
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {nisargaProducts.map((product) => (
        <div
          key={product.id}
          className="relative border rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
        >
          {/* Discount Badge */}
          

          {/* Sold Out Badge */}
          {product.soldOut && (
            <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              SOLD OUT
            </span>
          )}

          {/* Product Image */}
          <Link to={product.link} className="flex justify-center items-center mb-4 pointer-events-auto">
            <img
              src={product.image}
              alt={product.name}
              className={`h-40 object-contain ${product.soldOut ? 'opacity-50' : ''}`}
            />
          </Link>

          {/* Heart Icon */}
          <FaRegHeart className="absolute top-10 right-2 text-gray-500 hover:text-red-500 cursor-pointer text-xl" />

          {/* Product Info */}
          <h3 className="text-base font-semibold mb-1 flex items-center gap-0 justify-center text-center">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-4">Nisarga</p>

          <div className="flex gap-2 w-full mt-2">
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
              className={`flex-1 text-white text-center py-2 rounded-xl transition ${
                product.soldOut
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {product.soldOut ? 'Out of Stock' : 'Buy Now on WhatsApp'}
            </a>
            <button
              type="button"
              className={`flex items-center justify-center px-4 py-2 rounded-lg font-medium transition ${isInCart(product.id) ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-green-700'}`}
              title={isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
              onClick={() => {
                if (!isInCart(product.id)) addToCart(product);
              }}
              disabled={product.soldOut}
            >
              <FontAwesomeIcon icon={faCartShopping} className={isInCart(product.id) ? 'text-white' : 'text-green-700'} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NisargaProducts;
