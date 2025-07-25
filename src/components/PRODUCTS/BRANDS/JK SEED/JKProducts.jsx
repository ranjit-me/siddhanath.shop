import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import P1_JKMH1701 from './assets/P1_JKMH1701.png';
import P2_JKMH4545 from './assets/P2_JKMH4545.png';

const products = [
  {
    id: 1,
    image: P1_JKMH1701,
    discount: '22% OFF',
    name: 'JKMH1701 Seed',
    price: 1090,
    original: 1400,
    savings: 310,
    size: '4 Kg',
    link: '/jk',
    soldOut: false,
  },
  {
    id: 2,
    image: P2_JKMH4545,
    discount: '20% OFF',
    name: 'JKMH4545 Seed',
    price: 1120,
    original: 1400,
    savings: 280,
    size: '4 Kg',
    link: '/jk',
    soldOut: false,
  },
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
          <p className="text-sm text-gray-500 mb-4">JK Seeds</p>

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
