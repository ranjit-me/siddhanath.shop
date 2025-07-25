
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import P1_K50 from './assets/P1_K50.png';
import P2_CHAMP from './assets/P2_CHAMP.jpg';
import P3_Dhaara from './assets/P3_Dhaara.jpg';
import P4_SunKranti from './assets/P4_SunKranti.jpg';
import P5_KMH37112 from './assets/P5_KMH3712.png';
import P6_K244 from './assets/P6_K244+.png';
import P7_KMH8333 from './assets/P7_KMH8333.webp';
import P8_KMH8322 from './assets/P8_KMH8322.png';

const products = [
  { id: 1, image: P1_K50, name: 'K50 Seed', link: '/kaveri', soldOut: false, discount: '10% OFF', price: 1000, original: 1100, savings: 100, size: '4 Kg' },
  { id: 2, image: P2_CHAMP, name: 'CHAMP Seed', link: '/kaveri', soldOut: false, discount: '12% OFF', price: 1050, original: 1200, savings: 150, size: '4 Kg' },
  { id: 3, image: P3_Dhaara, name: 'Dhaara Seed', link: '/kaveri', soldOut: false, discount: '15% OFF', price: 950, original: 1120, savings: 170, size: '4 Kg' },
  { id: 4, image: P4_SunKranti, name: 'SunKranti Seed', link: '/kaveri', soldOut: false, discount: '8% OFF', price: 980, original: 1060, savings: 80, size: '4 Kg' },
  { id: 5, image: P5_KMH37112, name: 'KMH37112 Seed', link: '/kaveri', soldOut: false, discount: '20% OFF', price: 1200, original: 1500, savings: 300, size: '4 Kg' },
  { id: 6, image: P6_K244, name: 'K244+ Seed', link: '/kaveri', soldOut: false, discount: '18% OFF', price: 1100, original: 1340, savings: 240, size: '4 Kg' },
  { id: 7, image: P7_KMH8333, name: 'KMH8333 Seed', link: '/kaveri', soldOut: false, discount: '14% OFF', price: 990, original: 1150, savings: 160, size: '4 Kg' },
  { id: 8, image: P8_KMH8322, name: 'KMH8322 Seed', link: '/kaveri', soldOut: false, discount: '16% OFF', price: 1020, original: 1210, savings: 190, size: '4 Kg' },
];


function AllProducts() {
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
      {products.map((product) => (
        <div
          key={product.id}
          className="relative border rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
        >
          {/* Discount Badge */}
          <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.discount}
          </span>

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
          <p className="text-sm text-gray-500 mb-4">K Seeds</p>

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

export default AllProducts;
