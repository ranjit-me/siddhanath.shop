
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import P1_ADV752 from './assets/P1_ADV752.png';
import P2_ADV757 from './assets/P2_ADV757.png';
import P3_ADV759 from './assets/P3_ADV759.png';
import P4_ADV765 from './assets/P4_ADV765.png';
import P5_ADV768 from './assets/P5_ADV768.png';
import P6_ADV771 from './assets/P6_ADV771.png';
import P7_ADV9293 from './assets/P7_ADV9293.png';
import P8_PAC741 from './assets/P8_PAC741.png';
import P9_PAC745GOLD from './assets/P9_PAC745GOLD.png';
import P10_PAC751ELITE from './assets/P10_PAC751ELITE.png';
import P11_PAC938 from './assets/P11_PAC938.png';
import P12_PAC334 from './assets/P12_PAC334.png';
import P13_MEGASWEET from './assets/P13_MEGASWEET.png';

const products = [
  { id: 1, image: P1_ADV752, name: 'ADV752 Maize Seeds', link: '/advanta', soldOut: true },
  { id: 2, image: P2_ADV757, name: 'ADV757 Maize Seeds', link: '/advanta', soldOut: true },
  { id: 3, image: P3_ADV759, name: 'ADV759 Maize Seeds', link: '/advanta', soldOut: false },
  { id: 4, image: P4_ADV765, name: 'ADV765 Maize Seeds', link: '/advanta', soldOut: false },
  { id: 5, image: P5_ADV768, name: 'ADV768 Maize Seeds', link: '/advanta', soldOut: false },
  { id: 6, image: P6_ADV771, name: 'ADV771 Maize Seeds', link: '/advanta', soldOut: true },
  { id: 7, image: P7_ADV9293, name: 'ADV9293 Maize Seeds', link: '/advanta', soldOut: false },
  { id: 8, image: P8_PAC741, name: 'PAC741 Maize Seeds', link: '/advanta', soldOut: false },
  { id: 9, image: P9_PAC745GOLD, name: 'PAC745GOLD Maize Seeds', link: '/advanta', soldOut: false },
  { id: 10, image: P10_PAC751ELITE, name: 'PAC751ELITE Maize Seeds', link: '/advanta', soldOut: false },
  { id: 11, image: P11_PAC938, name: 'PAC938 Maize Seeds', link: '/advanta', soldOut: false },
  { id: 12, image: P12_PAC334, name: 'PAC334 Maize Seeds', link: '/advanta', soldOut: false },
  { id: 13, image: P13_MEGASWEET, name: 'MEGASWEET Maize Seeds', link: '/advanta', soldOut: false },
];


function AdvantaRoutes() {
  const [loading, setLoading] = useState(true);

  // Cart logic (same as BASF.jsx)
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    // Prevent duplicates
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const isInCart = (productId) => cart.some((item) => item.id === productId);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

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
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            {/* Sold Out Badge */}
            {product.soldOut && (
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                SOLD OUT
              </span>
            )}

            {/* Product Image */}
            <Link to={product.link} className="flex justify-center items-center mb-4">
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
            <p className="text-sm text-gray-500 mb-4">Advanat</p>

            <div className="flex gap-2 w-full mt-2">
              <a
                href={
                  product.soldOut
                    ? '#'
                    : `https://wa.me/919765089080?text=${encodeURIComponent(
                        `Hi, I'm interested in ${product.name}`
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

export default AdvantaRoutes;
