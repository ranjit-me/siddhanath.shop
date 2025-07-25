
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import img1 from './assets/BACTI-OUT.png';
import img2 from './assets/Flourish.png';
import img3 from './assets/Force.png';
import img4 from './assets/RACER.png';

const orbitProducts = [
  { id: 1, image: img1, name: 'BACTI-OUT', link: '/orbit', soldOut: false, discount: '10% OFF', price: 1000, original: 1100, savings: 100, size: '1 L' },
  { id: 2, image: img2, name: 'Flourish', link: '/orbit', soldOut: false, discount: '12% OFF', price: 1050, original: 1200, savings: 150, size: '1 L' },
  { id: 3, image: img3, name: 'Force', link: '/orbit', soldOut: false, discount: '15% OFF', price: 950, original: 1120, savings: 170, size: '1 L' },
  { id: 4, image: img4, name: 'RACER', link: '/orbit', soldOut: false, discount: '8% OFF', price: 980, original: 1060, savings: 80, size: '1 L' },
];

function OrbitProducts() {
  const [loading, setLoading] = useState(true);

  // Cart logic
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

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

  if (loading) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-[60vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <svg
          className="animate-spin h-10 w-10 text-green-600"
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
      </motion.div>
    );
  }

  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {orbitProducts.map(product => (
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

            {/* Wishlist Icon */}
            <FaRegHeart className="absolute top-10 right-2 text-gray-500 hover:text-red-500 cursor-pointer text-xl" />

            {/* Product Info */}
            <h3 className="text-base font-semibold mb-1 flex items-center gap-0 justify-center text-center">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">Orbit</p>

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
    </motion.div>
  );
}

export default OrbitProducts;
