import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import cedaar_L from './assets/cedaar_L.jpg';
import doubleImg from './assets/double.jpg';
import elpida_L from './assets/elpida_L.jpg';
import gomeda_new from './assets/gomeda_new.jpg';
import gracia from './assets/gracia.jpg';
import impool from './assets/impool.jpg';
import Jikarda from './assets/Jikarda.jpg';
import milduvip from './assets/milduvip.jpg';
import ovitan from './assets/ovitan.jpg';
import portraitt_L from './assets/portraitt_L.jpg';
import pronounce from './assets/pronounce.jpg';
import vipul_granuls from './assets/vipul_granuls.jpg';
import vipul_liquid from './assets/vipul_liquid.jpg';
import weednash_80 from './assets/weednash_80.jpg';

const godrejPesProducts = [
  { id: 1, image: cedaar_L, name: 'Cedaar', link: '/godrejpes', soldOut: false },
  { id: 2, image: doubleImg, name: 'Double', link: '/godrejpes', soldOut: false },
  { id: 3, image: elpida_L, name: 'Elpida', link: '/godrejpes', soldOut: false },
  { id: 4, image: gomeda_new, name: 'Gomeda', link: '/godrejpes', soldOut: false },
  { id: 5, image: gracia, name: 'Gracia', link: '/godrejpes', soldOut: false },
  { id: 6, image: impool, name: 'Impool', link: '/godrejpes', soldOut: false },
  { id: 7, image: Jikarda, name: 'Jikarda', link: '/godrejpes', soldOut: false },
  { id: 8, image: milduvip, name: 'Milduvip', link: '/godrejpes', soldOut: false },
  { id: 9, image: ovitan, name: 'Ovitan', link: '/godrejpes', soldOut: false },
  { id: 10, image: portraitt_L, name: 'Portraitt', link: '/godrejpes', soldOut: false },
  { id: 11, image: pronounce, name: 'Pronounce', link: '/godrejpes', soldOut: false },
  { id: 12, image: vipul_granuls, name: 'Vipul Granuls', link: '/godrejpes', soldOut: false },
  { id: 13, image: vipul_liquid, name: 'Vipul Liquid', link: '/godrejpes', soldOut: false },
  { id: 14, image: weednash_80, name: 'Weednash 80', link: '/godrejpes', soldOut: false },
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
      {godrejPesProducts.map((product) => (
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

          {/* Heart Icon */}
          <FaRegHeart className="absolute top-10 right-2 text-gray-500 hover:text-red-500 cursor-pointer text-xl" />

          {/* Product Info */}
          <h3 className="text-base font-semibold mb-1 flex items-center gap-0 justify-center text-center">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-4">GodrejPes</p>

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
