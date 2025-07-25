import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import img1 from './assets/10.26.26.png';
import img2 from './assets/12.32.16.png';
import img3 from './assets/15.15.15.09..png';
import img4 from './assets/19.19.19.png';
import img5 from './assets/20.20.0.13.png';
import img6 from './assets/24.24.0.png';
import img7 from './assets/28.28.0.png';
import img8 from './assets/DAP 18.46.0.png';
import img9 from './assets/MOP.png';
import img10 from './assets/Urea.png';

const jaiKisanProducts = [
  { id: 1, image: img1, name: '10.26.26', discount: '10% OFF', price: 900, original: 1000, savings: 100, size: '1 L', link: '/jaikisan', soldOut: false },
  { id: 2, image: img2, name: '12.32.16', discount: '12% OFF', price: 880, original: 1000, savings: 120, size: '1 L', link: '/jaikisan', soldOut: false },
  { id: 3, image: img3, name: '15.15.15.09.', discount: '15% OFF', price: 850, original: 1000, savings: 150, size: '1 L', link: '/jaikisan', soldOut: false },
  { id: 4, image: img4, name: '19.19.19', discount: '8% OFF', price: 920, original: 1000, savings: 80, size: '1 L', link: '/jaikisan', soldOut: false },
  { id: 5, image: img5, name: '20.20.0.13', discount: '20% OFF', price: 800, original: 1000, savings: 200, size: '1 L', link: '/jaikisan', soldOut: false },
  { id: 6, image: img6, name: '24.24.0', discount: '18% OFF', price: 820, original: 1000, savings: 180, size: '1 L', link: '/jaikisan', soldOut: false },
  { id: 7, image: img7, name: '28.28.0', discount: '11% OFF', price: 890, original: 1000, savings: 110, size: '1 L', link: '/jaikisan', soldOut: false },
  { id: 8, image: img8, name: 'DAP 18.46.0', discount: '14% OFF', price: 860, original: 1000, savings: 140, size: '1 L', link: '/jaikisan', soldOut: false },
  { id: 9, image: img9, name: 'MOP', discount: '13% OFF', price: 870, original: 1000, savings: 130, size: '1 L', link: '/jaikisan', soldOut: false },
  { id: 10, image: img10, name: 'Urea', discount: '16% OFF', price: 840, original: 1000, savings: 160, size: '1 L', link: '/jaikisan', soldOut: false },
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
      {jaiKisanProducts.map((product) => (
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
          <p className="text-sm text-gray-500 mb-4">JaiKisan</p>

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
